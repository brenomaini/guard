<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreEstoqueRequest;
use App\Http\Requests\UpdateEstoqueRequest;
use App\Models\Estoque;
use Illuminate\Http\Request;
use App\Repositories\EstoqueRepository;

class EstoqueController extends Controller
{
    protected $estoque;

    public function __construct(Estoque $estoque)
    {
        $this->estoque = $estoque;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $estoqueRepository = new EstoqueRepository($this->estoque);

        // condição caso exista o atributo atributos_modelo na url
        // if ($request->has('atributos_item')) {
        //     $atributos_item = 'item:id,' . $request->atributos_item;
        //     $estoqueRepository->selectAtributosRegistrosRelacionados($atributos_item);
        // } else {
        //     $estoqueRepository->selectAtributosRegistrosRelacionados('item', 'setor', 'status');
        // }

        // filtro multiplo
        if ($request->has('filtro')) {
            $estoqueRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $estoqueRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($estoqueRepository->getResultado(), 200);
        } else {
            return response()->json($estoqueRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEstoqueRequest $request)
    {
        $request->validate($this->estoque->rules(), $this->estoque->feedback());

        $arquivoNota = $request->file('imgnota');
        $arquivo_urn = $arquivoNota->store('files/notas', 'public');
        $estoque = Estoque::create([
            'item_id' => $request->item_id,
            'setor_id' => $request->setor_id,
            'status_id' => $request->status_id,
            'quantidade' => $request->quantidade,
            'localizacao' => $request->localizacao,
            'agente' => $request->agente,
            'notafiscal' => $request->notafiscal,
            'imgnota' => $arquivo_urn
        ]);

        return response()->json($estoque, 201);
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
    public function update(UpdateEstoqueRequest $request, $id)
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
