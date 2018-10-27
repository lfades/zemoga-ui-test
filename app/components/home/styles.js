import styled, { createGlobalStyle } from 'styled-components';
import { MainGrid, zIndex, H3, H4, H5 } from '../globals';
import theme from '../../lib/theme';

export const BaseStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%; /* 10px; */
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: ${theme.font.primary};
    font-weight: 300;
    letter-spacing: 0.03rem;
  }
`;

/**
 * Main container of the app, it wraps the entire page
 */
export const Container = styled.div`
  ${MainGrid};
`;

export const HeaderSection = styled(Container)`
  grid-column: full-start / full-end;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0) 30%
    ),
    url(/static/pope.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 4rem;
`;

export const StyledHeader = styled.header`
  grid-column: center-start / center-end;

  nav {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.7rem;
    margin-left: 4rem;
  }
  .logo {
    flex: 1;
  }
  .logo a {
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
  }
`;

export const StyledHeaderCard = styled.div`
  grid-column: center-start / center-end;
  justify-self: start;
  margin-top: 10rem;
`;

export const HeaderCardContent = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, 50rem);
  background: #000000bf;
  padding: 3rem;

  p {
    color: #fff;
    font-size: 2rem;
    margin: 1.5rem 0;
  }
  .small {
    display: flex;
    align-items: flex-end;
  }
  .small img {
    height: 1.3rem;
    margin-right: 0.5rem;
  }
  .small a {
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
    border-bottom: 1px solid #ffffff73;
  }
  ${H5} {
    margin-top: 3rem;
  }
`;

export const HeaderCardThumbs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  div {
    padding: 2rem 0;
  }
  .up {
    background: ${theme.color.primary}E6;
  }
  .down {
    background: ${theme.color.secondary}E6;
  }
`;

export const StyledHeaderBottom = styled.div`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: 1fr 2.5fr;
  margin-top: 8rem;

  .closing {
    position: relative;
    color: #fff;
    background: #00000033;
    font-size: 1.4rem;
    text-align: right;
    text-transform: uppercase;
    padding: 2rem 1rem;
  }
  .closing::after {
    content: '';

    position: absolute;
    top: calc(50% - 1rem);
    right: 0;

    border: 1rem solid #00000033;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;

    transform: translateX(100%);
  }
  .days {
    color: #000;
    background: #ffffffe6;
    font-size: 3rem;
    padding: 1rem 2rem;
  }
  .days span {
    font-weight: 400;
  }
`;

export const Content = styled.div`
  grid-column: center-start / center-end;
`;

export const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr min-content;
  grid-gap: 2rem;
  background: #ebebeb;
  align-items: center;
  justify-items: center;
  margin-top: 3rem;
  padding: 2rem 3rem;

  .speak {
    font-size: 2rem;
  }
  .be-counted {
    font-size: 3rem;
    font-weight: 700;
  }
  .text {
    font-size: 1.6rem;
  }
  svg {
    cursor: pointer;
  }
`;

export const VotesTitle = styled(H3)`
  color: #000;
  font-weight: 300;
  margin-top: 3rem;
`;

export const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-auto-rows: 55rem;
  grid-gap: 3rem;
  margin-top: 4rem;
`;

export const Card = styled.div`
  position: relative;
  display: grid;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: ${zIndex.background};
  }
`;

export const CardBody = styled.div`
  display: grid;
  align-content: end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 70%);
  z-index: ${zIndex.base};
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;

  .thumb {
    grid-row: 1 / span 4;
    padding-top: 1.3rem;
    padding-right: 0.7rem;
  }
  .thumb-up,
  .thumb-down {
    padding: 5px;
  }
  .thumb-up {
    background: ${theme.color.primary};
  }
  .thumb-down {
    background: ${theme.color.secondary};
  }
  .small {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
  .description {
    color: #fff;
    font-size: 1.6rem;
    margin-top: 1.3rem;
    min-height: 4rem;
  }
  .actions {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;

    .thumb-up,
    .thumb-down {
      cursor: pointer;
    }
    button {
      color: #fff;
      background: #0000001a;
      font-size: 1.3rem;
      cursor: pointer;
      border: 1px solid #fff;
      padding: 1rem 1.5rem;
    }
    .active {
      border: 2px solid #fff;
    }
  }
`;

export const CardVotes = styled.div`
  position: relative;
  display: flex;
  margin-top: 4rem;

  ::before {
    content: '';
    position: absolute;
    background: ${theme.color.primary}cc;
    left: 0;
    width: ${props => props.widthUp || 0}%;
    height: 100%;
  }
  ::after {
    content: '';
    position: absolute;
    background: ${theme.color.secondary}cc;
    right: 0;
    width: ${props => props.widthDown || 0}%;
    height: 100%;
  }
`;

export const VoteUp = styled.div`
  flex: 1;
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 3rem;
  padding: 3px 7px 10px;
  z-index: ${zIndex.base};

  span {
    margin-left: 0.7rem;
  }
`;

export const VoteDown = styled.div`
  display: flex;
  color: #fff;
  align-items: flex-end;

  font-size: 3rem;
  padding: 3px 7px 10px;
  z-index: ${zIndex.base};

  span {
    margin-right: 0.7rem;
  }
`;

export const StyledSubmitName = styled.div`
  background: linear-gradient(#ffffffd9, #ffffffd9), url(/static/people.png);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding: 1.3rem 2.2rem;

  ${H4} {
    flex: 1;
    color: #000;
    font-weight: 300;
  }
  button {
    background: none;
    font-size: 2rem;
    cursor: pointer;
    border: 3px solid #000;
    padding: 1rem 3rem;
  }
`;

export const StyledFooter = styled.footer`
  grid-column: center-start / center-end;

  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 2.5rem 0;

  /* This is the dotted border  */
  background-image: linear-gradient(
    to right,
    black 15%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 6px 1px;
  background-repeat: repeat-x;
`;

export const FooterLink = styled.div`
  margin-left: 2.5rem;

  svg {
    cursor: pointer;
  }
  a {
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
  }
  :nth-child(1) {
    margin-left: 0;
  }
  :nth-child(3) {
    flex: 1;
  }
`;
