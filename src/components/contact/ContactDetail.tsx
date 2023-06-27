import Rightarrow from "../../assets/right-arrow.svg";

function ContactDetail() {
  return (
    <div className="lg:px-60 font-oswald font-medium tracking-wide xs:px-10 flex flex-col gap-6 pt-12">
      <div>
        Looking for something we can help you with? You can reach to us at
        <div className="text-sky-400">contact@toksot.com</div>
      </div>
      <div className="lg:mt-10 ">We’ll make sure you get faster reply.</div>
      <div className="lg:mt-20">More articles</div>
      <a href="/community-guidelines">
        <button className="flex flex-row items-center justify-between px-4 bg-slate-300 w-72 h-10 mt-3 rounded-lg">
          Community Guidelines
          <img className="" src={Rightarrow}></img>
        </button>
      </a>
    </div>
  );
}

export default ContactDetail;
