import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useInformacoesPaginacaoItemEstoque from "./useInformacoesPaginacaoItemEstoque";

export default function botaoNextPrev({
  pagina,
  setPrevPagina,
  setProxPagina,
  setPrimeiraPagina,
  setUltimaPagina,
}) {
  const infosPaginacao = useInformacoesPaginacaoItemEstoque();

  const primeiraPagina = 1;
  const ultimaPagina =
    infosPaginacao?.data?.last_page > 1 ? infosPaginacao.data.last_page : null;
  const paginaAtual = pagina;
  return (
    <div>
      <nav
        className="isolate flex -space-x-px rounded-md shadow-sm justify-center gap-1"
        aria-label="Pagination"
      >
        <button
          className={
            "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:underline"
          }
          onClick={() => {
            if (paginaAtual != primeiraPagina) {
              setPrimeiraPagina();
            }
          }}
        >
          1
        </button>
        <button
          className={
            paginaAtual != primeiraPagina
              ? "relative inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-inset hover:bg-gran-blue focus:z-20 focus:outline-offset-0 hover:bg-opacity-30 hover:cursor-pointer"
              : "relative inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-inset   focus:z-20 focus:outline-offset-0 cursor-default bg-black bg-opacity-10"
          }
          onClick={() => {
            if (paginaAtual != primeiraPagina) {
              setPrevPagina();
            }
          }}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        <span
          aria-current="page"
          className="  items-center bg-indigo-600 px-4 py-2 text-2xl underline font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {paginaAtual}
        </span>
        <button
          className={
            paginaAtual != ultimaPagina && ultimaPagina != null
              ? " items-center rounded-r-md px-2 py-2  ring-1 ring-inset hover:bg-gran-blue focus:z-20 focus:outline-offset-0 hover:bg-opacity-30 hover:cursor-pointer"
              : " items-center rounded-r-md px-2 py-2  ring-1 ring-inset focus:z-20 focus:outline-offset-0 cursor-default bg-black bg-opacity-10"
          }
          onClick={() => {
            if (paginaAtual != ultimaPagina && ultimaPagina != null) {
              setProxPagina();
            }
          }}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          className={`items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 hover:underline`}
          onClick={() => {
            if (paginaAtual != ultimaPagina && ultimaPagina != null) {
              setUltimaPagina(ultimaPagina);
            }
          }}
        >
          <span>{ultimaPagina}</span>
        </button>
      </nav>
    </div>
  );
}
