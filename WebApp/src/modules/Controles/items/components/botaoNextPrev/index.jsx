import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const baseURL = import.meta.env.VITE_BASE_URL;

export default function botaoNextPrev({
  setPrevPagina,
  setProxPagina,
  setPrimeiraPagina,
  page,
  isPreviousData,
  dataHasMore,
}) {
  return (
    <div className="flex items-center justify-center gap-4 opac">
      <button
        type="button"
        className={page === 1 ? "hidden" : "hover:underline"}
        onClick={setPrimeiraPagina}
      >
        1
      </button>
      <button onClick={setPrevPagina} disabled={page === 1}>
        <ChevronLeftIcon
          className={
            isPreviousData
              ? "h-6 w-6 bg-gran-blue bg-opacity-70 text-white rounded-md"
              : "h-6 w-6 bg-gran-blue bg-opacity-20 text-white rounded-md"
          }
          aria-hidden="true"
        />
      </button>
      <span>{page}</span>
      <button onClick={setProxPagina} disabled={isPreviousData || !dataHasMore}>
        <ChevronRightIcon
          className={
            !isPreviousData && dataHasMore
              ? "h-6 w-6 bg-gran-blue bg-opacity-70 text-white rounded-md"
              : "h-6 w-6 bg-gran-blue bg-opacity-20 text-white rounded-md"
          }
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
