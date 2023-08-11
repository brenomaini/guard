import { useQuery } from "react-query";
function useBuscaItensEstoque(page) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const url = `${baseURL}/itemestoque?pages&page=${page}&ordenarDesc=id`;

  return useQuery({
    queryKey: ["itensEstoque", page],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
  });
}

export default useBuscaItensEstoque;
