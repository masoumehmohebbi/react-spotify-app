import { FaPlay } from "react-icons/fa";

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
];
export const PlayListData = () => {
  return (
    <>
      {playlistData.map((item) => (
        <div
          key={item.id}
          className="group bg-primary-500 shadow-md rounded-md p-5 cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <img className="rounded-md" src={item.imageSrc} />
            <div className="flex bg-success hover:scale-105 rounded-full p-4 w-fit absolute transition-all ease-linear duration-150 items-center justify-center -bottom-9 h-0 group-hover:h-fit overflow-hidden group-hover:bottom-1 left-1">
              <FaPlay className="text-lg text-primary-900 shadow-md" />
            </div>
          </div>
          <h1 className="text-secondary-0">{item.title}</h1>
          <p className="text-secondary-50 text-sm">{item.desc}</p>
        </div>
      ))}
    </>
  );
};
