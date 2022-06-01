import Image from "next/image";

interface Props {
  firstName: string;
  lastName: string;
  role: string;
  image: any;
}

const AboutMember = ({ firstName, lastName, role, image }: Props) => (
  <div className="flex flex-row rounded gap-3 m-auto text-center">
    <div>
      <div className="border-2 relative overflow-hidden rounded-md w-44 h-44">
        <Image
          src={image}
          alt={`Picture of ${firstName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="text-lg">
        <i className="font-light">{role}</i>
        <p className="font-bold">
          {firstName} {lastName}
        </p>
      </div>
    </div>
  </div>
);

export default AboutMember;
