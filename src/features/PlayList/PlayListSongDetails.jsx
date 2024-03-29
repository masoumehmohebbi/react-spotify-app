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
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as shamsi from "shamsi-date-converter";
import formatDate from "../../utils/formatDate";

const PlayListSongDetails = () => {
  const { setSongUrl, setSongCover, setSongTitle, setSongArtist } =
    useSongDetails();
  const navigate = useNavigate();
  const { setIsOpen } = useOpenPlayModal();
  const { id } = useParams();
  const { data } = useSongs();
  const selectedSong = data?.data?.results[id - 1];
  const allSongs = data?.data?.results;
  const { selectedId } = useSelectedSongFavourite();

  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  const [isToken, setIsToken] = useState(null);

  useEffect(() => {
    setIsToken(token ? false : true);
  }, [token]);

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

  const playSongHandler = (e, songSrc, songCover, songName, songArtist) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setSongUrl(songSrc);
    setSongCover(songCover);
    setSongTitle(songName);
    setSongArtist(songArtist);
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
            src={selectedSong?.cover_image}
            className="max-h-48 sm:max-h-64 lg:max-h-96 object-contain rounded-md shadow-md"
          />

          <ul className="text-secondary-50 w-full text-sm sm:text-base">
            <li className="list-item">
              <span className="text-base md:text-lg font-bold">اسم آهنگ:</span>
              &nbsp;
              {selectedSong?.name}
            </li>

            <li className="list-item">
              <span className="text-base md:text-lg font-bold">خواننده:</span>
              &nbsp;
              {selectedSong?.artist?.fullname}
            </li>

            <li className="list-item">
              <span className="text-base md:text-lg font-bold"> آلبوم:</span>
              &nbsp;
              {selectedSong?.artist.bio}
            </li>

            <li className="list-item">
              <span className="text-base md:text-lg font-bold">سبک آهنگ:</span>
              &nbsp;
              {selectedSong?.genre.name}
            </li>

            <li className="list-item">
              <span className="text-base md:text-lg font-bold">
                تاریخ افزودن:
              </span>
              &nbsp;
              <span dir="ltr" className="text-xs sm:text-sm">
                {shamsi
                  .gregorianToJalali(
                    formatDate(selectedSong?.artist.created_at)
                  )
                  .join(" / ")}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-3 p-5">
          <div
            onClick={(e) =>
              playSongHandler(
                e,
                selectedSong.file,
                selectedSong.cover_image,
                selectedSong.name,
                selectedSong.artist.fullname
              )
            }
            className="btn-playIcon"
          >
            <FaPlay className="text-lg text-primary-900" />
          </div>
          <button
            disabled={isToken}
            className={` ${isToken && "cursor-not-allowed"}`}
          >
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

        <MusicsBox allSongs={allSongs} navigate={navigate} />

        <CommentsContainer />
      </div>
    </>
  );
};

export default PlayListSongDetails;

function MusicsBox({ allSongs, navigate }) {
  return (
    <div className="text-secondary-0 pr-5 pt-11 h-[22rem] overflow-y-scroll">
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-x-5 sm:gap-x-16 justify-items-start">
        <li className="col-span-2 sm:col-span-1">#عنوان آهنگ</li>
        <li>خواننده</li>
        <li className="hidden sm:block">آلبوم</li>
        <li className="hidden md:block">
          <HiClock />
        </li>
      </ul>
      <hr className="border-primary-700 bg-opacity-10 border-spacing-y-11 my-3" />
      {allSongs?.map((song) => (
        <ul
          key={song.id}
          onClick={() => {
            navigate(`/playlist-song-detail/${song.id}`);
          }}
          className="cursor-pointer text-sm sm:text-base grid grid-cols-3 md:grid-cols-4 items-center justify-center gap-x-5 sm:gap-x-16 p-3 justify-items-start hover:bg-primary-600"
        >
          <li className="flex items-center justify-center gap-x-1 col-span-2 sm:col-span-1">
            <span>{song.id}</span> -
            <div className="flex items-center justify-center gap-x-2">
              <LazyLoadImage
                effect="blur"
                className="w-11 h-11 rounded-md object-cover"
                src={song.cover_image}
                alt={song.name}
              />
              <span>{song.name}</span>
            </div>
          </li>
          <li>{song.artist.fullname}</li>
          <li className="hidden sm:block">{song.artist.bio}</li>
          <li dir="ltr" className="hidden md:block text-sm">
            {shamsi
              .gregorianToJalali(formatDate(song?.artist.created_at))
              .join(" / ")}
          </li>
        </ul>
      ))}
    </div>
  );
}
