import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    setScrollY(
      Math.floor(
        (window.pageYOffset /
          (document.body.clientHeight - window.innerHeight)) *
          100
      )
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return scrollY;
}
