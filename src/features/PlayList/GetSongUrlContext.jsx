import { createContext, useContext, useState } from "react";

const GetSongUrlContext = createContext();

export function GetSongUrlProvider({ children }) {
  const [songUrl, setSongUrl] = useState("");
  const [songCover, setSongCover] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");

  return (
    <GetSongUrlContext.Provider
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
    </GetSongUrlContext.Provider>
  );
}

export function useGetSongUrl() {
  const context = useContext(GetSongUrlContext);

  if (context === undefined) {
    throw new Error("OpenModalContext was used outSide of the QueryProvider.");
  }
  return context;
}
