import React, { useState } from "react";
import { useEffect } from "react";

import { useTodo } from "./TodoProvider";

import TodoInput from "./TodoInput";
import Search from "./Search";
import ColorBar from "./ColorBar";
import TodoItems from "./TodoItems";

export default function TodoList() {
  const {
    toDoList,
    toDoColor,
    setToDoColor,
    searchInput,
    setSearchInput,
    editId,
    editInput,
    setEditInput,
    addToDo,
    deleteToDo,
    startEditToDo,
    completeEditToDo,
  } = useTodo();

  console.log(`부모 컴포넌트에서 searchInput 잘 넘어갔나? ${searchInput}`);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}
      >
        Todo App
      </h1>

      <TodoInput bgColor={toDoColor} onBtnClick={addToDo} />

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
        toDoList={toDoList} // 할 일 목록을 보여주기 위함
        searchInput={searchInput} // 검색 스트링에 해당하는 할 일만 보여주기 위함
        onDelete={deleteToDo} // 클릭했을 때 삭제하기 위함
        editId={editId} // 수정하려는 할 일
        editInput={editInput} // 수정하고자 하는 텍스트
        setEditInput={setEditInput}
        onEditStart={startEditToDo}
        onEditComplete={completeEditToDo}
      />
    </div>
  );
}
