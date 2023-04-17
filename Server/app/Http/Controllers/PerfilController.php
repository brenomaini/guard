<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePerfilRequest;
use App\Http\Requests\UpdatePerfilRequest;
use App\Models\Perfil;
use Illuminate\Http\Request;
use App\Repositories\PerfilRepository;

class PerfilController extends Controller
{

    protected $perfil;

    public function __construct(Perfil $perfil) 
    {
        $this->perfil = $perfil;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perfilRepository = new PerfilRepository($this->perfil);

        // // condição caso exista o atributo atributos_marca na url
        // if ($request->has('atributos_users')) {
        //     $atributos_users = 'users:id,'.$request->atributos_users;
        //     $perfilRepository->selectAtributosRegistrosRelacionados($atributos_users);
        // } else {
        //     $perfilRepository->selectAtributosRegistrosRelacionados('users');
        // }

        // filtro multiplo
        if ($request->has('filtro')) {
            $perfilRepository->filtro($request->filtro);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('atributos')) {
            $perfilRepository->selectAtributos($request->atributos);
        }

        // condição caso exista o atributo atributos na url
        if ($request->has('all')) {
            return response()->json($perfilRepository->getResultado(), 200);
        } else {
            return response()->json($perfilRepository->getResultadoPaginado(10), 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePerfilRequest $request)
    {
        $request->validate($this->perfil->rules(), $this->perfil->feedback());
        $perfil = Perfil::create([
            'nome' => $request->nome,
            'cadastrar' => $request->cadastrar,
            'atualizar' => $request->atualizar,
            'deletar' => $request->deletar,
            'vizualizar' => $request->vizualizar
        ]);

        return response()->json($perfil, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $perfil = $this->perfil->find($id);
        if($perfil === null)
        {
            return response()->json(['erro' => 'Perfil pesquisado não existe.'], 404);
        }
        return response()->json($perfil, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePerfilRequest $request, $id)
    {
        $perfil = $this->perfil->find($id);

        if($perfil === null) {
            return response()->json(['erro' => 'Erro na atualização, perfil não existe.'], 404);
        }

        if($request->method() === 'PATCH') {
            //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
            $regrasDinamicas = array();

            //percorrendo todas as regras definidas no Model
            foreach($perfil->rules() as $input => $regra) {
                //coletar apenas as regras aplicáveis aos parâmetros parciais da requisição PATCH
                if(array_key_exists($input, $request->all())) {
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas, $perfil->feedback());
        } else {
            $request->validate($perfil->rules(), $perfil->feedback());
        }

        $perfil->fill($request->all());
        $perfil->save();
        return response()->json($perfil, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $perfil = $this->perfil->find($id);

        try {
            if($perfil === null)
            {
                return response()->json(['msg' => 'Erro ao deletar, perfil não existe em nosso banco.'], 404);
            }
            
            $perfil->delete();

            return response()->json(['msg' => 'Perfil removido com sucesso.'], 200);
        } catch (\PDOException $e) {
            return response()->json(['msg' => 'Erro: '.$e->getMessage()], 500);
        }
    }
}
