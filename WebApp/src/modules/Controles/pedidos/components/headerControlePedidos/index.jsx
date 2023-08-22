export default function HeaderControlePedidos() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className=" gap-4 table-cell"></div>
        <div className=" gap-4 table-cell"></div>
        <div className="text-white table-cell font-semibold text-xl bg-guard-green  justify-center items-center p-2 rounded-tl-md max-sm:text-base w-1/12">
          ID Pedido
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell  justify-center items-center p-2  max-sm:text-base w-2/6">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base w-1/6">
          Setor solicitante
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Status
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Disponível
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Comprados
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Retirados
        </div>

        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2 rounded-tr-md max-sm:text-base w-1/12"></div>
      </div>
    </div>
  );
}
