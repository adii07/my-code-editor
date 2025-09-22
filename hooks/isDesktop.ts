import { useState, useEffect } from "react";

export const useWindowSize = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Call handler once on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { isDesktop };
};
