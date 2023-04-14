<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setor extends Model
{
    use HasFactory;

    protected $table = 'setores';
    
    protected $fillable = [
        'nome',
        'centro_de_custo',
    ];

    public function rules() {
        return [
            'nome' => 'required|unique:setores,nome,'.$this->id,
            'centro_de_custo' => 'required|unique:setores,centro_de_custo,'.$this->id,
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
            'centro_de_custo.unique' => 'O centro de custo já existe no banco.',
        ];
    }
}
