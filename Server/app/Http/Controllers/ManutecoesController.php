<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManutecoesRequest;
use App\Http\Requests\UpdateManutecoesRequest;
use App\Models\Manutecoes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ManutecoesController extends Controller
{
    protected $manutencoes;

    public function __construct(Manutecoes $manutencoes)
    {
        $this->manutencoes = $manutencoes;
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
    public function store(StoreManutecoesRequest $request)
    {
        $request->validate($this->manutencoes->rules(), $this->manutencoes->feedback());
        $manutencoes = Manutecoes::create([
            'itens_estoque_id' => $request->itens_estoque_id
        ]);
        //log
        Log::channel('crud')->info('Item id: ' . $request->itens_estoque_id . ' retirado de manutenção por: agente@email.com');
        return response()->json($manutencoes, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Manutecoes $manutecoes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManutecoesRequest $request, Manutecoes $manutecoes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manutecoes $manutecoes)
    {
        //
    }
}
