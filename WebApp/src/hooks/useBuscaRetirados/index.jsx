import { useQuery } from "react-query";
function useBuscaRetirados() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=status:not%20like:DISPONÍVEL`;

  return useQuery({
    queryKey: ["retiradosPorNota"],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.data),
  });
}

export default useBuscaRetirados;
