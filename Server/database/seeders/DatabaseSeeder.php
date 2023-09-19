<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategoriaSeeder::class,
        ]);

        $this->call([
            MarcaSeeder::class,
        ]);

        $this->call([
            ItemSeeder::class,
        ]);

        $this->call([
            SetorSeeder::class,
        ]);

        $this->call([
            UserSeeder::class,
        ]);
    }
}
