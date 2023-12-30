import { FaPlay } from "react-icons/fa";
import { useOpenPlayModal } from "./OpenPlayModalContext";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "./../../hooks/useOutsideClick.js";
import { useRef } from "react";
import Loading from "../../ui/Loading";
import useSongs from "./useSongs";

// const playlistData = [
//   {
//     id: 1,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
//   {
//     id: 2,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
//   {
//     id: 3,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
//   {
//     id: 4,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
//   {
//     id: 5,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
//   {
//     id: 6,
//     imageSrc:
//       "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
//     title: "lofi bits",
//     desc: "chill beats, lofi vibes, new tracks every week...",
//   },
// ];

export const PlayListData = () => {
  const songRef = useRef();
  const navigate = useNavigate();
  useOutsideClick(songRef, "exceptionId", () => oneSongClickHandler);
  const oneSongClickHandler = (id) => {
    navigate(`/playlist-song-detail/${id}`);
  };
  const { setIsOpen } = useOpenPlayModal();
  const { data } = useSongs();
  console.log(data?.data?.results);
  const allSongs = data?.data?.results.slice(0, 5);

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
          // onClick={() => navigate(`/playlist/${song.id}`)}
          key={song.id}
          className="group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <img className="rounded-md" src={song.cover_image} />

            <div
              id="exceptionId"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex bg-success hover:scale-105 shadow-md rounded-full p-4 w-fit absolute transition-all ease-linear duration-150 items-center justify-center -bottom-9 h-0 group-hover:h-fit overflow-hidden group-hover:bottom-1 left-1"
            >
              <FaPlay className="text-lg text-primary-900" />
            </div>
          </div>
          <h1 className="text-secondary-0">{song.artist.fullname}</h1>
          <p className="text-secondary-50 text-sm">
            {song.name} - {song.genre.name}
          </p>
        </div>
      ))}
    </>
  );
};
