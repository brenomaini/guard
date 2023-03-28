<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartegoriaRequest;
use App\Http\Requests\UpdateCartegoriaRequest;
use App\Models\Cartegoria;

class CartegoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return __FUNCTION__;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartegoriaRequest $request)
    {
        return __FUNCTION__;
    }

    /**
     * Display the specified resource.
     */
    public function show(Cartegoria $cartegoria)
    {
        return __FUNCTION__;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartegoriaRequest $request, Cartegoria $cartegoria)
    {
        return __FUNCTION__;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cartegoria $cartegoria)
    {
        return __FUNCTION__;
    }
}
