<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;

    protected $table = 'perfis';

    protected $fillable = [
        'nome',
        'cadastrar',
        'atualizar',
        'deletar',
        'vizualizar'
    ];

    public function rules() {
        return [
            'nome' => 'required|unique:perfis,nome,'.$this->id,
            'cadastrar' => 'required|boolean',
            'atualizar' => 'required|boolean',
            'deletar' => 'required|boolean',
            'vizualizar' => 'required|boolean'
        ];

        /*
            1) tabela
            2) nome da coluna que será pesquisada na tabela3
            3) id do registro que será desconsiderado na pesquisa
        */
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'nome.unique' => 'O perfil já existe no banco.',
        ];
    }

    public function colaboradores() {
        //UM perfil POSSUI MUITOS colaboradores
        return $this->hasMany('App\Models\Auth');
    }
}
