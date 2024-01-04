import { PlayList } from "./PlayList";
import useSongs from "./useSongs";

export const PlayListData = () => {
  const { data } = useSongs();
  const allSongs = data?.data?.results.slice(0, 5);

  return <PlayList allSongs={allSongs} />;
};
