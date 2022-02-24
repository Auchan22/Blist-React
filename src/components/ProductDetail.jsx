import { Image, Heading, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import InputContext from "../Context/InputContext";

const ProductDetail = () => {
  const { productId } = useParams();
  //   console.log(productId);
  const { items } = useContext(InputContext);
  //   console.log(items);

  const getProductById = (id) => {
    return items.find((_product) => id == _product.id);
  };

  let product = getProductById(productId);
  console.log(product);

  return (
    <Flex
      flexDirection={"column"}
      m={"16px 0"}
      textAlign={"center"}
      width={"100vw"}
    >
      <Image
        alignSelf={"center"}
        bgColor={"gray.200"}
        borderRadius={"full"}
        height={"100px"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        src={product.imagen}
        width={"100px"}
      />
      <Heading as={"h2"} fontSize={"32px"} mb={"16px"}>
        {product.nombre}
      </Heading>
      {product.descripcion ? (
        <Text fontSize="lg">{product.descripcion}</Text>
      ) : null}
    </Flex>
  );
};

export default ProductDetail;
