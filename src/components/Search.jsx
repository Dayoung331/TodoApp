export default function Search({ searchInput, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchInput}
        style={{ width: "400px", marginTop: "20px", border: "1px solid gray" }}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
