import Head from "next/head";

interface Props {
  title: string;
  desc?: string;
}

const SEO = ({ title, desc }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      {desc ?? <meta name="description" content={desc} />}
    </Head>
  );
};

export default SEO;
