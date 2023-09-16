import { useQuery } from "react-query";
function useBuscaEntradasData(dataInicial, dataFinal) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=status:like:DISPONÍVEL;data_update:>=:${dataInicial};data_update:<=:${dataFinal}`;

  return useQuery({
    queryKey: ["inseridos", dataInicial, dataFinal],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
    enabled: !!dataFinal && !!dataInicial,
  });
}

export default useBuscaEntradasData;
