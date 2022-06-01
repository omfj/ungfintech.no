import { NextPageContext } from "next";

interface ErrorComponentProps {
  statusCode?: number;
}

const Error = ({ statusCode }: ErrorComponentProps): JSX.Element => {
  return (
    <div>
      <p className="text-center font-extrabold text-2xl">
        {statusCode
          ? "An error occurred on server"
          : "An error occurred on client"}
      </p>
      <p className="text-center text-2xl">{statusCode}</p>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
