import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

import BackImage from "../assets/undraw_empty_cart_co35.svg";

const EmptyCart = () => {
    return (
        <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            h="80%"
            justifyItems="center"
            my="20px"
            w="100vw"
        >
            <Image
                alt="Empty Cart"
                bg={useColorModeValue("white", "white")}
                borderRadius="md"
                boxSize="xs"
                p="3"
                src={BackImage}
            />
            <Text as="b">No hay ningún item en la lista</Text>
        </Box>
    );
};

export default EmptyCart;
