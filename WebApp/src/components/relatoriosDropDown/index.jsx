import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
const logado = false;

const relatorios = [
  {
    name: "Entradas",
    description: "Informaçoes a respeito das ultimas entradas no estoque",
    href: "/entradas",
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: "Saidas",
    description: "Informações dos últimos itens disponibilizados",
    href: "/saidas",
    icon: ArrowLeftOnRectangleIcon,
  },
];

export default function relatoriosDropDown() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-guard-green text-2xl hover:opacity-70 max-sm:text-xl ">
        <span>Relatórios</span>
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-base leading-6 shadow-lg ring-1 ring-guard-green  ">
            <div className="p-4">
              {relatorios.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-black hover:bg-opacity-5  "
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                    <item.icon
                      className="h-6 w-6 text-guard-green "
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="font-semibold text-guard-green text-2xl "
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
