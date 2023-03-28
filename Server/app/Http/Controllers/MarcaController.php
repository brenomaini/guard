<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMarcaRequest;
use App\Http\Requests\UpdateMarcaRequest;
use App\Models\Marca;

class MarcaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return __FUNCTION__;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return __FUNCTION__;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMarcaRequest $request)
    {
        return __FUNCTION__;
    }

    /**
     * Display the specified resource.
     */
    public function show(Marca $marca)
    {
        return __FUNCTION__;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marca $marca)
    {
        return __FUNCTION__;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMarcaRequest $request, Marca $marca)
    {
        return __FUNCTION__;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Marca $marca)
    {
        return __FUNCTION__;
    }
}
