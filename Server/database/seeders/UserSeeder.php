<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Administrator',
            'email' => 'admin@guard.com',
            'password' => '$2y$10$WXmfImEdKZDAJ1tDCYuq6.vVUkXiFPpStkgEOL8l5OzjxUAoXvRyq'
        ]);
    }
}
