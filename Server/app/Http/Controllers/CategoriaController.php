<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoriaRequest;
use App\Http\Requests\UpdateCategoriaRequest;
use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Repositories\CategoriaRepository;

class CategoriaController extends Controller
{
    protected $categoria;
    
    public function __construct(Categoria $categoria)
    {
        $this->categoria = $categoria;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categoriaRepository = new CategoriaRepository($this->categoria);

        // filtro multiplo
        if ($request->has('filtro')) {
            $categoriaRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $categoriaRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($categoriaRepository->getResultado(), 200);
        } else {
            return response()->json($categoriaRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoriaRequest $request)
    {
        $request->validate($this->categoria->rules(), $this->categoria->feedback());
        $categoria = Categoria::create([
            'nome' => $request->nome
        ]);

        return response()->json($categoria, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categoria = $this->categoria->find($id);

        if($categoria === null) {
            return response()->json(['erro' => 'Categoria pesquisada não existe'], 404);
        }
        return response()->json($categoria, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriaRequest $request, $id)
    {
        $categoria = $this->categoria->find($id);

        if($categoria === null) {
            return response()->json(['erro' => 'Erro na atualização, categoria não existe.'], 404);
        }

        if($request->method() === 'patch') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach($categoria->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if(array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $categoria->feedback());
        } else {
            $request->validate($categoria->rules(), $categoria->feedback());
        }

        $categoria->fill($request->all());
        $categoria->save();
        return response()->json($categoria, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categoria = $this->categoria->find($id);

        try {
            if($categoria === null)
            {
                return response()->json(['msg' => 'Erro ao deletar, categoria não existe em nosso banco.'], 404);
            }
            
            $categoria->delete();

            return response()->json(['msg' => 'Categoria removida com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: '.$e->getMessage()], 500);
        }
    }
}
