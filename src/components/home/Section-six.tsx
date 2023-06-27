import HeroImageseven from "../../assets/hero-image-seven.png";

function SectionSix() {
  return (
    <section className="bg-primaryYellow text-white lg:pt-40 xs:pt-24 lg:gap-10  items-center lg:px-20 xl:px-28 xs:px-5 grid lg:grid-cols-6 xs:grid-cols-1 ">
      <div className="w-full lg:py-12 xs:py-6 xl:col-span-4  lg:col-span-3  lg:text-right sm:text-center xl:pl-60">
        <h1 className="font-oswald lg:text-[4rem] xl:text-[4.75rem] xs:text-5xl tracking-wide xl:leading-tight lg:leading-snug xs:leading-snug  lg:text-right ">
          LITTLE MORE YOU CAN DO THAN THAT.
        </h1>
      </div>
      <div className="xl:col-span-2 lg:col-span-3 xl:ml-0  sm:mx-auto">
        <img
          src={HeroImageseven}
          className="sm:h-[670px] sm:w-[354px]  xs:w-full object-contain"
        />
      </div>
    </section>
  );
}

export default SectionSix;
