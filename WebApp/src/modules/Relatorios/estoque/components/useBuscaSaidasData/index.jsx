import { useQuery } from "react-query";
function useBuscaSaidasData(dataInicial, dataFinal) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=status:not%20like:DISPONÍVEL;data_update:>=:${dataInicial};data_update:<=:${dataFinal}`;

  return useQuery({
    queryKey: ["inseridos", dataInicial, dataFinal],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
    enabled: !!dataFinal && !!dataInicial,
  });
}

export default useBuscaSaidasData;
