export default function HeaderItens() {
  return (
    <div className="table-header-group ">
      <div className="table-row text-center">
        <div className="text-white table-cell font-semibold text-xl bg-gran-blue  p-2 rounded-tl-md max-sm:text-base ">
          Nome
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell  p-2  max-sm:text-base ">
          Status
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-cell  p-2  max-sm:text-base">
          Setor pertencente
        </div>
        <div className="text-white font-semibold text-xl bg-gran-blue table-col  p-2  max-sm:text-base">
          Editar
        </div>
      </div>
    </div>
  );
}
