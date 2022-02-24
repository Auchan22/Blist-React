import { useState, useContext } from "react";
import { Container, Stack } from "@chakra-ui/react";

import InputContext from "../Context/InputContext";

import ItemCard from "./ItemCard";
import EmptyCart from "./EmptyCart";

const ItemList = () => {
  const { items } = useContext(InputContext);

  return (
    <Container
      as={Stack}
      maxW="container.md"
      minHeight="50vh"
      py={5}
      spacing={8}
    >
      <Stack
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 4, lg: 10 }}
      >
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          items.map((item) => <ItemCard key={item.id} data={item} />)
        )}
      </Stack>
    </Container>
  );
};

export default ItemList;
