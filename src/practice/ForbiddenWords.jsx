import { useState } from "react";

export default function ForbiddenWords() {
  const [inputWord, setInputWord] = useState(""); // 사용자가 입력 중인 값, 금지어 등록하면 사용자 입력창 비우기 위함.
  const [forbiddenWords, setForbiddenWords] = useState([]); // 금지어 목록

  const [userInput, setUserInput] = useState(""); // 사용자가 입력한 문장
  const [userWords, setUserWords] = useState([]); // 사용자가 입력한 목록

  const handleAddWord = () => {
    setForbiddenWords([...forbiddenWords, inputWord]);
    setInputWord("");
  };

  const handleUserWord = () => {
    setUserWords([...userWords, userInput]);
    setUserInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>금지어를 입력하세요</h2>
      <input
        type="text"
        placeholder="금지어 입력"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={handleAddWord}>추가</button>
      <ul>
        {forbiddenWords.map((word, idx) => (
          <li key={idx}>{word}</li>
        ))}
      </ul>

      <h2>사용자 입력</h2>
      <input
        type="text"
        placeholder="사용자 입력"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleUserWord}>입력</button>
      <ul>
        {userWords.map((word, idx) => {
          let censored = word;

          forbiddenWords.forEach((forbidden) => {
            const regex = new RegExp(forbidden); // 대소문자 구분 없이
            censored = censored.replace(regex, "*".repeat(forbidden.length));
          });

          return <li key={idx}>{censored}</li>;
        })}
      </ul>
    </div>
  );
}
