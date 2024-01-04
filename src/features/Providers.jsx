import { OpenModalProvider } from "../context/OpenModalContext";
import { OpenPlaySongModalProvider } from "./PlayList/OpenPlayModalContext";
import { SongDetailsProvider } from "./PlayList/SongDetailsContext";
import { OpenCommentModalProvider } from "./comment/OpenCommentModalContext";
import { AddFavouriteProvider } from "./favourites/FavouritesContext";

const Providers = ({ children }) => {
  return (
    <AddFavouriteProvider>
      <OpenCommentModalProvider>
        <SongDetailsProvider>
          <OpenPlaySongModalProvider>
            <OpenModalProvider>{children}</OpenModalProvider>
          </OpenPlaySongModalProvider>
        </SongDetailsProvider>
      </OpenCommentModalProvider>
    </AddFavouriteProvider>
  );
};

export default Providers;
