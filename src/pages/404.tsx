import FrontpageLink from "../components/frontpage-link";

const NotFoundPage = () => (
  <div className="flex flex-col max-w-4xl m-auto gap-10 mt-20 font-bit text-white text-center">
    <p className="text-6xl">Denne siden finnes ikke...</p>
    <div className="flex justify-center">
      <FrontpageLink text="Til forsiden" to="/" />
    </div>
  </div>
);

export default NotFoundPage;
