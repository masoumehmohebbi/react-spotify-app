import FooterMobile from "./FooterMobile";
import AudioPlayer from "react-h5-audio-player";
import { useSongDetails } from "../features/PlayList/SongDetailsContext";
import { toast } from "react-hot-toast";

export function MusicPlayer() {
  const { songUrl, songCover, songTitle, songArtist } = useSongDetails();

  return (
    <div className="sticky mt-auto bottom-0 w-full z-40 bg-primary-900">
      <div className=" grid grid-cols-8">
        {songCover && (
          <span className="hidden col-span-1 lg:flex items-center justify-center gap-x-2">
            <img className="w-16 h-16 rounded-md" src={songCover} alt="" />
            <div className="flex flex-col">
              <span className="text-secondary-0 font-bold">{songTitle}</span>
              <span className="text-secondary-50">{songArtist}</span>
            </div>
          </span>
        )}
        <div
          className={` ${
            songCover ? "col-span-8 lg:col-span-7" : "col-span-8 lg:col-span-8"
          }`}
        >
          <AudioPlayer
            autoPlay={true}
            src={songUrl}
            onPlayError={() =>
              songUrl === "" && toast.error("یک آهنگ انتخاب کنید")
            }
          />
        </div>
      </div>
      <FooterMobile />
    </div>
  );
}
