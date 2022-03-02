import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ErrImage from "../assets/Svg/undraw_warning_cyit.svg";

export default function PageError() {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      minHeight="40vh"
      px={6}
      py={10}
      textAlign="center"
      width="100%"
    >
      <Image boxSize="xs" p="3" src={ErrImage} />
      <Heading
        as="h2"
        backgroundClip="text"
        bgGradient="linear(to-r, teal.400, teal.600)"
        display="inline-block"
        size="2xl"
      >
        Error 404
      </Heading>
      <Text fontSize="18px" mb={2} mt={3}>
        Página no encontrada
      </Text>
      <Text color={"gray.500"} mb={6}>
        La página que buscabas no existe
      </Text>

      <Button
        as={Link}
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        colorScheme="teal"
        to="/"
        variant="solid"
      >
        Back Home
      </Button>
    </Box>
  );
}
