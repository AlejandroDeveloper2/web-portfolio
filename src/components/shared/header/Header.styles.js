import styled from "styled-components";

import headerBackground from "../../../images/headerBackground.png";
import headerBackground2 from "../../../images/headerBackground-2.png";

import { devices } from "../../../helpers/breakpoints";

export const HeaderContainer = styled.header`
  /*Phone */
  width: 100vw;
  height: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--extra-strong-gray-opacity-2);
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  animation-name: change-color-effect;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  grid-area: "Header";

  /*Tablet*/
  @media ${devices.tablet} {
    height: 31.25em;
    border-radius: 30px;
  }
  /*Desktop */
  @media ${devices.laptop} {
    border-radius: 0;
    height: 40em;
    box-shadow: none;
    animation-name: change-background-header;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @keyframes change-background-header {
      from {
        background-image: url(${headerBackground});
      }
      to {
        background-image: url(${headerBackground2});
      }
    }
  }
`;
