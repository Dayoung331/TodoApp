import React, { useState } from "react";

export default function TodoInput({ bgColor, onBtnClick }) {
  const [inputText, setInputText] = useState("");
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
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ backgroundColor: bgColor, width: "350px" }}
      />
      <button
        onClick={() => {
          onBtnClick(inputText);
          setInputText("");
        }}
        style={{ width: "50px" }}
      >
        입력
      </button>
    </div>
  );
}
