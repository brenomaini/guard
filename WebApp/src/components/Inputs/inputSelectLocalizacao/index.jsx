const placeHolder = [{ name: "Selecione" }];
const localList = [
  {
    id: 1,
    name: "A1",
  },
  {
    id: 2,
    name: "A2",
  },
  {
    id: 3,
    name: "A3",
  },
  {
    id: 4,
    name: "A4",
  },
  {
    id: 5,
    name: "B1",
  },
  {
    id: 6,
    name: "B2",
  },
  {
    id: 7,
    name: "B3",
  },
  {
    id: 8,
    name: "B4",
  },
  {
    id: 9,
    name: "C1",
  },
  {
    id: 10,
    name: "C2",
  },
  {
    id: 11,
    name: "C3",
  },
  {
    id: 12,
    name: "C4",
  },
  {
    id: 13,
    name: "D1",
  },
  {
    id: 14,
    name: "D2",
  },
  {
    id: 15,
    name: "D3",
  },
  {
    id: 16,
    name: "D4",
  },
  {
    id: 17,
    name: "E1",
  },
  {
    id: 18,
    name: "E2",
  },
  {
    id: 19,
    name: "E3",
  },
  {
    id: 20,
    name: "E4",
  },
  {
    id: 21,
    name: "F1",
  },
  {
    id: 22,
    name: "F2",
  },
  {
    id: 23,
    name: "F3",
  },
  {
    id: 24,
    name: "F4",
  },
  {
    id: 26,
    name: "F5",
  },
  {
    id: 27,
    name: "F6",
  },
];

export default function inputSelectLocalizacao() {
  return (
    <>
      <option value="" hidden>
        Selecione onde está o item
      </option>
      {localList.map((item) => {
        return (
          <option value={item.name} id={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </>
  );
}
