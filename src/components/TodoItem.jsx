export default function TodoItem({
  id,
  text,
  color,
  onDelete,
  isEditing,
  editInput,
  setEditInput,
  onEdit,
  onEditComplete,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditComplete(id, editInput);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {isEditing ? (
        <input
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            width: "365px",
            height: "35px",
            fontSize: "16px",
            paddingLeft: "10px",
          }}
        />
      ) : (
        <div
          onClick={() => onDelete(id)}
          style={{
            backgroundColor: color,
            color: "black",
            width: "365px",
            height: "35px",
            border: "1px solid gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {text}
        </div>
      )}

      <div
        onClick={() => {
          isEditing ? onEditComplete(id, editInput) : onEdit(id);
        }}
        style={{
          width: "35px",
          border: "1px solid gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {isEditing ? "✅" : "✏️"}
      </div>
    </div>
  );
}
