import { useQuery } from "react-query";
function useInformacoesPaginacaoItemEstoque() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?pages`;
  return useQuery({
    queryKey: ["infosPaginacaoItemEstoque"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
}

export default useInformacoesPaginacaoItemEstoque;
