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
        Schema::create('item_estoques', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pedido_id');
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('nota_id');
            $table->string('status', 50);
            $table->string('patrimonio', 50);
            $table->integer('quantidade')->default('1');
            $table->string('localização', 10);
            $table->timestamps();
            //foreign key (constraints)
            $table->foreign('pedido_id')->references('id')->on('pedidos');
            $table->foreign('item_id')->references('id')->on('itens');
            $table->foreign('nota_id')->references('id')->on('nota_fiscais');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_estoques');
    }
};
