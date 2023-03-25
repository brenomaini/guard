import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  DocumentPlusIcon,
  SwatchIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

const Cadastro = [
  {
    name: "Item",
    description: "Cadastre os itens recém comprados",
    href: "/cadastroItem",
    icon: DocumentPlusIcon,
  },
  {
    name: "Categoria",
    description: "Cadastre novas categorias de itens",
    href: "#",
    icon: SwatchIcon,
  },
  {
    name: "Marca",
    description: "Cadastre novas marcas de equipamentos",
    href: "#",
    icon: TagIcon,
  },
];

export default function CadastroDropDown() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-gran-blue text-3xl hover:opacity-70 max-sm:text-xl">
        <span>Cadastro</span>
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
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-base leading-6 shadow-lg ring-1 ring-gran-blue">
            <div className="p-4">
              {Cadastro.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-black hover:bg-opacity-5"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <item.icon
                      className="h-6 w-6 text-gran-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="font-semibold text-gran-blue text-2xl"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-black text-opacity-70">
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
