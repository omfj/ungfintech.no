import Link from "next/link";

const BackButton = () => (
  <Link href="/" passHref>
    <a className="font-bit m-auto text-2xl hover:underline">{"<- Forside"}</a>
  </Link>
);

export default BackButton;
