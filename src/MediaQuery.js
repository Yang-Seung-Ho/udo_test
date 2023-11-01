import { useMediaQuery } from "react-responsive";

export function useMediaQueries() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  // const isDesktop = useMediaQuery({ minWidth: 768, maxWidth: 1536 });
  // const isFullScreen = useMediaQuery({ minWidth: 1537 });

  return { isMobile, isDesktop };
}
