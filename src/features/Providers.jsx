import { OpenModalProvider } from "../context/OpenModalContext";
import { OpenPlaySongModalProvider } from "./PlayList/OpenPlayModalContext";
import { SongUrlProvider } from "./PlayList/songUrlContext";

const Providers = ({ children }) => {
  return (
    <SongUrlProvider>
      <OpenPlaySongModalProvider>
        <OpenModalProvider>{children}</OpenModalProvider>
      </OpenPlaySongModalProvider>
    </SongUrlProvider>
  );
};

export default Providers;
