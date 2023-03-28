export default function HeaderControle() {
  return (
    <div className="table-header-group">
      <div className="table-row">
        <div className=" gap-4 table-cell"></div>
        <div className="text-white table-cell font-semibold text-xl bg-gran-blue  justify-center items-center p-2 rounded-md max-sm:text-base w-1/2">
          Nota
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell  justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Setor(CC)
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Disponível
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Status
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Quantidade
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Retirado
        </div>

        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-md max-sm:text-base w-full">
          Localização
        </div>
      </div>
    </div>
  );
}
