import {
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Image,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as LinkR } from "react-router-dom";

const ItemCard = ({ data }) => {
  const { id, nombre, imagen } = data;
  return (
    <Box
      align="center"
      as={LinkR}
      bgColor={useColorModeValue("gray.300", "gray.400")}
      boxShadow={"lg"}
      color="black"
      h="80px"
      minW="80%"
      rounded={"xl"}
      to={`/products/${id}`}
    >
      <Flex alignItems="center">
        <Box p="2">
          <Image
            bgColor="gray.200"
            borderRadius="full"
            boxShadow="2xl"
            boxSize="60px"
            h="60px"
            objectFit="cover"
            src={imagen}
            w="60px"
          />
        </Box>
        <Spacer />
        <Box p="2">
          <Heading as="h4">{nombre}</Heading>
        </Box>
        <Spacer />
        <Box p="2">
          <ChevronRightIcon boxSize="25px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCard;
