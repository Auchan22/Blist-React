import React from "react";
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
import { MoonIcon, SunIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  let navigate = useNavigate();
  //   console.log(location.pathname.includes("/products/"));

  return (
    <Flex>
      {location.pathname.includes("/products/") ? (
        <Flex
          display={{ base: "flex", md: "none" }}
          // flex={{ base: 1, md: "auto" }}
          justify={"flex-start"}
          ml={{ base: -2 }}
        >
          <IconButton
            color={"black"}
            fontSize="24px"
            icon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          />
        </Flex>
      ) : null}

      <Flex
        display={{ base: "flex", md: "none" }}
        flex={{ base: 2, md: "auto" }}
        justify={"flex-end"}
        ml={{ base: -2 }}
      >
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
