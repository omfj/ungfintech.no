import { Link, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
// import Image from "next/image";
import AboutPerson from "../components/about-member";
import Main from "../components/main";
// import GroupPhoto from "../../public/images/members/group-photo.jpg";
import t from "../static/norsk.json";
import SEO from "../components/seo";

interface Member {
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  image: string;
  mail?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

const AboutPage = (): JSX.Element => (
  <>
    <SEO title="Hvem er vi?" />
    <Main color="white">
      <NextLink href="/" passHref>
        <Link className="bit-font" m="auto" fontSize="2xl">
          Ung Fintech
        </Link>
      </NextLink>
      <Heading fontSize="5xl">Hvem er vi?</Heading>

      {/* <Box maxW="500px" m="auto">
      <Image
        src={GroupPhoto}
        alt="Group photo Ung Fintech"
        layout="responsive"
      />
    </Box> */}

      <Text>
        Ung FinTech er en studentforening som ønsker å skape engasjement om
        skjæringspunktet mellom informatikk og finans. Vi skal holde
        foredrag/arrangement/workshop sammen med
        profiler/organisasjoner/bedrifter for å lære mer om FinTech. Gruppen og
        arrangemnetene er åpne for alle studenter!
      </Text>

      <SimpleGrid
        columns={[1, 1, 2]}
        maxW={["auto", "600px", "full"]}
        m="auto"
        my="10"
        gap="20"
      >
        {t.members.map((member: Member) => (
          <AboutPerson
            key={`${member.firstName}-${member.lastName}`}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role}
            desc={member.description}
            image={member.image}
            mail={member.mail ?? undefined}
            instagram={member.instagram ?? undefined}
            github={member.github ?? undefined}
            linkedin={member.linkedin ?? undefined}
          />
        ))}
      </SimpleGrid>
    </Main>
  </>
);

export default AboutPage;
