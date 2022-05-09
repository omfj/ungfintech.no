import { Icon } from "@chakra-ui/react";
import NextLink from "next/link";

const Socials = (link: string, icon: any): JSX.Element => (
  <NextLink href={link} passHref>
    <Icon as={icon} mx="2" _hover={{ cursor: "pointer" }} />
  </NextLink>
);

export default Socials;
