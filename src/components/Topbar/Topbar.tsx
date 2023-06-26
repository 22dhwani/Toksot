import topImage from "../../assets/topbarlogo.png";

const Topbar = () => {
  return (
    <div className="bg-white py-4 md:px-28 xs:px-5 sticky top-0 w-full">
      <div className="flex items-center justify-center">
        <img src={topImage} alt="Logo" />
      </div>
    </div>
  );
};

export default Topbar;
