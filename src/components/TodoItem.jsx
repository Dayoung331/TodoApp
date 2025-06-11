import {
  Box,
  Input,
  Flex,
  Center,
  Text,
  ColorModeContext,
} from "@chakra-ui/react";

export default function TodoItem({
  id,
  text,
  color,
  onDelete,
  isEditing,
  editInput,
  setEditInput,
  onEditStart,
  onEditComplete,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditComplete(id, editInput);
    }
  };

  return (
    <Flex>
      {isEditing ? (
        <Input
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          onKeyDown={handleKeyPress}
          focusBorderColor={color}
          width="365px"
          height="35px"
          textAlign="center"
          color="gray.500"
          variant="outline"
          autoFocus
        />
      ) : (
        <Center
          bg={color}
          color="black"
          width="365px"
          height="35px"
          border="1px solid"
          borderColor="gray.300"
          cursor="pointer"
          onClick={() => onDelete(id)}
          userSelect="none"
          _hover={{
            bg:
              color === "#FFB3BA"
                ? "#FFD6DB"
                : color === "#FFDFBA"
                ? "#FFE9D6"
                : color === "#FFFFBA"
                ? "#FFFFD6"
                : color === "#BAFFC9"
                ? "#D4FFE3"
                : color === "#BAE1FF"
                ? "#D6EEFF"
                : color === "#D8BAFF"
                ? "#E9D6FF"
                : color, // 기본은 그냥 유지
          }}
        >
          <Text mb={0}>{text}</Text>
        </Center>
      )}

      <Center
        width="35px"
        height="35px"
        border="1px solid"
        borderColor="gray.300"
        cursor="pointer"
        onClick={() =>
          isEditing ? onEditComplete(id, editInput) : onEditStart(id)
        }
        userSelect="none"
        _hover={{ bg: "gray.200" }}
      >
        {isEditing ? "✅" : "✏️"}
      </Center>
    </Flex>
  );
}
