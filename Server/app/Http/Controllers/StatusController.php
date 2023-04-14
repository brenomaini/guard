<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;
use Illuminate\Http\Request;
use App\Repositories\StatusRepository;

class StatusController extends Controller
{

    protected $status;

    public function __construct(Status $status)
    {
        $this->status = $status;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $statusRepository = new StatusRepository($this->status);

        // filtro multiplo
        if ($request->has('filtro')) {
            $statusRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $statusRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($statusRepository->getResultado(), 200);
        } else {
            return response()->json($statusRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatusRequest $request)
    {
        $request->validate($this->status->rules(), $this->status->feedback());
        $status = Status::create([
            'nome' => $request->nome
        ]);

        return response()->json($status, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $status)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatusRequest $request, Status $status)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $status)
    {
        //
    }
}
