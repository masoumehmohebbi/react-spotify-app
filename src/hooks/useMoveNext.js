import { useNavigate } from "react-router-dom";
const useMoveNext = () => {
  const navigate = useNavigate();
  return () => navigate(+1);
};

export default useMoveNext;
