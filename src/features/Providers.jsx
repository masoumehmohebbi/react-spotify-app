import { OpenModalProvider } from "../context/OpenModalContext";
import { GetSongUrlProvider } from "./PlayList/GetSongUrlContext";
import { OpenPlaySongModalProvider } from "./PlayList/OpenPlayModalContext";

const Providers = ({ children }) => {
  return (
    <GetSongUrlProvider>
      <OpenPlaySongModalProvider>
        <OpenModalProvider>{children}</OpenModalProvider>
      </OpenPlaySongModalProvider>
    </GetSongUrlProvider>
  );
};

export default Providers;
