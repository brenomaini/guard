import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useBuscaItensRetiradosHOJE from "../../../../../hooks/useBuscaRetiradosHOJE";
import LinhasEntradaSaida from "../linhasEntradaSaida";

export default function ultimasSaidas() {
  const retirados = useBuscaItensRetiradosHOJE();
  const dataHoje = Intl.DateTimeFormat("pt-BR").format(new Date());

  return (
    <>
      {retirados.isLoading ? (
        <SkeletonTheme baseColor="#e00e0e" highlightColor="#f7f7f7">
          <Skeleton count={5} />
        </SkeletonTheme>
      ) : retirados.isError ? (
        <div>Error: {retirados.error.message}</div>
      ) : (
        <>
          {retirados.data.map((retirado, index) => {
            const dataDoUpdate = Intl.DateTimeFormat("pt-BR").format(
              new Date(retirado.updated_at)
            );

            if (dataDoUpdate == dataHoje) {
              return (
                <LinhasEntradaSaida
                  retirado={retirado}
                  cor={"red"}
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
