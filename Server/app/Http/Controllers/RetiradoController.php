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
        
        return response()->json($retirado, 201);
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
