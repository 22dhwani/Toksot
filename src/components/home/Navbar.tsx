import ToksotLogo from "../../assets/TokSot-header-logo.svg";
import Download from "../../assets/download.png";

function Navbar() {
  return (
    <div className="bg-black lg:py-6 mt-0 xs:py-4 lg:px-28 xs:px-5 flex items-center sticky top-[-2px] w-full">
      <div className="flex flex-row lg:gap-5 xs:gap-3 items-center">
        <img src={ToksotLogo} className="w-28" />
      </div>
      <div className="ml-auto xs:visible lg:collapse">
        <img src={Download} className="w-5" />
      </div>
    </div>
  );
}

export default Navbar;
