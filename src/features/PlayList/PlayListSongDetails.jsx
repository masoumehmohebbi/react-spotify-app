import { FaPlay } from "react-icons/fa";
import Navbar from "../../ui/Navbar";
import useSongs from "./useSongs";
import { useParams } from "react-router-dom";
import { HiClock, HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useOpenPlayModal } from "./OpenPlayModalContext";
import CommentsContainer from "../comment/CommentsContainer";
import {
  removetFavourite,
  setFavourite,
} from "../../services/favouriteService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useFavourites from "../favourites/useFavourites";
import { useSelectedSongFavourite } from "../favourites/FavouritesContext";
import { useSongDetails } from "./SongDetailsContext";

const PlayListSongDetails = () => {
  const { setSongUrl } = useSongDetails();
  const navigate = useNavigate();
  const { setIsOpen } = useOpenPlayModal();
  const { id } = useParams();
  const { data } = useSongs();
  const selectedSong = data?.data?.results[id - 1];
  const allSongs = data?.data?.results;
  const { selectedId } = useSelectedSongFavourite();

  const { data: favSongsData } = useFavourites();
  const allFavSongs = favSongsData?.data?.results;

  const { mutateAsync: mutateAsyncSetFavourite } = useMutation({
    mutationFn: setFavourite,
  });
  const { mutateAsync: mutateAsyncRemoveFavourite } = useMutation({
    mutationFn: removetFavourite,
  });

  const setFavouriteHandler = async (id) => {
    try {
      await mutateAsyncSetFavourite({ song: id });
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast.error(error);
    }
  };
  const removeFavouriteHandler = async (id) => {
    try {
      await mutateAsyncRemoveFavourite({ song: id });
      navigate("/");
      window.location.reload();
    } catch (error) {
      toast.error(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };
  const isAddToFavourite = allFavSongs
    ?.map((fav) => fav.id)
    .includes(selectedId);
  return (
    <>
      <Navbar />
      <div className="pb-14 p-2">
        <div className="flex gap-x-7">
          <img
            className="md:max-h-96 max-h-40 sm:h-64 object-contain rounded-md shadow-md"
            src={selectedSong?.cover_image}
            alt=""
          />

          <ul className="text-secondary-50 w-full">
            <li className="list-item">
              <span className="text-lg font-bold">خواننده: </span>
              {selectedSong?.artist?.fullname}
            </li>

            <li className="list-item">
              <span className="text-lg font-bold"> اسم آهنگ: </span>
              {selectedSong?.name}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold"> آلبوم : </span>
              {selectedSong?.artist.bio}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold"> سبک آهنگ: </span>
              {selectedSong?.genre.name}
            </li>

            <li className="list-item">
              <span className="text-lg font-bold">تاریخ افزودن: </span>
              {formatDate(selectedSong?.artist.created_at)}
            </li>
            <li className="list-item">
              <span className="text-lg font-bold">تعداد بازدید: </span>
              {selectedSong?.views}
            </li>
          </ul>
        </div>

        <div className="flex gap-3 p-5">
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
              setSongUrl(selectedSong?.file);
            }}
            className="btn-playIcon"
          >
            <FaPlay className="text-lg text-primary-900" />
          </div>
          <button>
            {isAddToFavourite ? (
              <HiHeart
                onClick={() => removeFavouriteHandler(selectedSong?.id)}
                className="icon text-success"
              />
            ) : (
              <HiOutlineHeart
                onClick={() => setFavouriteHandler(selectedSong?.id)}
                className="text-secondary-50 icon"
              />
            )}
          </button>
        </div>

        <MusicsBox
          allSongs={allSongs}
          navigate={navigate}
          formatDate={formatDate}
        />

        <CommentsContainer />
      </div>
    </>
  );
};

export default PlayListSongDetails;

function MusicsBox({ allSongs, navigate, formatDate }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-secondary-0 pr-5 pt-11 h-[22rem] overflow-y-scroll">
      <ul className="grid grid-cols-4 gap-x-16 justify-items-start">
        <li>#عنوان آهنگ</li>
        <li>خواننده</li>
        <li>آلبوم</li>
        <li className="hidden md:block">
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
          <li className="hidden md:block">
            {formatDate(song?.artist.created_at)}
          </li>
        </ul>
      ))}
    </div>
  );
}
