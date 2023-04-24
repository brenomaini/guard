<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRetiradoRequest;
use App\Http\Requests\UpdateRetiradoRequest;
use App\Models\Retirado;
use Illuminate\Http\Request;
use App\Repositories\RetiradoRepository;

class RetiradoController extends Controller
{
    protected $retirado;
    
    public function __construct(Retirado $retirado)
    {
        $this->retirado = $retirado;
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRetiradoRequest $request)
    {
        //
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
