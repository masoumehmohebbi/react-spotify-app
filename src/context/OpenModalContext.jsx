import { createContext, useContext, useState } from "react";

const OpenModalContext = createContext();

export function OpenModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenModalContext.Provider>
  );
}

export function useOpenModal() {
  const context = useContext(OpenModalContext);

  if (context === undefined) {
    throw new Error("OpenModalContext was used outSide of the QueryProvider.");
  }
  return context;
}
