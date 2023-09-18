import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";
function useBuscaItensFuncionario(emailfuncionario) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=responsavel:like:${emailfuncionario}`;
  const authHeader = useAuthHeader();
  const getToken = authHeader();

  return useQuery({
    queryKey: ["vinculadosfuncionario", emailfuncionario],
    queryFn: () =>
      fetch(url, { headers: { Authorization: getToken } }).then((res) =>
        res.json()
      ),
  });
}

export default useBuscaItensFuncionario;
