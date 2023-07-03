import Rightarrow from "../../assets/right-arrow.svg";

function ContactDetail() {
  return (
    <div className="lg:px-60 font-oswald-light font-medium tracking-normal xs:px-10  pt-24">
      <div>
        Looking for something we can help you with? You can reach to us at
        <a href="mailto:contact@toksot.com">
          <div className="text-sky-500">contact@toksot.com</div>
        </a>
      </div>
      <div className="mt-10 ">We’ll make sure you get faster reply.</div>
      <div className="flex flex-col gap-2">
        <div className="mt-20">More articles</div>
        <a href="/community-guidelines">
          <button className="flex flex-row items-center justify-between px-4 bg-[#F8F8F8] w-72 h-10 rounded-lg">
            Community Guidelines
            <img className="" src={Rightarrow}></img>
          </button>
        </a>
      </div>
    </div>
  );
}

export default ContactDetail;
