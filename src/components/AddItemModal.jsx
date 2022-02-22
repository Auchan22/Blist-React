import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";

import ModalContext from "../Context/ModalContext";

import FormItem from "./FormItem";

const AddItemModal = () => {
  const { isOpen, onClose } = useContext(ModalContext);

  return (
    <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar un producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormItem />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddItemModal;
