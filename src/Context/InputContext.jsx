import { createContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const InputContext = createContext();

export default InputContext;

const InputProvider = ({ children }) => {
  const toast = useToast();

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );
  // console.log(items);

  const [img, setIMG] = useState("");

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(items));
  }, [items]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);

    let array = [...e.target.childNodes];
    let selection = array.find(
      (item) => item.getAttribute("value") === e.target.value
    );
    let selectionImg = selection.dataset.icon;
    setIMG(selectionImg);
    // console.log(selectionImg);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value === "" ? "" : e.target.value);
  };

  const handleClick = () => {
    if (name === "" || category === "") {
      if (name === "") {
        toast({
          title: "El item debe tener un nombre",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      }
      if (category === "") {
        toast({
          title: "Se debe elegir una categoría",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      localStorage.setItem("Products", JSON.stringify(items));
      setItems(() => {
        return [
          ...items,
          {
            id: Date.now(),
            categoria: category,
            nombre: name,
            imagen: img,
            descripcion: description,
          },
        ];
      });
      setName("");
      setCategory("");
      setDescription("");
      // console.log("Tu elemento se agrego correctamente");

      toast({
        title: "Item Creado Correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const data = {
    name,
    category,
    description,
    items,
    handleInputChange,
    handleClick,
    handleSelect,
    handleDescription,
  };

  return <InputContext.Provider value={data}>{children}</InputContext.Provider>;
};

export { InputProvider };
