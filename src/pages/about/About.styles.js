import styled from "styled-components";

import { devices } from "../../helpers/breakpoints";

export const MainProfileContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-columns: repeat(1, max-content);
  grid-template-rows: repeat(3, max-content);
  grid-template-areas: "Header" "skill-section" "studies-section";
  position: relative;
  gap: 7em;

  /*Tablet*/
  @media ${devices.laptop} {
    gap: 5em;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25em;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 7em;

  /*Tablet*/
  @media ${devices.tablet} {
    flex-direction: row;
    top: 12em;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    top: 15em;
  }
`;

export const AboutMe = styled.div`
  width: 90%;
  padding: 2em;
  border-radius: 20px;
  background-color: var(--extra-strong-gray-opacity-2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  position: relative;
  animation-name: change-color;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes change-color {
    from {
      box-shadow: 0px 0px 10px 5px var(--orange);
    }
    50% {
      box-shadow: 0px 0px 10px 5px var(--blue);
    }
    to {
      box-shadow: 0px 0px 10px 5px var(--secondary-color);
    }
  }

  /*Tablet*/
  @media ${devices.tablet} {
    width: 21.25em;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 36.25em;
    padding: 2.5em;
  }
`;

export const Image = styled.img`
  width: 3.75em;
  height: 3.75em;
  transform: rotate(-5deg);
  background-color: var(--secondary-color);
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: -2.5em;
  padding: 0.3em;
  animation-name: change-image-color;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes change-image-color {
    from {
      box-shadow: 0px 0px 10px 5px var(--orange);
      background-color: var(--orange);
      transform: rotate(5deg);
    }
    50% {
      box-shadow: 0px 0px 10px 5px var(--blue);
      background-color: var(--blue);
      transform: rotate(-5deg);
    }
    to {
      box-shadow: 0px 0px 10px 5px var(--secondary-color);
      background-color: var(--secondary-color);
      transform: rotate(5deg);
    }
  }

  /*Tablet*/
  @media ${devices.tablet} {
    left: 0;
    right: 0;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    top: -32em;
    width: 6em;
    height: 6em;
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;
  span {
    color: var(--secondary-color);
  }

  /*Desktop*/
  @media ${devices.laptop} {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 1em;
  font-weight: normal;
  text-align: justify;

  /*Desktop*/
  @media ${devices.laptop} {
    font-size: 1.25em;
  }
`;

export const FigureOne = styled.img`
  position: absolute;
  top: 7em;
  left: 7em;
  display: none;
  filter: drop-shadow(0px 0px 10px var(--secondary-color));
  animation: bounce-down 1.6s linear infinite;

  @keyframes bounce-down {
    25% {
      transform: translateY(-4px) scale(0.6);
    }
    50%,
    100% {
      transform: translateY(0) scale(0.6);
    }
    75% {
      transform: translateY(4px) scale(0.6);
    }
  }

  /*Desktop*/
  @media ${devices.tablet} {
    display: block;
    top: 5em;
    left: 1em;
    transform: scale(0.6);
  }

  /*Desktop*/
  @media ${devices.laptop} {
    display: block;
    transform: scale(0.8);
    @keyframes bounce-down {
      25% {
        transform: translateY(-4px) scale(0.8);
      }
      50%,
      100% {
        transform: translateY(0) scale(0.8);
      }
      75% {
        transform: translateY(4px) scale(0.8);
      }
    }
  }
`;

export const FigureTwo = styled.img`
  position: absolute;
  top: 8em;
  right: 2em;
  display: none;
  filter: drop-shadow(0px 0px 10px var(--secondary-color));

  animation: bounce-down-reverse 1.6s linear infinite;

  @keyframes bounce-down-reverse {
    25% {
      transform: translateY(4px);
    }
    50%,
    100% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-4px);
    }
  }

  /*Desktop*/
  @media ${devices.laptop} {
    display: block;
  }
`;

export const CVButton = styled.a`
  text-decoration: none;
  width: 2.5em;
  height: 2.5em;
  background-color: var(--primary-color);
  border-radius: 10px;
  box-shadow: 0 0 10px 5px var(--secondary-color);
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  position: absolute;
  top: 1.5em;
  right: 2em;
  svg {
    color: var(--white);
  }
  p {
    font-weight: normal;
    color: var(--white);
    display: none;
  }
  &:hover {
    background-color: var(--secondary-color);
    letter-spacing: 0.1em;
  }
  animation-name: change-color;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /*Desktop*/
  @media ${devices.tablet} {
    width: 13em;
    height: 3.75em;
    position: relative;
    top: 0;
    right: 0;
    p {
      display: block;
    }
  }
`;
