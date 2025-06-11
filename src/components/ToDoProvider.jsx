import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  // 할 일 목록
  const [toDoList, setToDoList] = useState(() => {
    const saved = sessionStorage.getItem("toDoList");
    return saved ? JSON.parse(saved) : [];
  });
  // 새로고침해도 데이터가 날라가지 않음.
  useEffect(() => {
    sessionStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  // 색깔
  const [toDoColor, setToDoColor] = useState("#FFB3BA");

  // 검색
  const [searchInput, setSearchInput] = useState("");

  // 수정을 위한 state, 수정할 할일의 id
  const [editId, setEditId] = useState(null);

  // 수정을 위한 state, 수정할 텍스트
  const [editInput, setEditInput] = useState("");

  // 함수 선언
  const addToDo = (text) => {
    if (text.trim() === "") {
      alert("할 일을 입력해 주세요!");
      return;
    }
    const newToDo = {
      id: Date.now(),
      text,
      color: toDoColor,
    };
    setToDoList([...toDoList, newToDo]);
  };

  const deleteToDo = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      setToDoList(toDoList.filter((todo) => todo.id !== id));
    }
  };

  const startEditToDo = (id) => {
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
  console.log(`잘 되나요~ ${searchInput}`);

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
