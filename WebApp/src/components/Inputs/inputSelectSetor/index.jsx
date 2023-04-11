const placeHolder = [{ name: "Selecione" }];
const setorList = [
  {
    id: 1,
    name: "Audiovisual&Broadcast",
  },
  {
    id: 2,
    name: "Comercial",
  },
  {
    id: 3,
    name: "Customer Suc.",
  },
  {
    id: 4,
    name: "Financeiro",
  },
  {
    id: 5,
    name: "Administrativo",
  },
  {
    id: 6,
    name: "Pessoas & Cultura",
  },
];

export default function inputSelectSetor() {
  return (
    <>
      <option value="" hidden>
        Selecione o setor
      </option>
      {setorList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
