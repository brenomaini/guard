import React from "react";
import UltimasEntradas from "../components/ultimasEntradas";
import UltimasSaidas from "../components/ultimasSaidas";

export default function InicioDashboard() {
  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-40  h-full m-4">
      <div className="grid gap-1 grid-cols-2 h-16 w-full  place-items-center p-2">
        <div className="text-white font-semibold text-3xl bg-gran-blue w-full h-full flex justify-center items-center">
          ÚLTIMAS ENTRADAS
        </div>
        <div className="text-white font-semibold text-3xl bg-gran-red w-full h-full flex justify-center items-center">
          ÚLTIMAS SAÍDAS
        </div>
        <div className="grid gap-2 grid-cols-5 h-full grid-flow-row w-full place-items-center">
          <span>ITEM</span>
          <span>PATRIMÔNIO</span>
          <span>STATUS</span>
          <span>DATA</span>
          <span>AGENTE</span>
        </div>
        <div className="grid grid-cols-6 h-full grid-flow-row w-full place-items-center">
          <span>ITEM</span>
          <span>PATRIMÔNIO</span>
          <span>STATUS</span>
          <span>DATA</span>
          <span>AGENTE</span>
          <span>RESPONSÁVEL</span>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 row-auto w-full place-items-start p-2 text-sm">
        <div className="inline-grid gap-1 grid-cols-5 max-h-min grid-flow-row w-full place-items-center ">
          <UltimasEntradas />
        </div>
        <div className="inline-grid gap-1 grid-cols-6 max-h-min grid-flow-row w-full place-items-center ">
          <UltimasSaidas />
        </div>
      </div>
    </div>
  );
}
