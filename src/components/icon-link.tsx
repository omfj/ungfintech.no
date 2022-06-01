import Link from "next/link";

interface Props {
  text: string;
  icon: React.ReactNode;
  href: string;
}

const IconLink = ({ text, icon, href }: Props) => {
  return (
    <Link href={href} passHref>
      <div className="flex flex-col gap-2">
        <p>{icon}</p>
        <p className="overflow-hidden">{text}</p>
      </div>
    </Link>
  );
};

export default IconLink;
