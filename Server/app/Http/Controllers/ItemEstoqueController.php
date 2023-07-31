<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreitemEstoqueRequest;
use App\Http\Requests\UpdateitemEstoqueRequest;
use App\Models\ItemEstoque;
use App\Models\Pedido;
use Illuminate\Http\Request;
use App\Repositories\ItemEstoqueRepository;

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
            $itemEstoqueRepository->selectAtributosRegistrosRelacionados('pedido', 'item', 'nota', 'setor');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $itemEstoqueRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $itemEstoqueRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($itemEstoqueRepository->getResultado(), 200);
        } else {
            return response()->json($itemEstoqueRepository->getResultadoPaginado(20), 200);
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
                "nota_id" => $patrimonios[$i]->nota_id,
                "localizacao" => $patrimonios[$i]->localizacao,
                "patrimonio" => $patrimonios[$i]->patrimonio
            ]);
        }

        $pedidoUpdateStatus = Pedido::where('id', $request->pedido_id)->update([
            "status" => $request->status
        ]);

        return response()->json($itemEstoque);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateitemEstoqueRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
