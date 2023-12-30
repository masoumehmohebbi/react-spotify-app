import { useQuery } from "@tanstack/react-query";
import { getSongs } from "../../services/songServices";
const useSongs = () => {
  return useQuery({
    queryKey: ["get-songs"],
    queryFn: getSongs,
    retry: false,
  });
};

export default useSongs;
