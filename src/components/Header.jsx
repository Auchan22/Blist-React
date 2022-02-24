import styled from "@emotion/styled";
import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Flex,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { Link as LinkR } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

import NavBar from "./NavBar";

const Header = () => {
  const Header = styled.header`
    background-color: #fee58c;
    height: 130px;
    width: 100%;
    padding: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  `;

  return (
    <Box
      align={"flex-start"}
      bg={"#FEE58C"}
      color={"black"}
      minH={"130px"}
      px={{ base: 4 }}
      py={{ base: 2 }}
      w="100vw"
    >
      <NavBar />
      <Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LinkR to="/">
            <Header>
              <Heading as="h2">Blist</Heading>
              <Icon as={HiShoppingCart} fontSize={32} />
            </Header>
          </LinkR>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
