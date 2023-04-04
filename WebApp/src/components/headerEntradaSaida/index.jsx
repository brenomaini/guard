export default function HeaderControle() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className="text-white table-cell font-semibold text-xl bg-gran-blue  justify-center items-center p-2 rounded-tl-md max-sm:text-base ">
          Nota
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell  justify-center items-center p-2  max-sm:text-base">
          Item
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base ">
          Setor(CC)
        </div>

        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 max-sm:text-base ">
          Aprovador
        </div>

        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base ">
          Responsável
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2  max-sm:text-base ">
          Agente
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell justify-center items-center p-2 rounded-tr-md max-sm:text-base ">
          Data
        </div>
      </div>
    </div>
  );
}
