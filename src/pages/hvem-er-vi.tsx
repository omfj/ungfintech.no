import AboutPerson from "../components/about-member";
import t from "../static/norsk.json";
import SEO from "../components/seo";
import Title from "../components/title";
import BackButton from "../components/back-button";

const AboutPage = (): JSX.Element => (
  <>
    <SEO title="Hvem er vi?" />
    <div className="absolute top-[5%] w-full max-w-5xl px-5 left-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-5 sm:px-5">
        <BackButton />
        <Title>{t["about-page"].title}</Title>
        <p className="text-xl">{t["about-page"].description}</p>
      </div>

      <div className="flex flex-wrap gap-10 my-20">
        {t["about-page"].members.map((member, i) => (
          <AboutPerson
            key={`${member.firstName}-${member.lastName}`}
            firstName={member.firstName}
            lastName={member.lastName}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  </>
);

export default AboutPage;
