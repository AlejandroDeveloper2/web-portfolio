import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const Container = styled.div`
  /*Phone */
  width: 9.375em;
  height: 9.375em;
  border-radius: 50%;
  position: relative;
  animation-name: change-color;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes change-color {
    from {
      box-shadow: 0px 0px 20px var(--white-opacity),
        0px 0px 30px var(--white-opacity), 0px 0px 40px var(--white-opacity),
        0px 0px 50px var(--white-opacity);
      border: 5px solid var(--white);
      background-color: var(--white);
    }
    50% {
      box-shadow: 0px 0px 20px var(--blue), 0px 0px 30px var(--blue),
        0px 0px 40px var(--blue), 0px 0px 50px var(--blue);
      border: 5px solid var(--blue);
      background-color: var(--blue);
    }
    to {
      box-shadow: 0px 0px 20px var(--secondary-color),
        0px 0px 30px var(--secondary-color), 0px 0px 40px var(--secondary-color),
        0px 0px 50px var(--secondary-color);
      border: 5px solid var(--secondary-color);
      background-color: var(--secondary-color);
    }
  }

  /*Tablet*/
  @media ${devices.tablet} {
    height: 12.5em;
    width: 12.5em;
  }

  /*Desktop */
  @media ${devices.laptop} {
    height: 18.75em;
    width: 18.75em;
  }
`;
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;
