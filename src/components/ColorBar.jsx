export default function ColorBar({ toDoColor, setColor }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "60px",
        marginTop: "60px",
      }}
    >
      {["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D8BAFF"].map(
        (color) => (
          <div
            key={color}
            onClick={() => setColor(color)}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: color,
              border:
                toDoColor === color ? "3px solid black" : "1px solid gray",
              cursor: "pointer",
            }}
          />
        )
      )}
    </div>
  );
}
