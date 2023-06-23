import ToksotLogo from "../../assets/toksotadminlog.png";

function Footer() {
  return (
    <section className="bg-black text-white lg:pt-40  xs:pt-24 lg:px-28 xs:px-5 ">
      <div className="flex w-full my-5  lg:gap-10 xs:gap-4 justify-center">
        <h6 className="font-oswald">Contact</h6>
        <h6 className="font-oswald"> Press</h6>

        <h6 className="font-oswald">Terms </h6>

        <h6 className="font-oswald "> Privacy Policy</h6>

        <h6 className="font-oswald"> Guidelines</h6>
      </div>
      <div>
        <hr className="h-[4px] bg-white"></hr>
        <div className="flex w-full my-3">
          <div className="font-oswald"> © 2023 TokSot</div>
          <div className="ml-auto">
            {" "}
            <img src={ToksotLogo} className="w-8" />
          </div>
        </div>
      </div>
      <div className="w-full lg:py-12 xs:py-6 text-center">
        <h1 className="font-oswald lg:text-[9.5rem] xs:text-4xl tracking-wide lg:leading-tight xs:leading-snug text-center">
          The everyday thing
        </h1>
      </div>
    </section>
  );
}

export default Footer;
