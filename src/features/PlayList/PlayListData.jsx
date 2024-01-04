import { PlayLists } from "./PlayLists";
import useSongs from "./useSongs";

export const PlayListData = () => {
  const { data } = useSongs();
  const allSongs = data?.data?.results.slice(0, 5);

  return <PlayLists allSongs={allSongs} />;
};
