import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

export function AddFavouriteProvider({ children }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <FavouriteContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </FavouriteContext.Provider>
  );
}

export function useSelectedSongFavourite() {
  const context = useContext(FavouriteContext);

  if (context === undefined) {
    throw new Error("FavouriteContext was used outSide of the QueryProvider.");
  }
  return context;
}
