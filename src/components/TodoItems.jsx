import TodoItem from "./TodoItem";

export default function TodoItems({
  toDoList,
  searchInput,
  onDelete,
  editId,
  editInput,
  setEditInput,
  onEditStart,
  onEditComplete,
}) {
  const listToShow =
    searchInput.trim() === ""
      ? toDoList
      : toDoList.filter((todo) =>
          todo.text.toLowerCase().includes(searchInput.toLowerCase())
        );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {listToShow.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          text={elem.text}
          color={elem.color}
          onDelete={onDelete}
          isEditing={editId === elem.id}
          editInput={editInput}
          setEditInput={setEditInput}
          onEditStart={onEditStart}
          onEditComplete={onEditComplete}
        />
      ))}
    </div>
  );
}
