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
    public function show($id)
    {
        $status = $this->status->find($id);
        if($status === null)
        {
            return response()->json(['erro' => 'Status pesquisado não existe.'], 404);
        }
        return response()->json($status, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatusRequest $request, $id)
    {
        $status = $this->status->find($id);

        if($status === null) {
            return response()->json(['erro' => 'Erro na atualização, status não existe.'], 404);
        }

        if($request->method() === 'patch') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach($status->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if(array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $status->feedback());
        } else {
            $request->validate($status->rules(), $status->feedback());
        }

        $status->fill($request->all());
        $status->save();
        return response()->json($status, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $status = $this->status->find($id);

        try {
            if($status === null)
            {
                return response()->json(['msg' => 'Erro ao deletar, status não existe em nosso banco.'], 404);
            }
            
            $status->delete();

            return response()->json(['msg' => 'Status removido com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: '.$e->getMessage()], 500);
        }
    }
}
