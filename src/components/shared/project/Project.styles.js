import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const ProjectContainer = styled.div`
  background-color: ${(props) => props.background};
  width: 12em;
  height: 9.375em;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 10px 5px ${(props) => props.shadowColor};
  animation-name: project-effect;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  transition: all 0.5s ease-in;
  padding: 1em 0;
  box-sizing: content-box;

  img {
    transform: scale(0.6);
  }

  @keyframes project-effect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /*Tablet */
  @media ${devices.tablet} {
    width: 15.75em;
    height: 12.625em;
    border-radius: 20px;
    margin-left: 2em;
    box-sizing: border-box;
    img {
      transform: scale(0.8);
    }
    button {
      position: relative;
      bottom: 0;
    }
  }

  /*Desktop */
  @media ${devices.laptop} {
    width: 18.75em;
    height: 15.625em;
    padding: 0;
    img {
      transform: scale(1);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  text-align: center;
  color: var(--white);
  font-weight: normal;
  word-spacing: -0.1em;

  @media ${devices.tablet} {
    display: block;
  }
  /*Desktop */
  @media ${devices.laptop} {
    font-size: 1.25em;
    word-spacing: 0.3em;
  }
`;
