<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdmissaoRequest;
use App\Http\Requests\UpdateAdmissaoRequest;
use App\Models\Admissao;
use Illuminate\Http\Request;

class AdmissaoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdmissaoRequest $request)
    {
        return response()->json($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Admissao $admissao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdmissaoRequest $request, Admissao $admissao)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admissao $admissao)
    {
        //
    }
}
