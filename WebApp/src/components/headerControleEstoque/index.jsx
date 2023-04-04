export default function HeaderControle() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className=" gap-4 table-cell"></div>
        <div className=" gap-4 table-cell"></div>
        <div className="text-white table-cell font-semibold text-xl bg-gran-blue  justify-center items-center p-2 rounded-tl-md max-sm:text-base w-1/12">
          Nota
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell  justify-center items-center p-2  max-sm:text-base w-2/6">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base w-1/6">
          Setor(CC)
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Disponível
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Status
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Quantidade
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base w-1/12">
          Retirado
        </div>

        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-tr-md max-sm:text-base w-1/12">
          Localização
        </div>
      </div>
    </div>
  );
}
