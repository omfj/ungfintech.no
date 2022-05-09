import {
  Text,
  Box,
  Center,
  Link,
  Stack,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { GrLinkedin } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import NextLink from "next/link";
import Image from "next/image";
import UngFintech from "../../public/images/logos/ungfintech-logo-trimmed-transparent.png";
import IconLink from "../components/icon-link";
import SEO from "../components/seo";

const Home = () => {
  return (
    <>
      <SEO title="Ung Fintech" />
      <Center
        pos="absolute"
        top="20%"
        left="50%"
        transform="auto"
        translateX="-50%"
        flexDirection="column"
        w="100%"
      >
        <Box mx="10" maxW="500px">
          <Image src={UngFintech} alt="Ung Fintech Logo" />
        </Box>

        <Text
          className="bit-font"
          m="5"
          color="white"
          fontSize="3xl"
          align="center"
        >
          Fremtidens finans
        </Text>

        <Flex
          flexWrap="wrap"
          mt="10"
          textAlign="center"
          className="bit-font"
          justify="center"
          fontSize="2xl"
          mx="5"
        >
          <Box
            border="2px solid white"
            transition="ease-in 0.2s"
            m="2"
            p="2"
            _hover={{ cursor: "pointer", bg: "white", color: "black" }}
          >
            <NextLink
              href="https://www.linkedin.com/company/echofintech"
              passHref
            >
              <Text>LinkedIn</Text>
            </NextLink>
          </Box>
          <Box
            border="2px solid white"
            transition="ease-in 0.2s"
            m="2"
            p="2"
            _hover={{ cursor: "pointer", bg: "white", color: "black" }}
          >
            <NextLink href="mailto:kontakt@ungfintech.no">
              <Text>Kontakt oss</Text>
            </NextLink>
          </Box>
          <Box
            border="2px solid white"
            transition="ease-in 0.2s"
            m="2"
            p="2"
            _hover={{ cursor: "pointer", bg: "white", color: "black" }}
          >
            <NextLink href="/hvem-er-vi" passHref>
              <Text>Hvem er vi?</Text>
            </NextLink>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default Home;
