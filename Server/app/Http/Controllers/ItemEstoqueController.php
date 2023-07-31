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
        //
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
