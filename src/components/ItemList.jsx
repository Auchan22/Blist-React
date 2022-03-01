import { useState, useContext } from "react";
import { Container, Stack, Box } from "@chakra-ui/react";

import InputContext from "../Context/InputContext";

import ItemCard from "./ItemCard";
import EmptyCart from "./EmptyCart";
import CheckButton from "./CheckButton";

const ItemList = () => {
  const { items } = useContext(InputContext);
  // console.log(items);

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
          items.map((item) => (
            <Stack
              key={item.name}
              alignItems="center"
              direction="row"
              minWidth="90vw"
              padding="5px"
            >
              <ItemCard key={item.id} data={item} />{" "}
              <CheckButton id={item.id} />
            </Stack>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default ItemList;
