import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/commentService";
const useComments = () => {
  return useQuery({
    queryKey: ["get-comments"],
    queryFn: getComments,
    retry: false,
  });
};

export default useComments;
