import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { Fragment, useState } from "react";
const placeHolder = [{ name: "Selecione" }];
const marcasList = [
  {
    id: 1,
    name: "Dell",
  },
  {
    id: 2,
    name: "ASUS",
  },
  {
    id: 3,
    name: "Logitech",
  },
  {
    id: 4,
    name: "Coisér",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function inputSelectMarca() {
  const [selected, setSelected] = useState(placeHolder[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div>
          <Listbox.Label className="block text-sm font-medium leading-6 text-black">
            Marca:
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-72 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gran-blue"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gran-blue ring-opacity-5 focus:outline-none sm:text-sm ">
                {marcasList.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-gran-blue bg-opacity-70 text-white"
                          : "text-black",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-black" : "text-gran-blue",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
