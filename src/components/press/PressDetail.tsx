import download from "../../assets/pressdownload.svg";
import logopack from "../../assets/presslogopack.svg";
import packlogo from "../../assets/bottom-logo.svg";
import { useState } from "react";
import presspack1 from "../../assets/logo-pack/TokSot app logo 1.png";
import presspack2 from "../../assets/logo-pack/TokSot font logo black.png";
import presspack3 from "../../assets/logo-pack/TokSot font logo white.png";
import presspack4 from "../../assets/logo-pack/TokSottrblack 1.png";
import presspack5 from "../../assets/logo-pack/TokSottrblackempty 1.png";
import presspack6 from "../../assets/logo-pack/TokSottrgreen 1.png";
import presspack7 from "../../assets/logo-pack/TokSottrgreenempty 1.png";
import presspack8 from "../../assets/logo-pack/TokSottrwhite 1.png";
import presspack9 from "../../assets/logo-pack/TokSottrwhiteempty 1.png";

function PressDetail() {
  const [check, setCheck] = useState(false);
  const handleDownloadClick = () => {
    // Assuming you have an array of image URLs or base64-encoded data
    const imageUrls: any[] = [
      presspack1,
      presspack2,
      presspack3,
      presspack4,
      presspack5,
      presspack6,
      presspack7,
      presspack8,
      presspack9,
    ];
    imageUrls.forEach((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.substring(url.lastIndexOf("/") + 1);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    });
  };
  return (
    <div className="lg:px-60 font-oswald-light xs:px-10  tracking-normal flex flex-col gap-6 pt-24">
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
        <a href="mailto:contact@toksot.com">
          <div className="text-sky-500"> contact@toksot.com</div>
        </a>
      </div>
      <div className="bg-[#FCFCFC] sm:w-80 lg:w-4/7 h-48 rounded-lg my-16">
        <div className="pt-5 pl-5">
          <img src={packlogo}></img>
          <div className="pt-5">
            <img src={logopack}></img>
          </div>
          <div className="pt-10 flex flex-row gap-3">
            <div className="pt-3">
              <input
                type="checkbox"
                checked={check}
                onClick={() => setCheck(!check)}
              />
            </div>
            <div className="text-gray-400 pb-3 text-xs">
              I hereby agree that I will use TokSot brand kit assets to
              affiliate TokSot with it and I have no personal or commercial
              rights.
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8F8] h-14 rounded-b-lg flex flex-row items-center px-4">
          <div className="text-2xl font-oswald">Download</div>
          <div className="ml-auto ">
            <button>
              <a
                onClick={() => {
                  if (check) {
                    handleDownloadClick();
                  } else {
                    console.log("please click on the check box");
                  }
                }}
                download={true}
              >
                <img src={download} className="w-8"></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressDetail;
