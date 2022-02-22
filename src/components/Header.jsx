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
  Stack,
  Text,
  Collapse,
  Link,
} from "@chakra-ui/react";
import { Link as LinkR } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// import NAV_ITEMS from "../assets/Nav Items/navItems"

// const MobileNav = () =>{
//   return (
//     <Stack
//       bg={"#FFEFBC"}
//       p={4}
//       display={{ md: 'none' }}
//     >
//       {NAV_ITEMS.map((navItem) =>(
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   )
// }

// const MobileNavItem = ({label, href}) =>{
//   return (
//     <Stack spacing={4}>
//       <Flex
//       py={2}
//       as={Link}
//       href={href ?? '#'}
//       justify={'space-between'}
//       align={'center'}
//       _hover={{
//         textDecoration: 'none',
//       }}
//       >
//         <Text
//           fontWeight={600}
//           color={"black"}>
//           {label}
//         </Text>
//       </Flex>
//     </Stack>
//   )
// }

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
    <Box>
      <Flex
        align={"flex-start"}
        bg={"#FEE58C"}
        color={"black"}
        minH={"130px"}
        px={{ base: 4 }}
        py={{ base: 2 }}
      >
        {/* <Flex
        flex={{base: 1, md:"auto"}}
        ml={{base: -2}}
        display={{base: "flex", md: "none"}}
        justify={"flex-start"}
        >
          <IconButton
          onClick={onToggle}
          color={useColorModeValue('gray.600', 'black')}
          icon={
            isOpen ? <CloseIcon w={25} h={25} /> : <HamburgerIcon w={25} h={25} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
          />
        </Flex> */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LinkR to="/">
            <Header>
              <Heading as="h2">Blist</Heading>
              <Icon as={HiShoppingCart} fontSize={32} />
            </Header>
          </LinkR>
        </Flex>

        <Flex
          display={{ base: "flex", md: "none" }}
          flex={{ base: 1, md: "auto" }}
          justify={"flex-end"}
          maxW={"20px"}
          ml={{ base: -2 }}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
    </Box>
  );
};

export default Header;
