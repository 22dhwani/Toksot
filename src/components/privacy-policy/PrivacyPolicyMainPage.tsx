import PrivacyPolicyHeading from "./PrivacyPolicyHeading";
import PrivacyPolicyDetail from "./PrivacyPolicyDetail";
import BottomBar from "../Topbar/BottomBar";
import Topbar from "../Topbar/Topbar";

function PrivacyPolicyMainPage() {
  return (
    <div>
      <Topbar />
      <PrivacyPolicyHeading />
      <PrivacyPolicyDetail />
      <BottomBar />
    </div>
  );
}

export default PrivacyPolicyMainPage;
