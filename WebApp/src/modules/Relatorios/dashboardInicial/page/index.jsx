import React from "react";
import DashboardGridLineBlue from "../../../../components/dashbordGridLineBlue";
import DashboardGridLineRed from "../../../../components/dashbordGridLineRed";

export default function InicioDashboard() {
  const mockLineBlue = [
    { text: "Notebook G15", value: "31/07/23 - 08:35" },
    { text: "Notebook G15", value: "31/07/23 - 08:55" },
    { text: "Headset Coisér", value: "31/07/23 - 08:55" },
    { text: "Kit Teclado e Mouse Dell", value: "31/07/23 - 10:55" },
  ];
  const mockLineRed = [
    { text: "KIT MOUSE E TECLADO DELL", value: "31/07/23 - 09:55" },
    { text: "MONITOR 24", value: "31/07/23 - 10:05" },
    { text: "HEADSET COISÉR", value: "31/07/23 - 10:35" },
    { text: "HEBECAM", value: "31/07/23 - 10:40" },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-40  h-full m-4">
      <div className="grid gap-4 grid-cols-2 grid-rows-1 row-auto h-16 w-full  place-items-center  p-2">
        <div className="text-white font-semibold text-3xl bg-gran-blue w-full h-full flex justify-center items-center">
          Ultimas saídas
        </div>
        <div className="text-white font-semibold text-3xl bg-gran-red w-full h-full flex justify-center items-center">
          Ultimas entradas
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-3 w-full    place-items-center p-2">
        <div className="inline-grid gap-2 grid-cols-2 h-full grid-flow-row w-full place-items-center">
          {mockLineBlue.map((item) => {
            return (
              <DashboardGridLineBlue
                text={item.text.toLocaleUpperCase()}
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
                text={item.text.toLocaleUpperCase()}
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
