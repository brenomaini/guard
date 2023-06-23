import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function BotaoPaginacao() {
  return (
    <>
      <button className=" hover:scale-110">
        <ChevronRightIcon
          className="h-12 w-12 bg-gran-blue bg-opacity-70 text-white rounded-md m-8"
          aria-hidden="true"
        />
      </button>
      <button className=" hover:scale-110 ">
        <ChevronLeftIcon
          className="h-12 w-12 bg-gran-blue bg-opacity-70 text-white rounded-md ml-4 "
          aria-hidden="true"
        />
      </button>
    </>
  );
}
