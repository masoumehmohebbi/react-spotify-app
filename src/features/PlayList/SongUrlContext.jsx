import { createContext, useContext, useState } from "react";

const SongUrlContext = createContext();

export function SongUrlProvider({ children }) {
  const [songUrl, setSongUrl] = useState("");

  return (
    <SongUrlContext.Provider value={{ songUrl, setSongUrl }}>
      {children}
    </SongUrlContext.Provider>
  );
}

export function useSongUrl() {
  const context = useContext(SongUrlContext);

  if (context === undefined) {
    throw new Error("SongUrlContext was used outSide of the QueryProvider.");
  }
  return context;
}
