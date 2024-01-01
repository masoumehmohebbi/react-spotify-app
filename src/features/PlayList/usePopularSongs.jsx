import { useQuery } from "@tanstack/react-query";
import { getPopularSongs } from "../../services/songServices";
const usePopularSongs = () => {
  return useQuery({
    queryKey: ["get-popular-songs"],
    queryFn: getPopularSongs,
    retry: false,
  });
};

export default usePopularSongs;
