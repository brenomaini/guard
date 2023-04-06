export default function inputFile() {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gran-blue "
        htmlFor="nfImageInput"
      >
        Imagem NF
      </label>
      <input
        className="block w-72 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-black shadow-sm ring-1 ring-inset ring-gran-blue focus:outline-none focus:ring-2 focus:ring-gran-blue sm:text-sm sm:leading-6"
        id="nfImageInput"
        type="file"
      />
      <p class="mt-1 text-sm" id="file_input_help">
        De preferência para arquivos em PDF.
      </p>
    </div>
  );
}
