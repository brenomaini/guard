<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSetorRequest;
use App\Http\Requests\UpdateSetorRequest;
use App\Models\Setor;
use Illuminate\Http\Request;
use App\Repositories\SetorRepository;

class SetorController extends Controller
{
    protected $setor;

    public function __construct(Setor $setor)
    {
        $this->setor = $setor;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $setorRepository = new SetorRepository($this->setor);

        // filtro multiplo
        if ($request->has('filtro')) {
            $setorRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $setorRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o parametro de paginação
        if ($request->has('pages')) {
            return response()->json($setorRepository->getResultadoPaginado($request->pages), 200);
        } else {
            return response()->json($setorRepository->getResultado(), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSetorRequest $request)
    {
        $request->validate($this->setor->rules(), $this->setor->feedback());
        $setor = Setor::create([
            'nome' => $request->nome,
            'centro_de_custo' => $request->centro_de_custo
        ]);

        return response()->json($setor, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $setor = $this->setor->find($id);
        if ($setor === null) {
            return response()->json(['erro' => 'Setor pesquisado não existe.'], 404);
        }
        return response()->json($setor, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSetorRequest $request, $id)
    {
        $setor = $this->setor->find($id);

        if ($setor === null) {
            return response()->json(['erro' => 'Erro na atualização, setor não existe.'], 404);
        }

        if ($request->method() === 'PATCH') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach ($setor->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if (array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $setor->feedback());
        } else {
            $request->validate($setor->rules(), $setor->feedback());
        }

        $setor->fill($request->all());
        $setor->save();
        return response()->json($setor, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $setor = $this->setor->find($id);

        try {
            if ($setor === null) {
                return response()->json(['msg' => 'Erro ao deletar, setor não existe em nosso banco.'], 404);
            }

            $setor->delete();

            return response()->json(['msg' => 'Setor removido com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: ' . $e->getMessage()], 500);
        }
    }
}
