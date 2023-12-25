import { FaPlay } from "react-icons/fa";
import PlaySongModal from "./PlaySongModal";
import { useState } from "react";

const playlistData = [
  {
    id: 1,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    id: 2,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    id: 3,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    id: 4,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    id: 5,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    id: 6,
    imageSrc:
      "https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037",
    title: "lofi bits",
    desc: "chill beats, lofi vibes, new tracks every week...",
  },
];
export const PlayListData = () => {
  const [isOpenModal, setIsOpenModal] = useState();
  return (
    <>
      {playlistData.map((item) => (
        <div
          key={item.id}
          className="group w-48 md:w-auto bg-primary-500 hover:bg-primary-700 shadow-md rounded-md p-5 cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <img className="rounded-md" src={item.imageSrc} />

            <div
              onClick={() => setIsOpenModal((prev) => !prev)}
              className="flex bg-success hover:scale-105 shadow-md rounded-full p-4 w-fit absolute transition-all ease-linear duration-150 items-center justify-center -bottom-9 h-0 group-hover:h-fit overflow-hidden group-hover:bottom-1 left-1"
            >
              <FaPlay className="text-lg text-primary-900" />
            </div>
          </div>
          <h1 className="text-secondary-0">{item.title}</h1>
          <p className="text-secondary-50 text-sm">{item.desc}</p>
        </div>
      ))}

      {isOpenModal && <PlaySongModal />}
    </>
  );
};
