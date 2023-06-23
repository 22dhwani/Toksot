import NotFound from "./../assets/notFound.png";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <img src={NotFound} alt="" className="lg:w-3/6 lg:h-4/6 object-contain" />
    </div>
  );
};

export default NotFoundPage;
