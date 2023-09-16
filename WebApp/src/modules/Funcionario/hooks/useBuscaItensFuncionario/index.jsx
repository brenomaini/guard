import { useQuery } from "react-query";
function useBuscaItensFuncionario(emailfuncionario) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=responsavel:like:${emailfuncionario}`;

  return useQuery({
    queryKey: ["vinculadosfuncionario", emailfuncionario],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useBuscaItensFuncionario;
