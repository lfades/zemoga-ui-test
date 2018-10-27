import styled, { css } from 'styled-components';

/**
 * Media queries for all the required breakpoints
 */
export const media = Object.entries({
  largest: 1300,
  large: 1110,
  medium: 1000
}).reduce(
  (result, [label, size]) =>
    Object.assign(result, {
      [label]: (...args) => css`
        @media only screen and (max-width: ${size / 16}em) {
          ${css(...args)};
        }
      `
    }),
  {}
);

export const MainGridColumns = sideSize => css`
  grid-template-columns:
    [full-start] ${sideSize}
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] ${sideSize}
    [full-end];
`;

/**
 * Main Grid used by the app
 */
export const MainGrid = css`
  display: grid;
  ${MainGridColumns('1fr')};
`;

/**
 * To avoid issues z-index, all are defined here
 */
export const zIndex = new function zIndex() {
  this.base = 1;
  this.background = this.base - 1;
}();

export const H1 = styled.h1`
  color: #fff;
  font-size: 5.5rem;
`;

export const H2 = styled.h1`
  color: #fff;
  font-size: 4.5rem;
`;

export const H3 = styled.h1`
  color: #fff;
  font-size: 4rem;
`;

export const H4 = styled.h4`
  color: #fff;
  font-size: 3rem;
`;

export const H5 = styled.h4`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
`;

export const H6 = styled.h6`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
`;
