import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaManutencoesItem from "../../../../../../hooks/useBuscaManutencoesItem";

export default function LinhasManutencoes({ idItem }) {
  const retirados = useBuscaManutencoesItem(idItem);

  return (
    <>
      {retirados.isLoading ? (
        <>
          <div className="m-2 gap-2">
            <Skeleton count={2} height={20} />
          </div>
        </>
      ) : retirados.isError && retirados.data != undefined ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {retirados?.data.map((manutencao, index) => {
            return (
              <div
                className="table-row-group group text-center odd:bg-black odd:bg-opacity-20 h-16"
                key={index}
              >
                <div className="table-cell align-middle">
                  {manutencao.created_at}
                </div>
                <div className="table-cell align-middle">
                  {manutencao.descricao}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
