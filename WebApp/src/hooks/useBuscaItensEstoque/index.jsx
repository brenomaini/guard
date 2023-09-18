import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

function useBuscaItensEstoque(page, filtro, qtdItensPagina) {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const baseURL = import.meta.env.VITE_BASE_URL;

  let url = `${baseURL}/itemestoque?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id`;

  if (filtro != "" && filtro != undefined) {
    url = `${baseURL}/itemestoque?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id&filtro=`;
    filtro.forEach((opcao) => {
      url += opcao?.campo + ":like:" + opcao?.valorProc + ";";
    });
    url = url.substring(0, url.length - 1);
  }

  return useQuery({
    queryKey: ["itensEstoque", page, filtro, qtdItensPagina],
    queryFn: () =>
      fetch(url, { headers: { Authorization: getToken } }).then((res) =>
        res.json()
      ),
    keepPreviousData: true,
  });
}

export default useBuscaItensEstoque;
