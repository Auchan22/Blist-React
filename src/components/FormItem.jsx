import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { useContext } from "react";

import ModalContext from "../Context/ModalContext";
import InputContext from "../Context/InputContext";

const FormItem = () => {
  const { onClose } = useContext(ModalContext);

  const { name, handleInputChange, handleSubmit, handleClick } =
    useContext(InputContext);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="name">Nombre del Producto</FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </FormControl>
        {/* {isError.isErrorName && (
          <FormErrorMessage>El campo debe estar lleno</FormErrorMessage>
        )} */}
        <br />
        <FormControl>
          <FormLabel htmlFor="category">Categoría</FormLabel>
          <Select placeholder="Seleccione una categoría">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </FormControl>
        {/* {isError.isErrorCategory && (
          <FormErrorMessage>Se debe elegir una categoría</FormErrorMessage>
        )} */}
        <br />
        <FormControl>
          <FormLabel htmlFor="category">Descripción</FormLabel>
          <Textarea placeholder="Descripcion del producto" />
        </FormControl>

        <ModalFooter>
          <Button colorScheme="blue" type="submit" onClick={handleClick}>
            Agregar
          </Button>
        </ModalFooter>
      </form>
    </>
  );
};

export default FormItem;
