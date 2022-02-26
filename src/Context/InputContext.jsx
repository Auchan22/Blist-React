import { createContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const InputContext = createContext();

export default InputContext;

const InputProvider = ({ children }) => {
  const toast = useToast();

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify([]));
  }, []);

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );
  console.log(JSON.parse(localStorage.getItem("Products")));

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(items));
    console.log(items);
  }, [items]);

  const [img, setIMG] = useState("");

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

  const handleRemove = (id) => {
    console.log(id);
    // setItems((items) => items.filter((_item) => _item.id != id));
    // localStorage.setItem("Products", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem("Products")));
    console.log(items.filter((item) => item.id != id));
    setItems(() => {
      items.filter((item) => item.id != id);
    });
    console.log(items);
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
    handleRemove,
  };

  return <InputContext.Provider value={data}>{children}</InputContext.Provider>;
};

export { InputProvider };
