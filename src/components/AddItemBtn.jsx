import { Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useContext } from "react";

import ModalContext from "../Context/ModalContext";

import AddItemModal from "./AddItemModal";

const AddItem = () => {
  const { onOpen } = useContext(ModalContext);

  return (
    <>
      <Box bottom="5%" position="fixed" right="5%" zIndex="1000">
        <Button
          backgroundImage="linear-gradient(120deg, #fee58c ,#d89216)"
          bg="red"
          borderRadius="full"
          h="60px"
          type="button"
          w="60px"
          onClick={onOpen}
        >
          <AddIcon h="25px" w="25px" />
        </Button>
      </Box>

      <AddItemModal />
    </>
  );
};

export default AddItem;
