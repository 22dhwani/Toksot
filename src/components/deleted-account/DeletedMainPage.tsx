import Topbar from "../Topbar/Topbar";
import DeletedHeading from "./DeletedHeading";
import DeletedDetail from "./DeletedDetail";
import BottomBar from "../Topbar/BottomBar";

function DeletedMainPage() {
  return (
    <div>
      <Topbar />
      <DeletedHeading />
      <DeletedDetail />
      <BottomBar />
    </div>
  );
}

export default DeletedMainPage;
