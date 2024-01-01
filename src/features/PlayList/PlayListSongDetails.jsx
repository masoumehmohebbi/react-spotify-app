import { FaPlay } from "react-icons/fa";
import Navbar from "../../ui/Navbar";
import useSongs from "./useSongs";
import { useParams } from "react-router-dom";
import { HiClock, HiOutlineHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const PlayListSongDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSongs();
  const selectedSong = data?.data?.results[id - 1];
  const allSongs = data?.data?.results;
  console.log(selectedSong);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div className="pb-14 p-2">
        <div className="flex gap-x-7">
          <img
            className="max-h-96 object-contain rounded-md shadow-md"
            src={selectedSong.cover_image}
            alt=""
          />

          <ul className="text-secondary-50 w-full">
            <li className="list-item">
              <span className="text-lg font-bold">خواننده: </span>
              {selectedSong.artist.fullname}
            </li>

            <li className="list-item">
              <span className="text-lg font-bold"> اسم آهنگ: </span>
              {selectedSong.name}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold"> آلبوم : </span>
              {selectedSong.artist.bio}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold"> سبک آهنگ: </span>
              {selectedSong.genre.name}
            </li>

            <li className="list-item">
              <span className="text-lg font-bold">تاریخ افزودن: </span>
              {selectedSong.artist.created_at}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold">تعداد بازدید: </span>
              {selectedSong.views}
            </li>
          </ul>
        </div>

        <div className="flex gap-3 p-5">
          <div className="btn-playIcon">
            <FaPlay className="text-lg text-primary-900" />
          </div>
          <button>
            <HiOutlineHeart className="text-secondary-50 w-9 h-9 hover:scale-105 transition-all ease-linear duration-150" />
          </button>
        </div>

        <div className="text-secondary-0 pr-5 pt-11">
          <ul className="grid grid-cols-4 gap-x-16 justify-items-start">
            <li>#عنوان آهنگ</li>
            <li>خواننده</li>
            <li>آلبوم</li>
            <li>
              <HiClock />
            </li>
          </ul>
          <hr className="border-primary-700 bg-opacity-10 border-spacing-y-11 my-3" />
          {allSongs?.map((song) => (
            <ul
              key={song.id}
              onClick={() => {
                navigate(`/playlist-song-detail/${song.id}`), scrollToTop();
              }}
              className="cursor-pointer grid grid-cols-4 items-center justify-center gap-x-16 p-3 justify-items-start hover:bg-primary-600"
            >
              <li className="flex items-center justify-center gap-x-1">
                <span>{song.id}</span> -
                <div className="flex items-center justify-center gap-x-2">
                  <img
                    className="w-11 h-11 rounded-md object-cover"
                    src={song.cover_image}
                    alt={song.name}
                  />
                  <span>{song.name}</span>
                </div>
              </li>
              <li>{song.artist.fullname}</li>
              <li>{song.artist.bio}</li>
              <li>2.45</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayListSongDetails;
