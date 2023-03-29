<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory; 
    protected $fillable = ['categoria'];

    public function rules() {
        return [
            'categoria' => 'required|unique:categorias,categoria,'.$this->id,
        ];
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'categoria.unique' => 'Já existe uma categoria com esse nome.'
        ];
    }
}
