import { createContext, useContext, useState } from "react";

const OpenPlayModalContext = createContext();

export function OpenPlaySongModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenPlayModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenPlayModalContext.Provider>
  );
}

export function useOpenPlayModal() {
  const context = useContext(OpenPlayModalContext);

  if (context === undefined) {
    throw new Error("OpenModalContext was used outSide of the QueryProvider.");
  }
  return context;
}
