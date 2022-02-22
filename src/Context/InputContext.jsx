import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

const InputContext = createContext();

export default InputContext;

const InputProvider = ({ children }) => {
  const toast = useToast();

  const [items, setItems] = useState([]);

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (name === "") {
      console.log("Hay un Error");
    } else {
      setItems(() => {
        return [
          ...items,
          {
            id: Date.now(),
            nombre: name,
            imagen:
              "https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com",
          },
        ];
      });
      setTimeout(() => {
        console.log("Tu elemento se agrego correctamente");
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
  };

  return <InputContext.Provider value={data}>{children}</InputContext.Provider>;
};

export { InputProvider };
