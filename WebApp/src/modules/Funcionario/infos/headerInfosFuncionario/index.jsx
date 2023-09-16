export default function HeaderInfosfuncionario() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className="text-white table-cell font-semibold text-xl bg-guard-green  justify-center items-center p-2 rounded-tl-md max-sm:text-base ">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell  justify-center items-center p-2  max-sm:text-base">
          Ultima movimentação
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell  justify-center items-center p-2  max-sm:text-base">
          Nota Fiscal
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base ">
          Pedido
        </div>

        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2 max-sm:text-baserounded-tr-md ">
          Status
        </div>
      </div>
    </div>
  );
}
