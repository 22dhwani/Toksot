import ToksotLogo from "../../assets/TokSot-header-logo.svg";
import Download from "../../assets/download.png";

function Navbar() {
  return (
    <div className="bg-black lg:py-6 mt-0 xs:py-4 lg:px-28 xl:px-36 xs:px-5 flex items-center sticky top-[-2px] w-full">
      <div className="flex flex-row lg:gap-5 xs:gap-3 xs:items-center">
        <img src={ToksotLogo} className="md:w-32 xs:w-32 object-contain" />
      </div>
      <div className="ml-auto xs:visible lg:collapse">
        <img src={Download} className="w-5 object-contain" />
      </div>
    </div>
  );
}

export default Navbar;
