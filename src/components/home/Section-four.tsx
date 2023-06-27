import HeroImagefour from "../../assets/hero-image-four.png";

function SectionFour() {
  return (
    <section className="bg-primaryBlue text-white lg:pt-40 xs:pt-24   lg:px-20 xl:px-28 xs:px-5 grid lg:grid-cols-6 xs:grid-cols-1 items-center">
      <div className="xl:col-span-2 xs:order-2 lg:order-1 lg:mx-0 xl:mx-auto sm:mx-auto lg:col-span-3">
        <img
          src={HeroImagefour}
          className="sm:h-[600px] sm:w-[354px] xs:w-full object-contain"
        />
      </div>
      <div className="w-full lg:py-12 xs:py-6 xl:col-span-4 lg:col-span-3 lg:text-left sm:text-center xs:order-1 lg:order-2 lg:mx-auto ">
        <h1 className="font-oswald xl:text-7xl lg:text-6xl lg:w-4/6 xs:w-full xs:text-5xl tracking-wide xl:leading-tight lg:leading-snug xs:leading-snug">
          YOUR EVERYDAY COMMUNICATION SOLUTION.
        </h1>
      </div>
    </section>
  );
}

export default SectionFour;
