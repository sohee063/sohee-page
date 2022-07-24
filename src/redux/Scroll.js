import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(false);

  const listener = () => {
    setScrollY(true);
  };

  useEffect(() => {
    window.addEventListener("mousewheel", listener);
    return () => {
      window.removeEventListener("mousewheel", listener);
    };
  });

  return scrollY;
}
