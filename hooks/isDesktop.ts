import { useState, useEffect } from "react";

export const useWindowSize = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); // start as unknown

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    handleResize(); // set initial value on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { isDesktop };
};
