import { css } from "styled-components";

const mediaQuery = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
};

export { mediaQuery };
