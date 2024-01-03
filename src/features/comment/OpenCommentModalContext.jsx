import { createContext, useContext, useState } from "react";

const OpenCommentModalContext = createContext();

export function OpenCommentModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenCommentModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenCommentModalContext.Provider>
  );
}

export function useOpenCommentModal() {
  const context = useContext(OpenCommentModalContext);

  if (context === undefined) {
    throw new Error(
      "OpenCommentModalContext was used outSide of the QueryProvider."
    );
  }
  return context;
}
