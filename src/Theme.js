import { css } from "styled-components";

const mediaQuery = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 768px) and (max-width: 1536px) {
      ${css(...args)}
    }
  `,
  fullscreen: (...args) => css`
    @media (min-width: 1537px) {
      ${css(...args)}
    }
  `,
};

export { mediaQuery };
