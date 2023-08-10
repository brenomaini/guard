import { useQuery } from "react-query";
function useBuscaItensEstoque() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const url = `${baseURL}/itemestoque`;

  return useQuery({
    queryKey: ["itensEstoque"],
    queryFn: () => fetch(url).then((res) => res.json()),
    keepPreviousData: true,
  });
}

export default useBuscaItensEstoque;
