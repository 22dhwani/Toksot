import Topbar from "../Topbar/Topbar";
import CommunityHeading from "./CommunityHeading";
import CommunityDetail from "./CommunityDetail";
import BottomBar from "../Topbar/BottomBar";

function CommunityMainPage() {
  return (
    <div>
      <Topbar />
      <CommunityHeading />
      <CommunityDetail />
      <BottomBar />
    </div>
  );
}

export default CommunityMainPage;
