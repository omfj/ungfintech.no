import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="no">
      <Head>
        <meta
          name="keywords"
          content="ung fintech, fintech, finans, teknologi, technology, student"
        />
        <meta name="author" content="Ung Fintech <kontakt@ungfintech.no>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
