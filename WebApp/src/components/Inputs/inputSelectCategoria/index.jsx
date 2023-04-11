const categoryList = [
  {
    id: 1,
    name: "Notebook",
  },
  {
    id: 2,
    name: "Desktop",
  },
  {
    id: 3,
    name: "Headset",
  },
];

export default function inputSelectCategoria() {
  return (
    <>
      <option value="" hidden className="font-light">
        Selecione a categoria
      </option>
      {categoryList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
