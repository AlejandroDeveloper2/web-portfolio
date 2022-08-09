import styled from "styled-components";

import { devices } from "../../helpers/breakpoints";

export const MainProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  @media ${devices.tablet} {
    gap: 1.5em;
  }

  @media ${devices.laptop} {
    gap: 3em;
  }
`;

export const DescriptionContainer = styled.div`
  width: 20em;
  height: 15.625em;
  background-color: var(--extra-strong-gray-opacity-2);
  box-shadow: 0 0 10px 5px var(--secondary-color);
  backdrop-filter: blur(10px);
  border-radius: 1.25em;
  margin-top: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  position: relative;
  animation-name: change-color-effect;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media ${devices.tablet} {
    width: 26.25em;
    height: 12em;
    margin-top: 22em;
  }

  @media ${devices.laptop} {
    width: 36.25em;
    height: 15.625em;
    margin-top: 18em;
    padding: 3em;
  }
`;

export const IconLaunch = styled.span`
  transform: scale(2.5);

  @media ${devices.tablet} {
    transform: scale(3.5);
  }

  @media ${devices.laptop} {
    transform: scale(4.5);
  }
`;

export const IconContainer = styled.div`
  width: 6.25em;
  height: 6.25em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5em;
  left: 0;
  right: 0;
  margin: auto;
  animation: bounce-down-icon 1.6s linear infinite;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    animation-name: change-color-icon-container;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes change-color-icon-container {
      from {
        box-shadow: 0px 0px 10px 5px var(--secondary-color);
        background-color: var(--secondary-color);
      }

      to {
        box-shadow: 0px 0px 10px 5px var(--blue);
        background-color: var(--blue);
      }
    }
  }

  @keyframes bounce-down-icon {
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

  @media ${devices.tablet} {
    width: 9.375em;
    height: 9.375em;
    top: -7em;
  }

  @media ${devices.laptop} {
    width: 14em;
    height: 14em;
    top: -12em;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  justify-content: center;
  align-items: center;

  @media ${devices.laptop} {
    gap: 1em;
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;
  span {
    color: var(--secondary-color);
    text-shadow: 0 0 10px var(--secondary-color);
  }

  @media ${devices.laptop} {
    font-size: 2em;
  }
`;
export const Paragraph = styled(Title)`
  font-size: 1em;
  text-align: justify;

  @media ${devices.laptop} {
    font-size: 1.25em;
  }
`;

export const IllustrationSix = styled.img`
  display: none;

  @media ${devices.tablet} {
    animation: bounce-down-figure 2s linear infinite;
    position: absolute;
    display: block;
    top: 6em;
    left: 0em;
    transform: scale(0.5);
    filter: drop-shadow(0 0 10px var(--blue));

    @keyframes bounce-down-figure {
      25% {
        transform: scale(0.5) translateY(4px);
      }
      50%,
      100% {
        transform: scale(0.5) translateY(0);
      }
      75% {
        transform: scale(0.5) translateY(-4px);
      }
    }
  }

  @media ${devices.laptop} {
    top: 8em;
    left: 7em;
    transform: scale(0.8);

    @keyframes bounce-down-figure {
      25% {
        transform: scale(0.8) translateY(4px);
      }
      50%,
      100% {
        transform: scale(0.8) translateY(0);
      }
      75% {
        transform: scale(0.8) translateY(-4px);
      }
    }
  }
`;

export const IllustrationSeven = styled.img`
  display: none;

  @media ${devices.tablet} {
    position: absolute;
    display: block;
    top: 4em;
    right: 0em;
    transform: scale(0.5);
    filter: drop-shadow(0 0 10px var(--secondary-color));
    animation: bounce-down-figure-reverse 2s linear infinite;

    @keyframes bounce-down-figure-reverse {
      25% {
        transform: scale(0.5) translateY(-4px);
      }
      50%,
      100% {
        transform: scale(0.5) translateY(0);
      }
      75% {
        transform: scale(0.5) translateY(4px);
      }
    }
  }

  @media ${devices.laptop} {
    top: 8em;
    right: 7em;
    transform: scale(0.8);

    @keyframes bounce-down-figure-reverse {
      25% {
        transform: scale(0.8) translateY(-4px);
      }
      50%,
      100% {
        transform: scale(0.8) translateY(0);
      }
      75% {
        transform: scale(0.8) translateY(4px);
      }
    }
  }
`;

export const ProjectBox = styled.section`
  width: 100%;
  height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  border-radius: 10px;
  background-color: var(--strong-gray-opacity);
  backdrop-filter: blur(10px);
  margin: 4em 0;
  position: relative;

  @media ${devices.tablet} {
    width: 90%;
    height: 22em;
  }

  @media ${devices.laptop} {
    width: 80em;
    border-radius: 20px;
  }
`;

export const Counter = styled.div`
  width: 5em;
  height: 3em;
  display: flex;
  justify-content: center;
  gap: 0.2em;
  align-items: center;
  position: absolute;
  margin: auto;
  top: -2em;
  right: 0;
  left: 0;
  border-radius: 10px;
  animation: bounce-down-counter-reverse 1.6s linear infinite;

  &::before {
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    animation-name: change-color-icon-container;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes bounce-down-counter-reverse {
    25% {
      transform: translateY(-4px);
    }
    50%,
    100% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(4px);
    }
  }
  span {
    font-size: 1.25em;
    text-align: center;
    font-weight: normal;
  }

  @media ${devices.laptop} {
    width: 7em;
    height: 4em;
    margin: 0;
    left: calc(80em - 12em);
    right: none;

    span {
      font-size: 1.5em;
    }
  }
`;
