import Topbar from "../Topbar/Topbar";
import PressHeading from "./PressHeading";
import PressDetail from "./PressDetail";
import BottomBar from "../Topbar/BottomBar";

function PressMainPage() {
  return (
    <div>
      <Topbar />
      <PressHeading />
      <PressDetail />
      <BottomBar />
    </div>
  );
}

export default PressMainPage;
