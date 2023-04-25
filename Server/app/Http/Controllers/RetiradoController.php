<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRetiradoRequest;
use App\Http\Requests\UpdateRetiradoRequest;
use App\Http\Requests\UpdateEstoqueRequest;
use App\Models\Retirado;
use App\Models\Estoque;
use Illuminate\Http\Request;
use App\Repositories\RetiradoRepository;

class RetiradoController extends Controller
{
    protected $retirado;
    
    public function __construct(Retirado $retirado, Estoque $estoque)
    {
        $this->retirado = $retirado;
        $this->estoque = $estoque;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $retiradoRepository = new RetiradoRepository($this->retirado);

        // filtro multiplo
        if ($request->has('filtro')) {
            $retiradoRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $retiradoRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($retiradoRepository->getResultado(), 200);
        } else {
            return response()->json($retiradoRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRetiradoRequest $request)
    {
        // salvando dados do item retirado
        $request->validate($this->retirado->rules(), $this->retirado->feedback());
        $retirado = Retirado::create([
            'estoque_id' => $request->estoque_id,
            'item_id' => $request->item_id,
            'setor_id' => $request->setor_id,
            'agente' => $request->agente,
            'recebedor' => $request->recebedor,
            'email_aprovador' => $request->email_aprovador,
            'quantidade_retirado' => $request->quantidade_retirado
        ]);

        // tratando nova quantidade do item
        $idItem = $request->estoque_id;
        $item = $this->estoque->find($idItem);
        if($item->quantidade < $request->quantidade_retirado) {
            return response()->json(["msg" => "A quantidade a ser retirada é maior que a disponível em estoque."], 200);
        } else {
            // calculando novo valor de quantidade de itens no estoque
            $calculoQtd = $item->quantidade - $request->quantidade_retirado;
            // atribuindo novo valor de quanitdade de item ao objeto item
            $item->quantidade = $calculoQtd;
            $item->update(['quantidade' => $item->quantidade]);

            return response()->json($retirado, 201);
        }
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
    public function update(UpdateRetiradoRequest $request, $id)
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
