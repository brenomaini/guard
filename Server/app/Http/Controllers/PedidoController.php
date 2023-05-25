<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePedidoRequest;
use App\Http\Requests\UpdatePedidoRequest;
use App\Models\Pedido;
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

        // // condição caso exista o atributo atributos_modelo na url
        // if ($request->has('atributos_marca')) {
        //     $atributos_marca = 'marca:id,' . $request->atributos_marca;
        //     $pedidoRepository->selectAtributosRegistrosRelacionados($atributos_marca);
        // } else {
        //     $pedidoRepository->selectAtributosRegistrosRelacionados('marca', 'categoria');
        // }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($pedidoRepository->getResultado(), 200);
        } else {
            return response()->json($pedidoRepository->getResultadoPaginado(10), 200);
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
    public function show(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePedidoRequest $request, Pedido $pedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
        //
    }
}
