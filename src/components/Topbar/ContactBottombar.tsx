import year from "../../assets/logoyear.svg";
import logo from "../../assets/bottom-logo.svg";

const ContactBottomBar = () => {
  return (
    <div className="sm:relative md:fixed bottom-0 z-50 w-full lg:h-12 sm:h-20 bg-[#F8F8F8] dark:bg-gray-700 border-t-[1px] border-[#f0f0f0] dark:border-gray-600">
      <div className="flex flex-col md:flex-row md:items-center lg:mt-2 lg:ml-60 md:ml-20 xs:pt-3 lg:pt-0">
        <div className="flex flex-row justify-center md:order-2 md:justify-start h-full max-w-lg mx-auto font-oswald-light">
          <div>
            <button className="mr-3 xl:mr-8">
              <a href="/contact-us">Contact</a>
            </button>
            <button className="mr-3 xl:mr-8">
              <a href="/press">Press</a>
            </button>
            <button className="mr-3 xl:mr-8">
              <a href="terms-of-services">Terms</a>
            </button>
            <button className="mr-3 xl:mr-8">
              <a href="/privacy-policy">Privacy Policy</a>
            </button>
            <button className="mr-3 xl:mr-8">
              <a href="community-guidelines">Guidelines</a>
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-row justify-between my-2 mt-6 px-2 pb-4">
          <img src={year} alt="Year" className="mr-2 h-4" />
          <img src={logo} alt="Logo" className="mr-2 h-4" />
        </div>
        <div className="hidden md:flex md:order-1 md:my-0 my-2 ">
          <img src={year} alt="Year" />
        </div>
        <div className="hidden md:flex md:order-3 md:mr-auto">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default ContactBottomBar;
