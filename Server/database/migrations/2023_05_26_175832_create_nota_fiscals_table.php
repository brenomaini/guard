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
        Schema::create('nota_fiscais', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('pedido_id');
            $table->unsignedBigInteger('item_id');
            $table->string('path', 200)->nullable();
            $table->timestamps();
            //foreign key (constraints)
            $table->foreign('pedido_id')->references('id')->on('pedidos');
            $table->foreign('item_id')->references('id')->on('itens');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nota_fiscals');
    }
};
