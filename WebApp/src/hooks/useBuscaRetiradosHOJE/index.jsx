import { useQuery } from "react-query";
function useBuscaRetiradosHOJE() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const dataHoje = Intl.DateTimeFormat("pt-BR").format(new Date());
  const url = `${baseURL}/itemestoque?filtro=status:not%20like:DISPONÍVEL;data_update:like:${dataHoje}`;
  console.log(url);

  return useQuery({
    queryKey: ["retiradosPorNota"],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.data),
  });
}

export default useBuscaRetiradosHOJE;
