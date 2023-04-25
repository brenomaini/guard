<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque extends Model
{
    use HasFactory;
    protected $connection = 'mysql';

    protected $table = 'estoque';

    protected $fillable = [
        'item_id',
        'setor_id',
        'status_id',
        'quantidade',
        'localizacao',
        'agente',
        'notafiscal',
        'imgnota'
    ];

    public function rules() {
        return [
            'item_id' => 'exists:itens,id',
            'setor_id' => 'exists:setores,id',
            'status_id' => 'exists:status,id',
            'quantidade' => 'required',
            'localizacao' => 'required',
            'agente' => 'required',
            'imgnota' => 'file|mimes:png,pdf'
        ];
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório.',
            'imgnota.mimes' => 'O arquivo deve ser uma imagem do tipo PNG ou PDF.',
        ];
    }

    public function item() {
        //UM item no estoque PERTENCE a UM item
        return $this->belongsTo('App\Models\Item');
    }

    public function setor() {
        //UM item no estoque PERTENCE a UM setor
        return $this->belongsTo('App\Models\Setor');
    }

    public function status() {
        //UM item no estoque PERTENCE a UM status
        return $this->belongsTo('App\Models\Status');
    }
}
