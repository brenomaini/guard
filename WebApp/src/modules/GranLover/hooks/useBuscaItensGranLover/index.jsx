import { useQuery } from "react-query";
function useBuscaItensGranLover(emailGranLover) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=responsavel:like:${emailGranLover}`;

  return useQuery({
    queryKey: ["vinculadosGranLover", emailGranLover],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useBuscaItensGranLover;
