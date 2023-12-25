import { OpenModalProvider } from "../context/OpenModalContext";
import { OpenPlaySongModalProvider } from "./PlayList/OpenPlayModalContext";

const Providers = ({ children }) => {
  return (
    <OpenPlaySongModalProvider>
      <OpenModalProvider>{children}</OpenModalProvider>
    </OpenPlaySongModalProvider>
  );
};

export default Providers;
