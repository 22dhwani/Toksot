import Topbar from "../Topbar/Topbar";
import ContactHeading from "./ContactHeading";
import ContactDetail from "./ContactDetail";
import ContactBottomBar from "../Topbar/ContactBottombar";

function ContactUsMainPage() {
  return (
    <div>
      <Topbar />
      <ContactHeading />
      <ContactDetail />
      <ContactBottomBar />
    </div>
  );
}

export default ContactUsMainPage;
