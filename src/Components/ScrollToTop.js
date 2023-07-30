import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  useEffect(() => {
    if (isDesktop) {
      window.scrollTo(0, 0);
    }
  }, [pathname, isDesktop]);

  return null;
};

export default ScrollToTop;
