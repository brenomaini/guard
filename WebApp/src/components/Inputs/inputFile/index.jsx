export default function inputFile({ onChange }) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-guard-green "
        htmlFor="nfImageInput"
      >
        Imagem NF
      </label>
      <input
        className="block w-72 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-guard-green focus:outline-none focus:ring-2 focus:ring-guard-green sm:text-sm sm:leading-6"
        id="nfImageInput"
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
      />
      <p className="mt-1 text-sm" id="file_input_help">
        De preferência para arquivos em PDF.
      </p>
    </div>
  );
}
