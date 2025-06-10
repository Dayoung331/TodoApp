import React, { useState } from "react";
import { useEffect } from "react";

import TodoInput from "./TodoInput";
import Search from "./Search";
import ColorBar from "./ColorBar";
import TodoItems from "./TodoItems";

let nextId = 0;

export default function TodoList() {
  const [toDoList, setToDoList] = useState(() => {
    const saved = sessionStorage.getItem("toDoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [toDoInput, setToDoInput] = useState("");
  const [toDoColor, setToDoColor] = useState("#FFB3BA");
  const [searchInput, setSearchInput] = useState("");

  // 수정을 위한 state
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    sessionStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addToDo = () => {
    if (toDoInput.trim() === "") {
      alert("할 일을 입력해 주세요!");
      return;
    }

    const newToDo = {
      id: nextId++,
      text: toDoInput,
      color: toDoColor,
    };
    setToDoList([...toDoList, newToDo]);
    setToDoInput("");
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };

  const editToDo = (id) => {
    console.log("수정 클릭됨.");

    const target = toDoList.find((todo) => todo.id === id);
    setEditId(id);
    setEditInput(target.text);
  };

  const completeEditToDo = (id, newText) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditId(null);
    setEditInput("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}
      >
        Todo App
      </h1>

      <TodoInput
        bgColor={toDoColor}
        inputChange={toDoInput}
        onInputChange={(e) => setToDoInput(e.target.value)}
        onBtnClick={addToDo}
      />

      <Search searchInput={searchInput} onSearchChange={setSearchInput} />

      <ColorBar toDoColor={toDoColor} setColor={setToDoColor} />

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        Todo Items
      </h1>

      <TodoItems
        toDoList={toDoList}
        searchInput={searchInput}
        onDelete={deleteToDo}
        editId={editId}
        editInput={editInput}
        setEditInput={setEditInput}
        onEdit={editToDo}
        onEditComplete={completeEditToDo}
      />
    </div>
  );
}
