<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePedidoRequest;
use App\Http\Requests\UpdatePedidoRequest;
use App\Models\Pedido;
use App\Models\NotasFiscais;
use Illuminate\Http\Request;
use App\Repositories\PedidoRepository;

class PedidoController extends Controller
{
    protected $pedido;

    public function __construct(Pedido $pedido)
    {
        $this->pedido = $pedido;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pedidoRepository = new PedidoRepository($this->pedido);

        // condição caso exista o atributos na url
        if ($request->has('atributos_item')) {
            $atributos_item = 'item:id,' . $request->atributos_item;
            $pedidoRepository->selectAtributosRegistrosRelacionados($atributos_item);
        } elseif ($request->has('atributos_setor')) {
            $atributos_setor = 'setor:id,' . $request->atributos_setor;
            $pedidoRepository->selectAtributosRegistrosRelacionados($atributos_setor);
        } else {
            $pedidoRepository->selectAtributosRegistrosRelacionados('item', 'setor');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $pedidoRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $pedidoRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($pedidoRepository->getResultado(), 200);
        } else {
            return response()->json($pedidoRepository->getResultadoPaginado(20), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePedidoRequest $request)
    {
        $request->validate($this->pedido->rules(), $this->pedido->feedback());
        $pedido = Pedido::create([
            'item_id' => $request->item_id,
            'setor_id' => $request->setor_id,
            'status' => $request->status,
            'agente' => $request->agente,
            'aprovador' => $request->aprovador,
            'quantidade' => $request->quantidade,
            'solicitante' => $request->solicitante
        ]);

        return response()->json($pedido, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pedido = $this->pedido->find($id);

        if ($pedido === null) {
            return response()->json(['erro' => 'Pedido pesquisado não existe no banco.'], 404);
        }
        return response()->json($pedido, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePedidoRequest $request, $id)
    {
        try {
            $pedido = $this->pedido->find($id);

            if ($pedido === null) {
                return response()->json(['erro' => 'Erro na atualização, pedido não existe no banco.'], 404);
            }

            if ($request->method() === 'PATCH') {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                $regrasDinamicas = array();

                //percorrendo todas as regras definidas no Model
                foreach ($pedido->rules() as $input => $regra) {
                    //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                    if (array_key_exists($input, $request->all())) {
                        $regrasDinamicas[$input] = $regra;
                    }
                }

                $request->validate($regrasDinamicas, $pedido->feedback());
            } else {
                $request->validate($pedido->rules(), $pedido->feedback());
            }

            // dados da tabela nota_fiscais
            if ($request->qtdNotas != '') {
                $dataNotas = json_decode($request->notasData);
                $notasCount = count($dataNotas);
                for ($i = 0; $i < $notasCount; $i++) {
                    $notaFile = $request->file("notasFile{$i}");
                    $nota_urn = $notaFile->store('notasPDF/' . $id, 'public');
                    $notas = NotasFiscais::create([
                        'item_id' => $dataNotas[$i]->idItem,
                        'pedido_id' => $dataNotas[$i]->idPedido,
                        'nf' => $dataNotas[$i]->nf,
                        'notafile' => $nota_urn,
                        'quantidade' => $dataNotas[$i]->qtd,
                        'agente' => $dataNotas[$i]->agente
                    ]);
                }
            }
            $pedido->fill($request->all());
            $pedido->save();
            return response()->json($pedido, 200);
        } catch (\PDOException $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    /**b
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pedido = $this->pedido->find($id);

        try {
            if ($pedido === null) {
                return response()->json(['msg' => 'Erro ao deletar, pedido não existe em nosso banco.'], 404);
            }

            $pedido->delete();

            return response()->json(['msg' => 'pedido removido com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: ' . $e->getMessage()], 500);
        }
    }
}
