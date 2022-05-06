import { Box, Text } from "@chakra-ui/react";
import { NextPageContext } from "next";

interface ErrorComponentProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorComponentProps): JSX.Element => {
  return (
    <Box>
      <Text textAlign="center" fontWeight="extrabold" fontSize="2rem">
        {statusCode
          ? "An error occurred on server"
          : "An error occurred on client"}
      </Text>
      <Text textAlign="center" fontSize="2rem">
        {statusCode}
      </Text>
    </Box>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
