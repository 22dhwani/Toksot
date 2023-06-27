import AppleBadge from "../../assets/app-badge.svg";
import GoogleBadge from "../../assets/google-badge.svg";
import ToksotLogo from "../../assets/logo-big.png";
import { getMobileOperatingSystem } from "./Section-one";

function SectionEight() {
  const os = getMobileOperatingSystem();

  return (
    <section className="bg-primaryGreen text-white lg:pt-14  lg:pb-14 xs:pt-6 lg:px-28 xl:px-36 xs:px-5 grid lg:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 lg:text-left sm:text-center flex flex-col justify-between">
        <h1 className="font-oswald lg:text-[4.75rem] xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug ">
          Ready to join TokSot?
        </h1>
        {(os === "unknown" || os === "Windows Phone") && (
          <div className="flex gap-5 my-10 w-full lg:mx-auto md:mx-auto ">
            <img src={AppleBadge} className="xs:w-full md:w-max lg:w-max" />
            <img src={GoogleBadge} className="xs:w-full  md:w-max lg:w-max" />
          </div>
        )}
        {os === "iOS" && (
          <div className="flex gap-5 my-10 xs:w-3/6 sm:mx-auto lg:mx-auto md:w-2/6 ">
            <img src={AppleBadge} className="xs:w-full lg:w-max" />
          </div>
        )}
        {os === "Android" && (
          <div className="flex gap-5 my-10 xs:w-3/6 sm:mx-auto md:w-2/6">
            <img src={GoogleBadge} className="xs:w-full lg:w-max" />
          </div>
        )}
      </div>
      <div className="mx-auto xs:pb-10 lg:pb-0">
        <img
          src={ToksotLogo}
          className="md:h-[500px]  md:w-[500px] xs:w-[400px] xs:h-[400px] object-contain"
        />
      </div>
    </section>
  );
}

export default SectionEight;
