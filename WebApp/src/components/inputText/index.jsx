export default function InputExemple({ name, onChange, value, htmlName }) {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-black"
        htmlFor={name}
      >
        {name}:{" "}
      </label>
      <input
        id={name}
        placeholder="Digite aqui"
        type="text"
        className="text-black border rounded-md w-80 max-sm:text-base max-sm:w-full"
        value={value}
        onChange={onChange}
        name={htmlName}
      ></input>
    </div>
  );
}
