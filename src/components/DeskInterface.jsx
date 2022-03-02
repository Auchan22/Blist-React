import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import OnlyMobile from "../assets/Svg/undraw_mobile_posts_re_bpuw.svg";

const DeskInterface = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight="50vh"
      w="100vw"
    >
      <Image
        alt="Empty Cart"
        borderRadius="md"
        boxSize="xs"
        p="3"
        src={OnlyMobile}
      />
      <Flex direction="column">
        <Text as="b" fontSize="xl" noOfLines={5} w="300px">
          Si queres utilizar esta página, te recomiendo que entres desde tu
          celular
        </Text>
        <br />
        <Text isTruncated as="i" fontSize="xl">
          Muchas Gracias
        </Text>
      </Flex>
    </Box>
  );
};

export default DeskInterface;
