import HeroImageeight from "../../assets/hero-image-eight.png";
import HeroImagenine from "../../assets/hero-image-nine.png";

function SectionSeven() {
  return (
    <section className="lg:pt-40 lg:pb-24 sm:py-32 xs:py-24 lg:px-20 xl:px-28 xs:px-5  font-oswald bg-black text-white tracking-wider lg:leading-relaxed xs:leading-snug text-3xl ">
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 ">
        <div className="xl:col-span-2 lg:col-span-3 xs:my-10 lg:my-0 lg:mx-0 xl:mx-auto sm:mx-auto">
          <img
            src={HeroImageeight}
            className=" sm:h-[736px] sm:w-[354px] xs:w-full object-contain"
          />
        </div>
        <div className="flex flex-col xl:col-span-4 lg:col-span-3 gap-3 lg:text-left sm:text-center lg:pt-12">
          <h4 className="font-oswald xs:text-lg lg:text-2xl">Explore</h4>
          <h1 className="font-oswald xl:text-[4.75rem] lg:text-5xl xs:text-5xl tracking-wide xl:leading-tight  lg:leading-snug xs:leading-snug col-span-1 ">
            Explore endless photos of your interests.
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 items-center lg:gap-10 xs:my-28 ">
        <div className="xl:pl-6 flex flex-col xl:col-span-4 lg:col-span-3 gap-3 text-right xs:order-2 lg:order-1  lg:text-right sm:text-center ">
          <h4 className="font-oswald xs:text-lg lg:text-2xl">
            {" "}
            Places / Topics
          </h4>
          <h1 className="font-oswald xl:text-[4.85rem] lg:text-5xl xs:text-5xl tracking-wide xl:leading-tight lg:leading-snug xs:leading-snug col-span-1 ">
            See photos, follow, and join in a chat room of any location or
            topic.
          </h1>
        </div>
        <div className="xl:col-span-2 lg:col-span-3 xs:my-10 lg:my-0 lg:!mt-[-40vh] xs:order-1 lg:order-2 lg:mx-0 sm:mx-auto lg:ml-auto xl:ml-0">
          <img
            src={HeroImagenine}
            className=" sm:h-[736px] sm:w-[354px] xs:w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
