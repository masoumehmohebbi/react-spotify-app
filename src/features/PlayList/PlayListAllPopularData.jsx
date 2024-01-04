import "react-lazy-load-image-component/src/effects/blur.css";
import usePopularSongs from "./usePopularSongs";

import { PopularList } from "./PopularList";

export const PlayListAllPopularData = () => {
  const { data } = usePopularSongs();
  const allSongs = data?.data?.results;

  return (
    <div className="items-grid-container">
      <PopularList allSongs={allSongs} />
    </div>
  );
};
