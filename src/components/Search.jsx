import { Input } from "@chakra-ui/react";

export default function Search({ searchInput, onSearchChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
        width="400px"
        height="35px"
        mt="20px"
        border="1px solid"
        borderColor="gray.300"
        focusBorderColor="gray.500"
        _hover={{
          bg: "white",
        }}
        borderRadius="md"
        size="md"
        variant="filled"
      />
    </div>
  );
}
