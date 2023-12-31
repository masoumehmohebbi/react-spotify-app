import { useEffect } from "react";

function useOutsideClick(ref, exceptionId, cb) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && event.target.className !== "playIcon") {
        cb();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
