import HeroImagetwo from "../../assets/hero-image-two.png";
import HeroImagethree from "../../assets/hero-image-three.png";

function SectionThree() {
  return (
    <section className="lg:pt-40 lg:pb-24 sm:py-32 xs:py-24 lg:px-28 xl:px-28  xs:px-5  font-oswald bg-black text-white tracking-wider lg:leading-relaxed xs:leading-snug text-3xl ">
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 xl:gap-8 2xl:gap-0">
        <div className="xl:col-span-2 lg:col-span-3 xs:my-10 lg:my-0 lg:mx-0 sm:mx-auto xl:mx-auto ">
          <img
            src={HeroImagetwo}
            className=" sm:h-[736px] sm:w-[354px] xs:w-full object-contain"
          />
        </div>
        <div className="flex flex-col lg:col-span-3  xl:col-span-4 gap-3 lg:text-left sm:text-center lg:pt-2 xl:pt-10 2xl:pt-2">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> Super Tags</h4>
          <h1 className="font-oswald xl:text-[4.5rem] lg:text-5xl xs:text-5xl tracking-wide xl:leading-tight lg:leading-snug xs:leading-snug xl:w-11/12 ">
            Make various types of communication with the type of people you
            want.
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 items-center lg:gap-10 xs:my-28">
        <div className="flex flex-col xl:col-span-4 lg:col-span-3 gap-3 text-right xs:order-2 lg:order-1  lg:text-right sm:text-center lg:mt-24 xl:mt-10 2xl:mt-16 xl:pl-10">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> Inspire</h4>
          <h1 className="font-oswald xl:text-[4.5rem] lg:text-5xl  xs:text-5xl tracking-wide xl:leading-tight lg:leading-snug xs:leading-snug ">
            Reply with photos in others’ post inspiration threads.
          </h1>
        </div>
        <div className="xl:col-span-2  lg:col-span-3 xs:my-10 lg:my-0 lg:!mt-[-18.65rem] xs:order-1 lg:order-2 lg:mx-0 sm:mx-auto lg:ml-auto xl:ml-0">
          <img
            src={HeroImagethree}
            className="sm:h-[736px] sm:w-[354px] xs:w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
