import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box overflow="hidden" color="white" minH="100vh" bg="black">
      {children}
    </Box>
  );
};

export default Layout;
