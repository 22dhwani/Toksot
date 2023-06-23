import HeroImagetwo from "../../assets/hero-image-two.png";
import HeroImagethree from "../../assets/hero-image-three.png";

function SectionThree() {
  return (
    <section className="lg:pt-40 lg:pb-24 sm:py-32 xs:py-24 lg:px-28  xs:px-5  font-oswald bg-black text-white tracking-wider lg:leading-relaxed xs:leading-snug text-3xl ">
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 ">
        <div className="col-span-2 xs:my-10 lg:my-0 lg:mx-0 sm:mx-auto">
          <img src={HeroImagetwo} className=" h-[736px] w-[354px]" />
        </div>
        <div className="flex flex-col col-span-4 gap-3 lg:text-left sm:text-center">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> SuperTags</h4>
          <h1 className="font-oswald lg:text-7xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug col-span-1 ">
            Make various types of communication with the type of people you
            want.
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 items-center lg:gap-10 sm:my-28">
        <div className="flex flex-col col-span-4 gap-3 text-right xs:order-2 lg:order-1  lg:text-right sm:text-center">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> Inspire</h4>
          <h1 className="font-oswald lg:text-7xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug col-span-1 ">
            Reply with photos in others’ post inspiration threads.
          </h1>
        </div>
        <div className="col-span-2 xs:my-10 lg:my-0 lg:!mt-[-40vh] xs:order-1 lg:order-2 lg:mx-0 sm:mx-auto">
          <img src={HeroImagethree} className=" h-[736px] w-[354px]" />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
