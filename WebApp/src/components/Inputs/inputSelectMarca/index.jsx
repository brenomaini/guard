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

export default function inputSelectMarca() {
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a marca
      </option>
      {marcasList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
