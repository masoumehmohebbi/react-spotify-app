import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="text-secondary-0 text-center p-16">
      <p className="text-2xl my-5">صفحه مورد نظر یافت نشد</p>
      <button className="btn btn--secondary text-lg" onClick={moveBack}>
        صفحه اصلی
      </button>
    </div>
  );
};

export default NotFound;
