import Topbar from "../Topbar/Topbar";
import TermsHeading from "./TermsHeading";
import TermsDetail from "./TermsDetail";
import BottomBar from "../Topbar/BottomBar";

function TermsMainPage() {
  return (
    <div>
      <Topbar />
      <TermsHeading />
      <TermsDetail />
      <BottomBar />
    </div>
  );
}

export default TermsMainPage;
