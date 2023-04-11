const placeHolder = [{ name: "Selecione" }];
const statusList = [
  {
    id: 1,
    name: "Disponível",
  },
  {
    id: 2,
    name: "Aguardando fornecedor",
  },
  {
    id: 3,
    name: "Devolvido",
  },
];

export default function inputSelectStatus() {
  return (
    <>
      <option value="" hidden>
        Selecione o status
      </option>
      {statusList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
