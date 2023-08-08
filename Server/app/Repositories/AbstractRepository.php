<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;


class AbstractRepository
{

    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function selectAtributosRegistrosRelacionados(...$atributos)
    {
        $this->model = $this->model->with($atributos);
        //a query está sendo montada
    }

    public function filtro($filtros)
    {
        $filtros = explode(';', $filtros);

        foreach ($filtros as $key => $condicao) {
            $c = explode(':', $condicao);
            $this->model = $this->model->where($c[0], $c[1], $c[2]);
            //a query está sendo montada
        }
    }

    public function selectAtributos($atributos)
    {
        $this->model = $this->model->selectRaw($atributos);
    }

    public function ordenarAsc($data)
    {
        $this->model = $this->model->orderBy($data, 'asc');
    }

    public function ordenarDesc($data)
    {
        $this->model = $this->model->orderBy($data, 'desc');
    }

    public function getResultado()
    {
        return $this->model->get();
    }

    public function getResultadoPaginado($paginas)
    {
        return $this->model->paginate($paginas);
    }
}
