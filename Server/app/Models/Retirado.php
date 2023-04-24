<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Retirado extends Model
{
    use HasFactory;

    protected $table = 'retirados';

    protected $fillable = [
        "estoque_id",
        "item_id",
        "setor_id",
        "agente",
        "recebedor",
        "email_aprovador",
        "quantidade_retirado",
    ];

    public function rules() {
        return [
            'estoque_id' => 'exists:estoque,id',
            'item_id' => 'exists:itens,id',
            'setor_id' => 'exists:setores,id',
            'agente' => 'required',
            'recebedor' => 'required',
            'email_aprovador' => 'required',
            'quantidade_retirado' => 'integer'
        ];
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório.'
        ];
    }

    public function estoque() {
        //UM item retirado no estoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Item');
    }

    public function item() {
        //UM item retirado no estoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Item');
    }

    public function setor() {
        //UM item retirado no estoque PERTENCE a UM setor
        return $this->belongsTo('App\Models\Setor');
    }
}
