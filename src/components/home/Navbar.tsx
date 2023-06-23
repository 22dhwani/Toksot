import ToksotLogo from "../../assets/toksotadminlog.png";
import ToksotHeading from "../../assets/toksotheading.png";
import Download from "../../assets/download.png";

function Navbar() {
  return (
    <div className="bg-black md:py-6  xs:py-4 md:px-28 xs:px-5 flex items-center sticky top-[0vh] w-full">
      <div className="flex flex-row md:gap-5 xs:gap-3 items-center">
        <img src={ToksotLogo} className="w-10" />
        <img src={ToksotHeading} className="w-20" />
      </div>
      <div className="ml-auto xs:visible md:collapse">
        <img src={Download} className="w-5" />
      </div>
    </div>
  );
}

export default Navbar;
