import { useQuery } from "react-query";
function useBuscaItensEstoque(page, filtro, qtdItensPagina) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  let url = `${baseURL}/itemestoque?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id`;

  if (filtro != "" && filtro != undefined) {
    url = `${baseURL}/itemestoque?pages=${qtdItensPagina}&page=${page}&ordenarDesc=id&filtro=`;
    filtro.forEach((opcao) => {
      url += opcao?.campo + ":like:" + opcao?.valorProc + ";";
    });
    url = url.substring(0, url.length - 1);
  }
  console.log(url);

  return useQuery({
    queryKey: ["itensEstoque", page, filtro, qtdItensPagina],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
  });
}

export default useBuscaItensEstoque;
