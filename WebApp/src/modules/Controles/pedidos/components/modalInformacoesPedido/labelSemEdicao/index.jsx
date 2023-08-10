export default function LabelSemEdicao({ titulo, info }) {
  return (
    <label className="flex flex-col  text-sm font-medium leading-6 text-black">
      {titulo}:
      <span className="relative w-72 cursor-default font-normal rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset  focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6">
        {info}
      </span>
    </label>
  );
}
