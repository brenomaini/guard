import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function botaoNextPrev({ prev, next, atualizaLista }) {
  return (
    <div className="flex items-center justify-center gap-4 opac">
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
    </div>
  );
}
