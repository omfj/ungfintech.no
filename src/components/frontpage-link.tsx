import Link from "next/link";

interface Props {
  text: string;
  to: string;
}

const FrontpageLink = ({ text, to }: Props) => (
  <Link href={to} passHref>
    <div className="bg-white w-fit hover:cursor-pointer">
      <div className="font-bit text-2xl bg-black border-2 border-white p-2 -translate-x-1 -translate-y-1 transition-all hover:translate-x-0 hover:translate-y-0">
        {text}
      </div>
    </div>
  </Link>
);

export default FrontpageLink;
