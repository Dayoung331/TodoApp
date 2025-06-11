import React, { useState } from "react";

import { Input, Button } from "@chakra-ui/react";

export default function TodoInput({ bgColor, onBtnClick }) {
  const [inputText, setInputText] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Input
        placeholder="할 일 입력"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onBtnClick(inputText);
            setInputText("");
          }
        }}
        bg={bgColor}
        width="348px"
        height="35px"
        focusBorderColor={bgColor}
        size="md"
        variant="filled"
        _hover={{
          bg:
            bgColor === "#FFB3BA"
              ? "#FFD6DB"
              : bgColor === "#FFDFBA"
              ? "#FFE9D6"
              : bgColor === "#FFFFBA"
              ? "#FFFFD6"
              : bgColor === "#BAFFC9"
              ? "#D4FFE3"
              : bgColor === "#BAE1FF"
              ? "#D6EEFF"
              : bgColor === "#D8BAFF"
              ? "#E9D6FF"
              : bgColor, // 기본은 그냥 유지
        }}
      />
      <Button
        onClick={() => {
          onBtnClick(inputText);
          setInputText("");
        }}
        width="48px"
        height="35px"
        variant="outline"
        ml="4px"
      >
        입력
      </Button>
    </div>
  );
}
