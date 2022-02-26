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
import React, { useContext, memo, useCallback } from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "../components/ProductDetail";
import InputContext from "../Context/InputContext";

const PageProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { items, handleRemove } = useContext(InputContext);

  const { productId } = useParams();

  const remove = useCallback(() => {
    handleRemove(productId);
  }, [productId]);
  return (
    <>
      <Box minHeight={"50vh"}>
        <ProductDetail />
        <Box>
          <Button
            alignItems="center"
            bgColor="#91C483"
            borderRadius="full"
            display="flex"
            h="60px"
            justifyContent={"center"}
            m="0 auto"
            type="button"
            w="40vw"
            onClick={onOpen}
          >
            <CheckIcon h="25px" w="25px" />
          </Button>
        </Box>
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

export default memo(PageProduct);
