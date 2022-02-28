import React, { useContext, useCallback } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import InputContext from "../Context/InputContext";

const CheckButton = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleRemove } = useContext(InputContext);

  const remove = useCallback(() => {
    handleRemove(id);
  }, [id]);

  return (
    <>
      <Box maxW="70px">
        <Button
          alignItems="center"
          bgColor="#91C483"
          borderRadius="full"
          display="flex"
          h="60px"
          justifyContent={"center"}
          m="0 3px"
          type="button"
          w="60px"
          onClick={onOpen}
        >
          <CheckIcon h="25px" w="25px" />
        </Button>
      </Box>

      <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar producto de la lista</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as={"h4"}>¿Ya compraste este producto?</Heading>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={remove}>
              Si
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckButton;
