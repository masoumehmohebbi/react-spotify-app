import { createContext, useContext, useState } from "react";

const SongDetailsContext = createContext();

export function SongDetailsProvider({ children }) {
  const [songUrl, setSongUrl] = useState("");
  const [songCover, setSongCover] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");

  return (
    <SongDetailsContext.Provider
      value={{
        songUrl,
        setSongUrl,
        songCover,
        setSongCover,
        songTitle,
        setSongTitle,
        songArtist,
        setSongArtist,
      }}
    >
      {children}
    </SongDetailsContext.Provider>
  );
}

export function useSongDetails() {
  const context = useContext(SongDetailsContext);

  if (context === undefined) {
    throw new Error("OpenModalContext was used outSide of the QueryProvider.");
  }
  return context;
}
