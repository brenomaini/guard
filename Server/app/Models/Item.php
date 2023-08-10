<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = "itens";

    protected $fillable = [
        'marca_id',
        'categoria_id',
        'nome',
        'descricao',
        'patrimoniado',
        'data_update',
        'link'
    ];

    public function rules()
    {
        return [
            'marca_id' => 'exists:marcas,id',
            'categoria_id' => 'exists:categorias,id',
            'nome' => 'required|unique:itens,nome,' . $this->id,
            'descricao' => 'required'
        ];
    }

    public function feedback()
    {
        return [
            'required' => 'O campo :attribute é obrigatório.',
            'nome.unique' => 'O item já existe no banco.',
        ];
    }

    public function marca()
    {
        //UM modelo PERTENCE a UMA marca
        return $this->belongsTo('App\Models\Marca');
    }

    public function categoria()
    {
        //UM modelo PERTENCE a UMA categoria
        return $this->belongsTo('App\Models\Categoria');
    }

    public function pedido()
    {
        //UM item POSSUI MUITOS pedidos
        return $this->hasMany('App\Models\Pedido');
    }
}
