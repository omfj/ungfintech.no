import Image from "next/image";
import UngFintech from "../../public/images/logos/ungfintech-logo-trimmed-transparent.png";
import SEO from "../components/seo";
import FrontpageLink from "../components/frontpage-link";

const Home = () => (
  <>
    <SEO title="Ung Fintech" />
    <div className="absolute top-[10%] w-full max-w-3xl left-1/2 -translate-x-1/2">
      <div className="flex flex-col px-10 gap-20 md:gap-10">
        <div className="flex flex-col text-center gap-5 m-auto">
          <div>
            <Image src={UngFintech} alt="Ung Fintech Logo" />
          </div>
          <p className="font-bit text-2xl sm:text-4xl">Fremtidens finans</p>
        </div>
        <div className="flex flex-row flex-wrap gap-7 md:gap-5 justify-center">
          <FrontpageLink
            text="LinkedIn"
            to="https://www.linkedin.com/company/echofintech"
          />
          <FrontpageLink text="Kontakt oss" to="mailto:kontakt@ungfintech.no" />
          <FrontpageLink text="Hvem er vi?" to="/hvem-er-vi" />
        </div>
      </div>
    </div>
  </>
);

export default Home;
