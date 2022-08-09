import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const FooterContainer = styled.footer`
  /*Phone */
  width: 100%;
  height: 9.375em;
  position: fixed;
  bottom: ${(props) => (props.isFooterVisible ? "0" : "-8em")};
  transition: all 0.5s ease;
  button {
    position: absolute;
    top: -1em;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
  }

  /*Desktop design*/
  @media ${devices.laptop} {
    width: 50em;
    height: 10em;
    margin: auto;
    left: 0;
    right: 0;
    bottom: ${(props) => (props.isFooterVisible ? "0" : "-8.5em")};
  }
`;
export const Layer = styled.div`
  /*Phone */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px 40px 0px 0px;
  gap: 1em;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: var(--extra-strong-gray-opacity-2);
  backdrop-filter: blur(10px);
  padding: 2em 0;
  animation-name: change-color-effect;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /*Tablet */
  @media ${devices.tablet} {
    border-radius: 60px 60px 0px 0px;
  }
  /*Desktop */
  @media ${devices.laptop} {
    box-shadow: 0px 0px 10px 10px var(--blue);
  }
`;

export const SocialLink = styled.a`
  /*Phone */
  width: 3em;
  height: 3em;
  background-color: var(--extra-strong-gray);
  color: var(--white);
  /* box-shadow: 0px 0px 10px 2px var(--blue); */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.6s ease;
  animation-name: change-color-effect;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  svg {
    transform: scale(0.7);
  }
  &:active {
    background-color: var(--blue-2);
  }

  /*Desktop */
  @media ${devices.laptop} {
    width: 3.75em;
    height: 3.75em;
    svg {
      transform: scale(1);
    }
    &:hover {
      svg {
        transform: rotate(-8deg);
      }
      background-color: var(--blue-2);
    }
  }
`;

export const SocialMedia = styled.div`
  /*Phone and tablet*/
  display: flex;
  gap: 1.25em;
  justify-content: center;
  align-items: center;

  /*Desktop */
  @media ${devices.laptop} {
    gap: 1.875em;
  }
`;
export const Rigths = styled.span`
  /*Phone, desktop and tablet */
  color: var(--white);
  text-align: center;
  font-size: 1em;
`;
