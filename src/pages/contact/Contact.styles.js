import styled from "styled-components";

import { devices } from "../../helpers/breakpoints";

export const MainContainer = styled.div`
  padding-bottom: 12em;
`;

export const ImageOne = styled.img`
  display: none;
  position: absolute;
  filter: drop-shadow(0 0 10px var(--blue-2));
  animation: bounce-down-figure 1.6s linear infinite;

  @media ${devices.tablet} {
    transform: scale(0.6);
    display: block;
    right: 0em;
    top: 6em;
    @keyframes bounce-down-figure {
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
  }

  @media ${devices.laptop} {
    transform: scale(0.8);
    right: 4em;
    top: 8em;

    @keyframes bounce-down-figure {
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

export const ImageTwo = styled(ImageOne)`
  @media ${devices.tablet} {
    display: none;
  }

  @media ${devices.laptop} {
    display: block;
    left: 4em;
    top: 7em;
  }
`;
