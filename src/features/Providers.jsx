import { OpenModalProvider } from "../context/OpenModalContext";

const Providers = ({ children }) => {
  return <OpenModalProvider>{children}</OpenModalProvider>;
};

export default Providers;
