import React, { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { useTodo } from "./TodoProvider";

import TodoInput from "./TodoInput";
import Search from "./Search";
import ColorBar from "./ColorBar";
import TodoItems from "./TodoItems";
import Posts from "./Board";

export default function TodoList() {
  const [activeTab, setActiveTab] = useState("todo");
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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ButtonGroup mt="30px" mx="auto">
        <Button
          bg={activeTab === "todo" ? "gray.600" : "gray.200"}
          color={activeTab === "todo" ? "white" : "black"}
          _hover={{
            bg: activeTab === "todo" ? "gray.700" : "gray.300",
          }}
          onClick={() => setActiveTab("todo")}
        >
          Todo
        </Button>

        <Button
          bg={activeTab === "posts" ? "gray.600" : "gray.200"}
          color={activeTab === "posts" ? "white" : "black"}
          _hover={{
            bg: activeTab === "posts" ? "gray.700" : "gray.300",
          }}
          onClick={() => setActiveTab("posts")}
        >
          게시물
        </Button>
      </ButtonGroup>

      {/* 탭에 따라 내용 보여주기 */}
      {activeTab === "todo" ? (
        <>
          <h1
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            Todo App
          </h1>
          <TodoInput bgColor={toDoColor} onBtnClick={addToDo} />
          <Search searchInput={searchInput} onSearchChange={setSearchInput} />
          <ColorBar toDoColor={toDoColor} setColor={setToDoColor} />
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
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
        </>
      ) : (
        <Posts />
      )}
    </div>
  );
}
