import Navbar from "../../ui/Navbar";
import useSongs from "./useSongs";
import { useParams } from "react-router-dom";

const PlayListSongDetails = () => {
  const { id } = useParams();
  const { data } = useSongs();
  console.log(data?.data?.results);
  const selectedSong = data?.data?.results[id];
  console.log(selectedSong);
  return (
    <div>
      <Navbar />
      <div>
        <div className="grid grid-cols-2">
          <img
            className="h-48 col-span-2 object-cover"
            src={selectedSong.cover_image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PlayListSongDetails;
