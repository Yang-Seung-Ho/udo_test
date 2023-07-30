import { useMediaQuery } from "react-responsive";

export function useMediaQueries() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return { isMobile, isDesktop };
}
