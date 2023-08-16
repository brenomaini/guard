<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            'Notebook',
            'Micro PC',
            'Hardware',
            'Monitor',
            'Periféricos',
            'Camêra',
            'Cabos',
            'Gabinete'
        ];

        foreach ($names as $name) {
            DB::table('categorias')->insert([
                'nome' => $name,
            ]);
        }
    }
}
