import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

function useBuscaRetiradosHOJE() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const dataHoje = Intl.DateTimeFormat("pt-BR").format(new Date());
  const url = `${baseURL}/itemestoque?filtro=status:not%20like:DISPONÍVEL;data_update:like:${dataHoje}`;

  return useQuery({
    queryKey: ["retiradosPorNota"],
    queryFn: () =>
      fetch(url, { headers: { Authorization: getToken } }).then((res) =>
        res.json()
      ),
    keepPreviousData: true,
  });
}

export default useBuscaRetiradosHOJE;
