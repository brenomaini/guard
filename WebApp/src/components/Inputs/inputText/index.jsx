export default function InputExemple({ name, onChange, value, htmlName }) {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-black"
        htmlFor={name}
      >
        {name}:
      </label>
      <input
        id={name}
        placeholder="Digite aqui"
        type="text"
        className="relative w-72 cursor-default  rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
        value={value}
        onChange={onChange}
        name={htmlName}
      />
    </div>
  );
}
