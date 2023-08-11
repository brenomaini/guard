<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class MarcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            'Dell',
            'Lenovo',
            'Gigabyte',
            'Samsung',
            'HyperX',
            'Microsoft',
            'Logitech',
            'Asus',
            'Corsair'
        ];

        foreach ($names as $name) {
            DB::table('marcas')->insert([
                'nome' => $name,
            ]);
        }
    }
}
