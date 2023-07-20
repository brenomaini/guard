<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreitemEstoqueRequest;
use App\Http\Requests\UpdateitemEstoqueRequest;
use App\Models\itemEstoque;
use Illuminate\Http\Request;
use App\Repositories\ItemEstoqueRepository;

class ItemEstoqueController extends Controller
{
    protected $itemEstoque;

    public function __construct(itemEstoque $itemEstoque)
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
        $itemEstoque = $request->all();
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
