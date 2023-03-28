export default function GridLine({ text, value }) {
  return (
    <>
      <div className="w-full h-16  bg-gran-red bg-opacity-70 text-white text-center flex items-center justify-center">
        {text}
      </div>
      <div className="w-full h-16 flex items-center justify-center text-center bg-white">
        {value}
      </div>
    </>
  );

  GridLine.defaultProps = {
    text: "",
    value: "",
  };
}
