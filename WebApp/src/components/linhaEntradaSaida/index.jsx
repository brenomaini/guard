export default function linhaEntradaSaida({ item }) {
  return (
    <div className="table-row-group group text-center even:bg-black even:bg-opacity-20">
      <div className="table-row  group-hover:bg-gran-blue group-hover:bg-opacity-25 ">
        <div
          className={`text-xl text-black table-cell justify-center items-center p-2  max-sm:text-base `}
        >
          {item.nf}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base ">
          {item.item}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base">
          {item.setor}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base ">
          {item.aprovador}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base ">
          {item.responsavel}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base ">
          {item.agente}
        </div>
        <div className="text-xl table-cell justify-center items-center p-2  max-sm:text-base">
          {item.data}
        </div>
      </div>
    </div>
  );
}
