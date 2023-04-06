import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  InformationCircleIcon,
  NoSymbolIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
const logado = false;

const GranLover = [
  {
    name: "Informações",
    description: "Busque informações do GranLover",
    href: "/infos",
    icon: InformationCircleIcon,
  },
  {
    name: "Admissão",
    description: "Vincule itens rapidamenta a um novo GranLover",
    href: "/Admissao",
    icon: UserPlusIcon,
  },
  {
    name: "Desligamento",
    description: "Desvincule rapidamente vários itens de um GranLover",
    href: "/desligamento",
    icon: NoSymbolIcon,
  },
];

export default function granLoverDropDown() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-gran-blue text-2xl hover:opacity-70 max-sm:text-xl ">
        <span>GranLover</span>
        <ChevronDownIcon className="h-8 w-6" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-base leading-6 shadow-lg ring-1 ring-gran-blue  ">
            <div className="p-4">
              {GranLover.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-black hover:bg-opacity-5  "
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                    <item.icon
                      className="h-6 w-6 text-gran-blue "
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="font-semibold text-gran-blue text-2xl "
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-black text-opacity-70 ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
