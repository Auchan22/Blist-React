import {
  Box,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width="100vw"
    >
      <Container as={Stack} maxW={"6xl"} py={4}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={2}>
          <Stack align={"flex-start"}>
            <Heading as="h2">Seguime en mis redes</Heading>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
            <Link href={"#"}>Github</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={2}>
        <Flex
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          align={"center"}
        >
          <Icon as={HiShoppingCart} mr={3} /> <Heading as="h3">Blist</Heading>
        </Flex>
        <Text fontSize={"sm"} pt={6} textAlign={"center"}>
          © 2022 Agustín Surila
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
