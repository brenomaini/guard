const itemList = [
  {
    id: 1,
    name: "G15",
  },
  {
    id: 2,
    name: "Legion Criacao",
  },
  {
    id: 3,
    name: "Legion DEVs",
  },
  {
    id: 4,
    name: "H390",
  },
  {
    id: 5,
    name: "Corsair",
  },
  {
    id: 6,
    name: "Kit Dell",
  },
  {
    id: 7,
    name: "Kit Microsoft",
  },
  {
    id: 8,
    name: "Suporte Reliza",
  },
];

export default function inputSelectItem() {
  return (
    <>
      <option value="" hidden>
        Selecione o item
      </option>
      {itemList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
