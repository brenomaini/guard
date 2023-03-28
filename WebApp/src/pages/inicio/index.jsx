import React from "react";
import DashboardGridLineBlue from "../../components/dashbordGridLineBlue";
import DashboardGridLineRed from "../../components/dashbordGridLineRed";

export default function InicioDashboard() {
  const mockLineBlue = [
    { text: "ITENS EM ESTOQUE", value: 155 },
    { text: "TIPO DE ITENS", value: 35 },
    { text: "SAÍDAS (30 Dias)", value: 65 },
    { text: "ENTRADAS (30 Dias)", value: 35 },
  ];
  const mockLineRed = [
    { text: "KIT MOUSE E TECLADO DELL", value: 5 },
    { text: "MONITOR 24", value: 3 },
    { text: "HEADSET COISÉR", value: 5 },
    { text: "HEBECAM", value: 2 },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-10 h-full m-4">
      <div className="grid gap-4 grid-cols-2 grid-rows-1 row-auto h-16 w-full  place-items-center  p-2">
        <div className="text-white font-semibold text-3xl bg-gran-blue w-full h-full flex justify-center items-center">
          VISÃO GERAL
        </div>
        <div className="text-white font-semibold text-3xl bg-gran-red w-full h-full flex justify-center items-center">
          ESTOQUE CRÍTICO
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-3 w-full    place-items-center p-2">
        <div className="inline-grid gap-2 grid-cols-2 h-full grid-flow-row w-full place-items-center">
          {mockLineBlue.map((item) => {
            return (
              <DashboardGridLineBlue
                text={item.text}
                value={item.value}
                key={item.text}
              />
            );
          })}
        </div>
        <div className="inline-grid gap-2 grid-cols-2 h-full grid-flow-row w-full place-items-center ">
          {mockLineRed.map((item) => {
            return (
              <DashboardGridLineRed
                text={item.text}
                value={item.value}
                key={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
