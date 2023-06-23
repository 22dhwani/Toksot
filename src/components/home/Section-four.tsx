import HeroImagefour from "../../assets/hero-image-four.png";

function SectionFour() {
  return (
    <section className="bg-primaryBlue text-white lg:pt-40 xs:pt-24  lg:px-28 xs:px-5 grid lg:grid-cols-6 xs:grid-cols-1 ">
      <div className="col-span-2 xs:order-2 lg:order-1 lg:mx-0 sm:mx-auto">
        <img src={HeroImagefour} className="h-[600px] w-[354px]" />
      </div>
      <div className="w-full lg:py-12 xs:py-6 col-span-4 lg:text-left sm:text-center xs:order-1 lg:order-2 ">
        <h1 className="font-oswald lg:text-7xl lg:w-4/6 xs:w-full xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug">
          YOUR EVERYDAY COMMUNICATION SOLUTION.
        </h1>
      </div>
    </section>
  );
}

export default SectionFour;
