export default function HeaderInformacoesNotasPedidos() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className="text-white table-cell font-semibold text-xl bg-guard-green  justify-center items-center p-2 rounded-tl-md max-sm:text-base ">
          Nota
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell  justify-center items-center p-2  max-sm:text-base">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell  justify-center items-center p-2  max-sm:text-base">
          Disponivel
        </div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base ">
          Retirados/Quebrados/Manutenção
        </div>

        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2 max-sm:text-base ">
          Comprados
        </div>

        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base "></div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2  max-sm:text-base "></div>
        <div className="text-white font-semibold text-xl bg-guard-green table-cell justify-center items-center p-2 rounded-tr-md max-sm:text-base "></div>
      </div>
    </div>
  );
}
