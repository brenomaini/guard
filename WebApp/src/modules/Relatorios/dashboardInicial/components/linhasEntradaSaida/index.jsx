import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function linhasEntradaSaida({ retirado, cor }) {
  const options = {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const data = Intl.DateTimeFormat("pt-BR", options).format(
    new Date(retirado.updated_at)
  );
  return (
    <>
      <div
        className={`w-full h-8 flex items-center justify-center bg-gran-${cor} bg-opacity-70 text-white text-center`}
      >
        {retirado.item.nome || <Skeleton />}
      </div>
      <div className="w-full h-8 flex items-center justify-center text-center bg-white">
        {retirado.status.toUpperCase() || <Skeleton />}
      </div>
      <div className="w-full h-8 flex items-center justify-center text-center bg-white">
        {data || <Skeleton />}
      </div>
      <div className="w-full h-8 flex items-center justify-start text-center bg-white overflow-x-scroll scrollbar-hide">
        {retirado.agente || <Skeleton />}
      </div>
      {retirado.status.toUpperCase() != "DISPONÍVEL" ? (
        <div className="w-full h-8 flex items-center justify-start text-center bg-white overflow-x-scroll scrollbar-hide">
          {retirado.responsavel || <Skeleton />}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
