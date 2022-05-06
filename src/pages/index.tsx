import { Text, Box, Link, Center, HStack, Icon, Stack } from "@chakra-ui/react";
import { GrLinkedin } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import UngFintech from "../../public/images/ungfintech-logo-trimmed-transparent.png";
import IconLink from "../components/icon-link";
import SEO from "../components/seo";

const Home = () => {
  return (
    <>
      <SEO title="Ung Fintech" />
      <Center
        pos="absolute"
        top="25%"
        left="50%"
        transform="auto"
        translateX="-50%"
        flexDirection="column"
        w="100%"
      >
        <Box mx="10" maxW="500px">
          <Image src={UngFintech} alt="Ung Fintech Logo" />
        </Box>

        <Text m="5" color="white" fontSize="2xl" align="center">
          Fremtidens finans
        </Text>

        <Center my="5" flexDir={["column", "row"]} flexWrap="nowrap">
          <IconLink
            text="LinkedIn"
            icon={<GrLinkedin color="white" size="md" />}
            href="https://www.linkedin.com/company/echofintech/"
          />
          <IconLink
            text="Kontakt oss"
            icon={<FiMail color="white" size="md" />}
            href="mailto:kontakt@ungfintech.no"
          />
        </Center>
      </Center>
    </>
  );
};

export default Home;
