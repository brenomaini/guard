import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

function useInformacoesPaginacaoItemEstoque() {
  const authHeader = useAuthHeader();
  const getToken = authHeader();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?pages=25`;
  return useQuery({
    queryKey: ["infosPaginacaoItemEstoque"],
    queryFn: () =>
      fetch(url, { headers: { Authorization: getToken } }).then((res) =>
        res.json()
      ),
  });
}

export default useInformacoesPaginacaoItemEstoque;
