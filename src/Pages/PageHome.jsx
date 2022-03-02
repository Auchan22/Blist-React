import { useMediaQuery } from "@chakra-ui/react";

import AddItem from "../components/AddItemBtn";
import DeskInterface from "../components/DeskInterface";
import ItemList from "../components/ItemList";

const PageHome = () => {
  const [isMobile] = useMediaQuery("(max-width: 450px)");

  return (
    <>
      {isMobile ? (
        <>
          <ItemList />
          <AddItem />
        </>
      ) : (
        <DeskInterface />
      )}
    </>
  );
};

export default PageHome;
