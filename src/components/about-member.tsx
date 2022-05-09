import {
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  firstName: string;
  lastName: string;
  role: string;
  desc: string;
  image: any;
  mail?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

const AboutMember = ({
  firstName,
  lastName,
  role,
  desc,
  image,
  mail,
  instagram,
  github,
  linkedin,
}: Props) => (
  <HStack alignItems="flex-start" borderRadius="0.5rem">
    <Box px="3">
      <Box
        pos="relative"
        overflow="hidden"
        borderRadius="50%"
        w="125px"
        h="125px"
      >
        <Image
          src={image}
          alt={`Picture of ${firstName}`}
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
    <VStack align="left" h="100%" w="100%">
      <Text className="no-top-m" as="em">
        {role}
      </Text>
      <Text as="b" className="no-top-m" borderBottom="1px solid white">
        {firstName} {lastName}
      </Text>

      <Text>{desc}</Text>

      <Spacer />

      <Flex>
        {mail ? (
          <NextLink href={mail} passHref>
            <Icon as={AiOutlineMail} mr="2" _hover={{ cursor: "pointer" }} />
          </NextLink>
        ) : (
          ""
        )}
        {instagram ? (
          <NextLink href={instagram} passHref>
            <Icon as={BsInstagram} mr="2" _hover={{ cursor: "pointer" }} />
          </NextLink>
        ) : (
          ""
        )}
        {github ? (
          <NextLink href={github} passHref>
            <Icon as={BsGithub} mr="2" _hover={{ cursor: "pointer" }} />
          </NextLink>
        ) : (
          ""
        )}
        {linkedin ? (
          <NextLink href={linkedin} passHref>
            <Icon as={BsLinkedin} mr="2" _hover={{ cursor: "pointer" }} />
          </NextLink>
        ) : (
          ""
        )}
      </Flex>
    </VStack>
  </HStack>
);

export default AboutMember;
