import HeroImageseven from "../../assets/hero-image-seven.png";

function SectionSix() {
  return (
    <section className="bg-primaryYellow text-white lg:pt-40 xs:pt-24 lg:gap-10 items-center  lg:px-20 xl:px-28 xs:px-5 grid lg:grid-cols-6 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 xl:col-span-4  lg:col-span-3 lg:mt-[20vh] lg:text-right sm:text-center">
        <h1 className="font-oswald lg:text-6xl xl:text-7xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug  lg:text-right xl:pl-7">
          YOUR EVERYDAY COMMUNICATION SOLUTION.
        </h1>
      </div>
      <div className="xl:col-span-2 lg:col-span-3 lg:ml-0 lg:mx-0 sm:mx-auto">
        <img
          src={HeroImageseven}
          className="sm:h-[600px] sm:w-[354px] xs:w-full"
        />
      </div>
    </section>
  );
}

export default SectionSix;
