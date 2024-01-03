import { OpenModalProvider } from "../context/OpenModalContext";
import { GetSongUrlProvider } from "./PlayList/GetSongUrlContext";
import { OpenPlaySongModalProvider } from "./PlayList/OpenPlayModalContext";
import { OpenCommentModalProvider } from "./comment/OpenCommentModalContext";

const Providers = ({ children }) => {
  return (
    <OpenCommentModalProvider>
      <GetSongUrlProvider>
        <OpenPlaySongModalProvider>
          <OpenModalProvider>{children}</OpenModalProvider>
        </OpenPlaySongModalProvider>
      </GetSongUrlProvider>
    </OpenCommentModalProvider>
  );
};

export default Providers;
