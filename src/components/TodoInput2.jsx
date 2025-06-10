import React, { useState } from "react";

export default function ColoredInputSet({
  bgColor,
  placeholder,
  onInputChange,
  onButtonClick,
}) {
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
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          if (onInputChange) {
            onInputChange(e, inputText);
          }
        }}
        style={{ backgroundColor: bgColor, width: "350px" }}
      />
      <button
        onClick={(e) => {
          onButtonClick(e, inputText);
        }}
        style={{ width: "50px" }}
      >
        입력
      </button>
    </div>
  );
}
