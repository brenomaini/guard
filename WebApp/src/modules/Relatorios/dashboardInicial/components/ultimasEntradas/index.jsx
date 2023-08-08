import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaItensinseridos from "../../../../../hooks/useBuscaInseridos";
import LinhasEntradaSaida from "../linhasEntradaSaida";

export default function ultimasEntradas() {
  const inseridos = useBuscaItensinseridos();

  return (
    <>
      {inseridos.isLoading ? (
        <SkeletonTheme baseColor="#1100ff" highlightColor="#f7f7f7">
          <Skeleton count={5} />
        </SkeletonTheme>
      ) : inseridos.isError ? (
        <div>Error: {inseridos.error.message}</div>
      ) : (
        <>
          {inseridos.data.map((inserido, index) => {
            const dataDoUpdate = Intl.DateTimeFormat("pt-BR").format(
              new Date(inserido.updated_at)
            );
            const dataHoje = Intl.DateTimeFormat("pt-BR").format(new Date());

            if (dataDoUpdate == dataHoje) {
              return (
                <LinhasEntradaSaida
                  retirado={inserido}
                  cor={"blue"}
                  key={index}
                />
              );
            } else {
              ("");
            }
          })}
        </>
      )}
    </>
  );
}
