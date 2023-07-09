import AppleBadge from "../../assets/app-badge.svg";
import GoogleBadge from "../../assets/google-badge.svg";
import HeroImageOne from "../../assets/hero-image-one.png";

function SectionOne() {
  const os = getMobileOperatingSystem();

  return (
    <section className="bg-black text-white lg:pt-14  xs:pt-6  lg:px-28 xl:px-36 xs:px-5 grid lg:grid-cols-2 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 lg:text-left sm:text-center flex flex-col justify-between">
        <h1 className="font-oswald xl:text-[4.75rem] lg:text-[4rem] xs:text-5xl tracking-wide xl:leading-snug lg:leading-snug xs:leading-snug ">
          DO MORE WITH PHOTOS THAN JUST SHARING PHOTOS.
        </h1>
        {(os === "unknown" || os === "Windows Phone") && (
          <div className="flex gap-5 my-10 w-full lg:mx-auto md:items-center md:justify-center lg:justify-start">
            <img src={AppleBadge} className="xs:w-full md:w-max lg:w-max" />
            <img src={GoogleBadge} className="xs:w-full  md:w-max lg:w-max" />
          </div>
        )}
        {os === "iOS" && (
          <div className="flex gap-5 my-10 xs:w-3/6 sm:mx-auto lg:mx-0 md:w-2/6 ">
            <img src={AppleBadge} className="xs:w-full lg:w-max" />
          </div>
        )}
        {os === "Android" && (
          <div className="flex gap-5 my-10 xs:w-3/6 sm:mx-auto lg:mx-0 md:w-2/6">
            <img src={GoogleBadge} className="xs:w-full lg:w-max" />
          </div>
        )}
      </div>
      <div className="lg:ml-auto lg:mx-0 xs:mx-auto">
        <img
          src={HeroImageOne}
          className="sm:h-[670px] sm:w-[354px] object-contain"
        />
      </div>
    </section>
  );
}

export default SectionOne;

export function getMobileOperatingSystem() {
  let window: any;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) {
    return "iOS";
  }

  return "unknown";
}
