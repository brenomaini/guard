<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManutencoesRequest;
use App\Http\Requests\UpdateManutencoesRequest;
use App\Models\Manutencoes;
use App\Repositories\ManutencoesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ManutencoesController extends Controller
{
    protected $manutencoes;

    public function __construct(Manutencoes $manutencoes)
    {
        $this->manutencoes = $manutencoes;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $manutencoesRepository = new ManutencoesRepository($this->manutencoes);

        // condição caso exista o atributos na url
        if ($request->has('atributos_item')) {
            $atributos_item = 'item:id,' . $request->atributos_item;
            $manutencoesRepository->selectAtributosRegistrosRelacionados($atributos_item);
        } else {
            $manutencoesRepository->selectAtributosRegistrosRelacionados('item_estoque');
        }

        // filtro multiplo
        if ($request->has('filtro')) {
            $manutencoesRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $manutencoesRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o parametro de paginação
        if ($request->has('pages')) {
            return response()->json($manutencoesRepository->getResultadoPaginado($request->pages), 200);
        } else {
            return response()->json($manutencoesRepository->getResultado(), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreManutencoesRequest $request)
    {
        $request->validate($this->manutencoes->rules(), $this->manutencoes->feedback());
        $manutencoes = Manutencoes::create([
            'itens_estoque_id' => $request->itens_estoque_id,
            'descricao' => $request->descricao
        ]);
        //log
        Log::channel('crud')->info('Item id: ' . $request->itens_estoque_id . ' retirado de manutenção por: agente@email.com');
        return response()->json($manutencoes, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Manutencoes $manutencoes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManutencoesRequest $request, Manutencoes $manutencoes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manutencoes $manutencoes)
    {
        //
    }
}
