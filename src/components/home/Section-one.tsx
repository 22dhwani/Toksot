import AppleBadge from "../../assets/app-badge.svg";
import GoogleBadge from "../../assets/google-badge.svg";
import HeroImageOne from "../../assets/hero-image-one.png";

function SectionOne() {
  return (
    <section className="bg-black text-white lg:pt-14  xs:pt-6  lg:px-20 xl:px-28 xs:px-5 grid lg:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 lg:text-left sm:text-center flex flex-col justify-between">
        <h1 className="font-oswald xl:text-7xl lg:text-6xl xs:text-5xl tracking-wide xl:leading-snug xs:leading-snug ">
          DO MORE WITH PHOTOS THAN JUST SHARING PHOTOS.
        </h1>
        <div className="flex gap-5 my-10 w-full ">
          <img src={AppleBadge} className="xs:w-full lg:w-max" />
          <img src={GoogleBadge} className="xs:w-full lg:w-max" />
        </div>
      </div>
      <div className="mx-auto">
        <img
          src={HeroImageOne}
          className="h-[600px] w-[354px] object-contain"
        />
      </div>
    </section>
  );
}

export default SectionOne;
