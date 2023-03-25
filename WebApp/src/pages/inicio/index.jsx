export default function InicioDashboard() {
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
          <div className="w-full h-16  flex items-center justify-center bg-gran-blue bg-opacity-70 text-white text-center">
            ITENS EM ESTOQUE
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            132
          </div>
          <div className="w-full h-16 flex items-center justify-center bg-gran-blue bg-opacity-70 text-white text-center">
            TIPOS DE ITENS
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            30
          </div>
          <div className="w-full h-16 flex items-center justify-center bg-gran-blue bg-opacity-70 text-white text-center">
            SAÍDAS (30 Dias)
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            60
          </div>
          <div className="w-full h-16 flex items-center justify-center bg-gran-blue bg-opacity-70 text-white text-center">
            ENTRADAS (30 Dias)
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            45
          </div>
        </div>
        <div class="inline-grid gap-2 grid-cols-2 h-full grid-flow-row w-full place-items-center ">
          <div className="w-full h-16  bg-gran-red bg-opacity-70 text-white text-center flex items-center justify-center">
            KIT MOUSE E TECLADO DELL
          </div>
          <div className="w-full h-16 text-center flex items-center justify-center bg-white">
            5
          </div>
          <div className="w-full h-16 bg-gran-red bg-opacity-70 text-white text-center flex items-center justify-center">
            MONITOR 24"
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            3
          </div>
          <div className="w-full h-16 bg-gran-red bg-opacity-70 text-white text-center flex items-center justify-center">
            HEADSET COISÉR
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            5
          </div>
          <div className="w-full h-16 bg-gran-red bg-opacity-70 text-white text-center flex items-center justify-center">
            HEBECAM
          </div>
          <div className="w-full h-16 flex items-center justify-center text-center bg-white">
            5
          </div>
        </div>
      </div>
    </div>
  );
}
