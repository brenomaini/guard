import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const Contador = ({ handleDecrement, handleIncrement }) => {
  return (
    <div>
      <button
        onClick={handleIncrement}
        className="m-2 rounded-md p-2 bg-gran-blue hover:scale-105 hover:shadow-md"
      >
        <PlusIcon className="h-4 w-4 text-white " aria-hidden="true" />
      </button>
      <button
        onClick={handleDecrement}
        className="m-2 rounded-md p-2 bg-gran-red hover:scale-105 hover:shadow-md"
      >
        <MinusIcon
          className="h-4 w-4  text-white   font-bold"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Contador;
