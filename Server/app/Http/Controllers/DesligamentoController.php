<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDesligamentoRequest;
use App\Http\Requests\UpdateDesligamentoRequest;
use App\Models\Desligamento;
use Illuminate\Http\Request;

class DesligamentoController extends Controller
{
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
    public function store(StoreDesligamentoRequest $request)
    {
        return response()->json($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Desligamento $desligamento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDesligamentoRequest $request, Desligamento $desligamento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Desligamento $desligamento)
    {
        //
    }
}
