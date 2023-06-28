import download from "../../assets/downloadpack.png";
// import { logoPack } from "../../assets/logo-pack";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { useState } from "react";
import logopack from "../../assets/Logo pack.png";
import packlogo from "../../assets/packlogo.png";

function PressDetail() {
  const [check, setCheck] = useState(false);
  const handleDownloadClick = () => {
    const zip = new JSZip();
    const folder = zip.folder("logo-pack");

    // Assuming you have an array of image URLs or base64-encoded data
    const imageUrls: any[] = [
      "Toksot app logo 1.png",
      "Toksot font logo black.png",
      "Toksot font logo white.png",
      "Toksottrblack 1.png",
      "Toksottrblackempty 1.png",
      "Toksottrgreen 1.png",
      "Toksottrgreenempty 1.png",
      "Toksottrwhite 1.png",
      "Toksottrwhiteempty 1.png",
    ];

    // Fetch the images and add them to the zip folder
    const fetchPromises = imageUrls.map((url) =>
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const fileName = url.substring(url.lastIndexOf("/") + 1);
          folder?.file(fileName, blob);
        })
    );

    // Wait for all the images to be fetched and added to the zip folder
    Promise.all(fetchPromises).then(() => {
      // Generate the zip file
      zip.generateAsync({ type: "blob" }).then((content) => {
        // Save the zip file using FileSaver.js
        FileSaver.saveAs(content, "images.zip");
      });
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
        <div className="text-sky-500">contact@toksot.com</div>
      </div>
      <div className="bg-[#FCFCFC] sm:w-80 lg:w-4/7 h-48 rounded-lg mb-16">
        <div className="pt-5 pl-5">
          <img src={packlogo}></img>
          <div className="pt-5">
            <img src={logopack}></img>
          </div>
          <div className="pt-6 flex flex-row gap-3">
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
        {check && (
          <div className="bg-[#F8F8F8] h-14 rounded-b-lg flex flex-row items-center px-4">
            <div className="text-2xl font-oswald">Download</div>
            <div className="ml-auto ">
              <button>
                <a onClick={handleDownloadClick} download={true}>
                  <img src={download}></img>
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PressDetail;
