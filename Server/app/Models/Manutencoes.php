<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manutencoes extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    protected $table = 'manutencoes';
    protected $fillable = [
        'itens_estoque_id',
        'descricao'
    ];

    public function rules()
    {
        return [
            'itens_estoque_id' => 'exists:itens_estoque,id',
            'descricao' => 'required'
        ];

        /*
            1) tabela
            2) nome da coluna que será pesquisada na tabela3
            3) id do registro que será desconsiderado na pesquisa
        */
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
        ];
    }

    public function item_estoque()
    {
        //UMA manutenção PERTENCE a UM itemEstoque
        return $this->belongsTo('App\Models\ItemEstoque');
    }
}
