import { Text, Box, Center } from "@chakra-ui/react";
import NextLink from "next/link";

const NotFoundPage = () => (
  <Box
    className="bit-font"
    color="white"
    pos="absolute"
    top="25%"
    left="50%"
    transform="auto"
    translateX="-50%"
  >
    <Text fontSize="7xl">Page not found...</Text>
    <Center mt="5">
      <NextLink href="/" passHref>
        <Box
          w="fit-content"
          textAlign="center"
          fontSize="5xl"
          border="4px solid white"
          p="3"
          _hover={{
            cursor: "pointer",
            borderColor: "white",
          }}
        >
          <Text>Home</Text>
        </Box>
      </NextLink>
    </Center>
  </Box>
);

export default NotFoundPage;
