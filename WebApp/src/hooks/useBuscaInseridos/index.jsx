import { useQuery } from "react-query";
function useBuscaInseridos() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const url = `${baseURL}/itemestoque?filtro=status:like:DISPONÍVEL`;

  return useQuery({
    queryKey: ["inseridos"],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.data),
  });
}

export default useBuscaInseridos;
