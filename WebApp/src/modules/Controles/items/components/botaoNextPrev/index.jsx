import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const baseURL = import.meta.env.VITE_BASE_URL;

export default function botaoNextPrev({
  prev,
  next,
  atualizaLista,
  last,
  current,
}) {
  const firstPage = `${baseURL}/pedido?page=1`;
  const lastPage = `${baseURL}/pedido?page=${last}`;

  return (
    <div className="flex items-center justify-center gap-4 opac">
      <button
        type="button"
        className={1 == current ? "hidden" : "hover:underline"}
        onClick={() => {
          atualizaLista(firstPage);
        }}
      >
        1
      </button>
      <button
        className={prev ? "hover:scale-110" : "pointer-events-none"}
        onClick={() => {
          if (prev) {
            atualizaLista(prev);
          }
        }}
      >
        <ChevronLeftIcon
          className={
            prev
              ? "h-6 w-6 bg-gran-blue bg-opacity-70 text-white rounded-md"
              : "h-6 w-6 bg-gran-blue bg-opacity-20 text-white rounded-md"
          }
          aria-hidden="true"
        />
      </button>
      <button
        className={next ? "hover:scale-110" : "pointer-events-none"}
        onClick={() => {
          if (next) {
            atualizaLista(next);
          }
        }}
      >
        <ChevronRightIcon
          className={
            next
              ? "h-6 w-6 bg-gran-blue bg-opacity-70 text-white rounded-md"
              : "h-6 w-6 bg-gran-blue bg-opacity-20 text-white rounded-md"
          }
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className={last == current ? "hidden" : "hover:underline"}
        onClick={() => {
          atualizaLista(lastPage);
        }}
      >
        {last}
      </button>
    </div>
  );
}
