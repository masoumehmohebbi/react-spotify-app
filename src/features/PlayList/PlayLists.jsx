import { FaPlay } from "react-icons/fa";
import { useOpenPlayModal } from "./OpenPlayModalContext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Loading from "../../ui/Loading";
import useOutsideClick from "../../hooks/useOutsideClick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSongDetails } from "./SongDetailsContext";
import { useSelectedSongFavourite } from "../favourites/FavouritesContext";

export const PlayLists = ({ allSongs }) => {
  const { setSongUrl, setSongCover, setSongTitle, setSongArtist } =
    useSongDetails();
  const songRef = useRef();
  const navigate = useNavigate();
  const { setSelectedId } = useSelectedSongFavourite();

  useOutsideClick(songRef, "playIcon", () => oneSongClickHandler);

  const oneSongClickHandler = (id) => {
    navigate(`/playlist-song-detail/${id}`);
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const { setIsOpen } = useOpenPlayModal();

  const playSongHandler = (e, songSrc, songCover, songName, songArtist) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setSongUrl(songSrc);
    setSongCover(songCover);
    setSongTitle(songName);
    setSongArtist(songArtist);
  };

  if (!allSongs?.length)
    return (
      <div className="col-span-5">
        <Loading />
      </div>
    );

  return (
    <>
      {allSongs?.map((song) => (
        <div
          ref={songRef}
          onClick={() => oneSongClickHandler(song.id)}
          key={song.id}
          className="group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <LazyLoadImage
              effect="blur"
              src={song.cover_image}
              className="rounded-md"
            />

            <div
              onClick={(e) =>
                playSongHandler(
                  e,
                  song.file,
                  song.cover_image,
                  song.name,
                  song.artist.fullname
                )
              }
              className="playIcon btn-playIcon h-0 group-hover:h-fit overflow-hidden absolute -bottom-9 group-hover:bottom-3 left-1"
            >
              <FaPlay className="text-lg text-primary-900" />
            </div>
          </div>
          <h1 className="text-secondary-0">{song.artist.fullname}</h1>
          <p className="text-secondary-50 text-sm ">
            {song.name} - {song.genre.name}
          </p>
        </div>
      ))}
    </>
  );
};
