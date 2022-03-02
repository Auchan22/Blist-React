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
  const {
    name,
    category,
    description,
    handleInputChange,
    AddItem,
    handleSelect,
    handleDescription,
  } = useContext(InputContext);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
          <FormLabel htmlFor="name">Nombre del Producto</FormLabel>
          <Input
            autoComplete="off"
            id="name"
            placeholder="Ej: Coca Cola"
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
            value={category}
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
          <Textarea
            autoComplete="off"
            placeholder="Descripcion del producto"
            value={description}
            onChange={handleDescription}
          />
        </FormControl>

        <ModalFooter>
          <Button colorScheme="blue" type="submit" onClick={AddItem}>
            Agregar
          </Button>
        </ModalFooter>
      </form>
    </>
  );
};

export default FormItem;
