import AppleBadge from "../../assets/app-badge.png";
import GoogleBadge from "../../assets/google-badge.png";
import ToksotLogo from "../../assets/logo-big.png";

function SectionEight() {
  return (
    <section className="bg-primaryGreen text-white lg:pt-14  lg:pb-14 xs:pt-6 lg:px-28 xs:px-5 grid lg:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 lg:text-left sm:text-center">
        <h1 className="font-oswald lg:text-7xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug ">
          Ready to join TokSot?
        </h1>
        <div className="flex gap-5 my-10 w-full ">
          <img src={AppleBadge} className="xs:w-full lg:w-max" />
          <img src={GoogleBadge} className="xs:w-full lg:w-max" />
        </div>
      </div>
      <div className="mx-auto xs:pb-10 lg:pb-0">
        <img
          src={ToksotLogo}
          className="md:h-[500px]  md:w-[500px] xs:w-[400px] xs:h-[400px]"
        />
      </div>
    </section>
  );
}

export default SectionEight;
