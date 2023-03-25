export default function GridLine({ text, value }) {
  return (
    <>
      <div
        key={text}
        className="w-full h-16  flex items-center justify-center bg-gran-blue bg-opacity-70 text-white text-center"
      >
        {text}
      </div>
      <div
        key={text + value}
        className="w-full h-16 flex items-center justify-center text-center bg-white"
      >
        {value}
      </div>
    </>
  );

  GridLine.defaultProps = {
    text: "",
    value: "",
  };
}
