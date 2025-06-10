export default function TodoInput({
  bgColor,
  inputChange,
  onInputChange,
  onBtnClick,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="할 일 입력"
        value={inputChange}
        onChange={onInputChange}
        style={{ backgroundColor: bgColor, width: "350px" }}
      />
      <button onClick={onBtnClick} style={{ width: "50px" }}>
        입력
      </button>
    </div>
  );
}
