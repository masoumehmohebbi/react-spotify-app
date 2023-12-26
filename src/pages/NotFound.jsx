import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="bg-secondary-0 text-center">
      <button onClick={moveBack}>back</button>
    </div>
  );
};

export default NotFound;
