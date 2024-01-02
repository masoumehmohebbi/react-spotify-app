import { useQuery } from "@tanstack/react-query";
import { getFavourites } from "../../services/favouriteService";
const useFavourites = () => {
  return useQuery({
    queryKey: ["get-favourites"],
    queryFn: getFavourites,
    retry: false,
  });
};

export default useFavourites;
