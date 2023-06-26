import HeroImagefive from "../../assets/hero-image-five.png";
import HeroImagesix from "../../assets/hero-image-six.png";

function SectionFive() {
  return (
    <section className="lg:pt-40 lg:pb-24 sm:py-32 xs:py-24 lg:px-20 xl:px-28 xs:px-5  font-oswald bg-black text-white tracking-wider lg:leading-relaxed xs:leading-snug text-3xl ">
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 lg:gap-10 items-start">
        <div className="flex flex-col xl:col-span-4 lg:col-span-3 gap-3  xs:order-2 lg:order-1 lg:text-right sm:text-center xs:text-right">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> Chat</h4>
          <h1 className="font-oswald xl:text-7xl lg:text-6xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug col-span-1 ">
            Share and chat with your friends.
          </h1>
        </div>
        <div className="xl:col-span-2 lg:col-span-3 xs:my-10 lg:my-0 lg:ml-auto xl:ml-0 xs:order-1 lg:order-2 lg:mx-0 sm:mx-auto">
          <img
            src={HeroImagesix}
            className=" sm:h-[736px] sm:w-[354px] xs:w-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 xs:grid-cols-1 items-center lg:gap-10 sm:my-28">
        <div className="xl:col-span-2 lg:col-span-3 xs:my-10 lg:my-0 lg:!mt-[-40vh]  sm:mx-auto">
          <img
            src={HeroImagefive}
            className=" sm:h-[736px] sm:w-[354px] xs:w-full"
          />
        </div>
        <div className="flex flex-col xl:col-span-4 lg:col-span-3 gap-3 lg:mt-[10vh] xs:mt-0 lg:text-left sm:text-center">
          <h4 className="font-oswald xs:text-lg lg:text-2xl"> ChatRooms</h4>
          <h1 className="font-oswald xl:text-7xl lg:text-6xl xs:text-5xl tracking-wide lg:leading-tight xs:leading-snug col-span-1 ">
            Open to join community chat rooms for every location and topic.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
