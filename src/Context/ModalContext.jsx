import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

const ModalContext = createContext();

export default ModalContext;

const ModalProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = { isOpen, onOpen, onClose };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export { ModalProvider };
