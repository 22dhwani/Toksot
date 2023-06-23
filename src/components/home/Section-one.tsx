import AppleBadge from "../../assets/app-badge.png";
import GoogleBadge from "../../assets/google-badge.png";
import HeroImageOne from "../../assets/hero-image-one.png";

function SectionOne() {
  return (
    <div className="bg-red-500 text-white md:pt-12  xs:pt-6 md:px-28 xs:px-5 grid md:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full md:py-12 xs:py-6">
        <h1 className="font-oswald md:text-7xl xs:text-5xl tracking-wide md:leading-tight xs:leading-snug">
          DO MORE WITH PHOTOS THAN JUST SHARING PHOTOS.
        </h1>
        <div className="flex gap-5 my-10 w-full ">
          <img src={AppleBadge} className="xs:w-full md:w-max" />
          <img src={GoogleBadge} className="xs:w-full md:w-max" />
        </div>
      </div>
      <div className="mx-auto">
        <img src={HeroImageOne} className="h-[600px] w-[354px]" />
      </div>
    </div>
  );
}

export default SectionOne;
