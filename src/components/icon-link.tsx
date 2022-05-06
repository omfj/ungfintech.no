import { Text, Flex, Icon, HStack, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  text: string;
  icon: React.ReactNode;
  href: string;
}

const IconLink = ({ text, icon, href }: Props) => {
  return (
    <NextLink href={href} passHref>
      <HStack
        spacing="3"
        alignItems="center"
        color="white"
        fontSize="2xl"
        m="2"
        overflow="hidden"
        borderBottom="2px solid"
        borderColor="transparent"
        _hover={{
          cursor: "pointer",
          borderColor: "white",
        }}
      >
        <Icon>{icon}</Icon>
        <Text overflow="hidden">{text}</Text>
      </HStack>
    </NextLink>
  );
};

export default IconLink;
