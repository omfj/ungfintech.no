import Link from "next/link";
import t from "../static/norsk.json";
import SEO from "../components/seo";
import Title from "../components/title";
import BackButton from "../components/back-button";

const ForCompanies = (): JSX.Element => (
  <>
    <SEO title="Hvem er vi?" />
    <div>
      <BackButton />
      <div className="flex flex-col">
        <Title>{t["for-companies"].title}</Title>

        <p>{t["for-companies"].contact}</p>

        <p>{t["for-companies"].description}</p>
      </div>
    </div>
  </>
);

export default ForCompanies;
