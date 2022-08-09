import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const MainContainer = styled.div`
  /*Phone */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 3em;

  /*Tablet */
  @media ${devices.tablet} {
    width: 90%;
    margin: 3em auto;
  }
  /*Desktop */
  @media ${devices.laptop} {
    width: 48.125em;
    position: absolute;
    top: 28em;
    right: 5em;
    bottom: 5em;
    align-items: flex-end;
  }
`;

export const ProjectContainer = styled.div`
  /*Phone */
  width: 80%;
  height: auto;
  background-color: var(--strong-gray-opacity);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 2em 0;
  margin-bottom: 3em;

  /*Tablet*/
  @media ${devices.tablet} {
    height: 21.875em;
    border-radius: 20px;
    width: 85%;
    flex-direction: row;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 100%;
    height: 21.875em;
    border-radius: 20px;
  }
`;

export const TitleSection = styled.div`
  /*Phone */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--white);
  text-align: center;
  font-size: 1em;
  span {
    color: var(--blue);
    text-shadow: 0px 0px 10px var(--blue);
    animation-name: neon-change-effect-3;
    animation-iteration-count: infinite;
    animation-duration: 3s;

    @keyframes neon-change-effect-3 {
      10% {
        color: var(--white);
        text-shadow: 0px 0px 10px var(--white);
      }
      50% {
        color: var(--red);
        text-shadow: 0px 0px 10px var(--red);
      }
    }
  }

  /*Tablet */
  @media ${devices.tablet} {
    font-size: 1.25em;
  }

  /*Desktop */
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;
