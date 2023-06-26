import PausedHeading from "./PausedHeading";
import PausedDetail from "./PausedDetail";
import Topbar from "../Topbar/Topbar";
import BottomBar from "../Topbar/BottomBar";

function PausedMainPage() {
  return (
    <div>
      <Topbar />
      <PausedHeading />
      <PausedDetail />
      <BottomBar />
    </div>
  );
}

export default PausedMainPage;
