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

import CATEGORIES from "../assets/categoryAPI";
import InputContext from "../Context/InputContext";

const FormItem = () => {
  const { name, handleInputChange, handleSubmit, handleClick, handleSelect } =
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
        <br />
        <FormControl>
          <FormLabel htmlFor="category">Categoría</FormLabel>
          <Select
            placeholder="Seleccione una categoría"
            onChange={handleSelect}
          >
            {CATEGORIES.map((option) => (
              <option
                key={option.id}
                data-icon={option.img}
                id={option.id}
                value={option.catName}
              >
                {option.catName}
              </option>
            ))}
          </Select>
        </FormControl>
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
