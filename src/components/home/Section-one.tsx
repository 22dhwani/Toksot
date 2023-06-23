import AppleBadge from "../../assets/app-badge.png";
import GoogleBadge from "../../assets/google-badge.png";
import HeroImageOne from "../../assets/hero-image-one.png";

function SectionOne() {
  return (
    <section className="bg-black text-white lg:pt-14  xs:pt-6 lg:px-28 xs:px-5 grid lg:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 lg:text-left sm:text-center">
        <h1 className="font-oswald lg:text-7xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug ">
          DO MORE WITH PHOTOS THAN JUST SHARING PHOTOS.
        </h1>
        <div className="flex gap-5 my-10 w-full ">
          <img src={AppleBadge} className="xs:w-full lg:w-max" />
          <img src={GoogleBadge} className="xs:w-full lg:w-max" />
        </div>
      </div>
      <div className="mx-auto">
        <img src={HeroImageOne} className="h-[600px] w-[354px]" />
      </div>
    </section>
  );
}

export default SectionOne;
