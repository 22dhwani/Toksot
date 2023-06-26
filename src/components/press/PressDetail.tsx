import logo from "../../assets/logo2.png";
import download from "../../assets/downloadicon.svg";

function PressDetail() {
  return (
    <div className="lg:px-96 font-oswald xs:px-10 flex flex-col gap-6 pt-12">
      <div className="lg:w-full">
        We’re grateful you have landed on this site. It makes us feel good and
        encourages us to make TokSot a more reliable and usable social network.
      </div>
      <div className="lg:w-full">
        We want our platform to be usable for everyone on daily basis, and we
        keep it free to use for everyone. TokSot is a fresh photo-sharing
        experience with lots of connectivity options. Anyone can make various
        types of communication just using photos with the help of our super
        tags. We also connect people using auto-generated community chat rooms
        for every location and topic.
      </div>
      <div className="lg:w-full">
        We’d be happy to answer your questions that spark in your mind.
      </div>
      <div className="lg:w-full flex flex-col">
        <div>
          Thank you for your love. You can also share your feedback and
          suggestions.{" "}
        </div>
        <div>For media queries, you can mail us on </div>
        <div className="text-sky-400">contact@toksot.com</div>
      </div>
      <div className="bg-slate-100 sm:w-80 lg:w-2/5 h-64 rounded-lg mb-16">
        <div className="pt-5 pl-5">
          <img src={logo}></img>
          <div className="pt-3">Logo Pack</div>
          <div className="pt-8 flex flex-row gap-6">
            <input type="checkbox" />
            <div className="w-5/6 text-gray-400 pb-8">
              I hereby agree that I will use TokSot brand kit assets to
              affiliate TokSot with it and I have no personal or commercial
              rights.
            </div>
          </div>
        </div>
        <div className="bg-slate-200 h-16 rounded-b-lg flex flex-row items-center px-10">
          <div className="text-2xl">DOWNLOAD</div>
          <div className="ml-auto ">
            <img src={download}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressDetail;
