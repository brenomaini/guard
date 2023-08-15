<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreitemEstoqueRequest;
use App\Http\Requests\UpdateitemEstoqueRequest;
use App\Models\ItemEstoque;
use App\Models\Pedido;
use Illuminate\Http\Request;
use App\Repositories\ItemEstoqueRepository;
use Illuminate\Support\Facades\Log;

class ItemEstoqueController extends Controller
{
    protected $itemEstoque;

    public function __construct(ItemEstoque $itemEstoque)
    {
        $this->itemEstoque = $itemEstoque;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $itemEstoqueRepository = new ItemEstoqueRepository($this->itemEstoque);

        // condição caso exista o atributos na url
        if ($request->has('atributos_item')) {
            $atributos_item = 'item:id,' . $request->atributos_item;
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados($atributos_item);
        } elseif ($request->has('atributos_setor')) {
            $atributos_setor = 'setor:id,' . $request->atributos_setor;
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados($atributos_setor);
        } elseif ($request->has('atributos_notas')) {
            $atributos_notas = 'nota:id,' . $request->atributos_notas;
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados($atributos_notas);
        } elseif ($request->has('atributos_pedido')) {
            $atributos_pedido = 'pedido:id,' . $request->atributos_pedido;
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados($atributos_pedido);
        } else {
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados('pedido', 'item', 'notas_fiscais', 'setor');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $itemEstoqueRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $itemEstoqueRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o parametro de paginação
        if ($request->has('pages')) {
            return response()->json($itemEstoqueRepository->getResultadoPaginado($request->pages), 200);
        } else {
            return response()->json($itemEstoqueRepository->getResultado(), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreitemEstoqueRequest $request)
    {
        // reculperando dados e decodificando o json
        $patrimonios = json_decode($request->patrimonios);

        // contando quantos indices tem o objeto patrimonios
        $patrimoniosCount = count($patrimonios);

        // salvando em loop referente a quantidade de indice em $patrimoniosCount
        for ($i = 0; $i < $patrimoniosCount; $i++) {
            $itemEstoque = ItemEstoque::create([
                "item_id" => $request->item_id,
                "setor_id" => $request->setor_id,
                "pedido_id" => $request->pedido_id,
                "status" => $request->status,
                "notas_fiscais_id" => $patrimonios[$i]->nota_id,
                "localizacao" => $patrimonios[$i]->localizacao,
                "patrimonio" => $patrimonios[$i]->patrimonio,
                "numeroSerie" => $patrimonios[$i]->numero_serie,
                "agente" => $request->agente,
                'data_update' => $request->data_update
            ]);
        }

        // atualizando status do pedido referente ao $request->pedido_id
        $pedidoUpdateStatus = Pedido::where('id', $request->pedido_id)->update([
            "status" => $request->status
        ]);
        //log
        Log::channel('crud')->info('Itens do pedido id: ' . $request->pedido_id . ' foram patrimoniado e alterado pelo agente: agente@gran.com.br. para o status: ' . $request->status);
        return response()->json($itemEstoque);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $itemEstoque = $this->itemEstoque->find($id);

        if ($itemEstoque === null) {
            return response()->json(['erro' => 'item pesquisada não existe no estoque'], 404);
        }
        return response()->json($itemEstoque, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateitemEstoqueRequest $request, $id)
    {
        $itemEstoque = $this->itemEstoque->find($id);

        if ($itemEstoque === null) {
            return response()->json(['erro' => 'Erro na atualização, item não existe no estoque.'], 404);
        }

        if ($request->method() === 'PATCH') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach ($itemEstoque->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if (array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $itemEstoque->feedback());
        } else {
            $request->validate($itemEstoque->rules(), $itemEstoque->feedback());
        }

        $itemEstoque->fill($request->all());
        $itemEstoque->save();
        return response()->json($itemEstoque, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
