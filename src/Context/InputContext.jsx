import { createContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

const InputContext = createContext();

export default InputContext;

const InputProvider = ({ children }) => {
  const toast = useToast();

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );
  console.log(items);

  const [img, setIMG] = useState("");

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(items));
  }, [items]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (name === "") {
      // console.log("Hay un Error");
      toast({
        title: "El campo Name debe estar completo",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      localStorage.setItem("Products", JSON.stringify(items));
      setItems(() => {
        return [
          ...items,
          {
            id: Date.now(),
            nombre: name,
            imagen: img,
          },
        ];
      });
      setName("");
      setTimeout(() => {
        // console.log("Tu elemento se agrego correctamente");

        toast({
          title: "Item Creado Correctamente.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }, 1000);
    }
  };

  const data = {
    name,
    handleInputChange,
    handleSubmit,
    items,
    handleClick,
    handleSelect,
  };

  return <InputContext.Provider value={data}>{children}</InputContext.Provider>;
};

export { InputProvider };
