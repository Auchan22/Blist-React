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
import React, { memo } from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "../components/ProductDetail";
import InputContext from "../Context/InputContext";

const PageProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box minHeight={"50vh"}>
        <ProductDetail />
      </Box>
    </>
  );
};

export default memo(PageProduct);
