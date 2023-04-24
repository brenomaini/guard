<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('retirados', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('setor_id');
            $table->unsignedBigInteger('estoque_id');
            $table->string('agente', 100);
            $table->string('recebedor', 100);
            $table->string('email_aprovador', 100);
            $table->integer('quantidade_retirado');
            $table->timestamps();
            //foreign key (constraints)
            $table->foreign('item_id')->references('id')->on('itens');
            $table->foreign('setor_id')->references('id')->on('setores');
            $table->foreign('estoque_id')->references('id')->on('estoque');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('retirados');
    }
};
