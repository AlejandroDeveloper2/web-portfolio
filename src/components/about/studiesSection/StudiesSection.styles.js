import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const StudiesContainer = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em 1.5em 5em 1.5em;
  align-items: center;
  gap: 1.5em;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background-color: var(--strong-gray-opacity);
  font-size: 1em;
  position: relative;
  margin-bottom: 4em;
  grid-area: "studies-section";
  justify-self: center;

  /*Tablet*/
  @media ${devices.tablet} {
    padding: 3em 1.5em 7em 1.5em;
    align-items: center;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 80em;
    padding: 3em 3em 6em 3em;
    gap: 2em;
  }
`;

export const Title = styled.h2`
  font-size: 1.25em;
  font-weight: normal;
  text-align: center;

  /*Desktop*/
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;

export const Span = styled.span`
  color: var(--blue-2);
  text-shadow: 0px 0px 10px var(--blue);
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  /*Tablet*/
  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const StudyList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  /*Tablet*/
  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StudyBox = styled.div`
  width: 16em;
  height: 13em;
  background-color: ${(props) => props.background};
  border-radius: 20px;
  box-shadow: 0px 0px 20px 5px ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  animation-name: ${(props) => props.boxAnimation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;

  h3 {
    font-size: 1em;
    font-weight: normal;
    text-align: center;
    animation-name: ${(props) => props.textAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
  @keyframes stretch-text {
    from {
      letter-spacing: 0;
    }
    50% {
      letter-spacing: 0.1em;
    }
    to {
      letter-spacing: 0;
    }
  }
  @keyframes fade-in-box {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 18em;
    height: 15em;
    gap: 2em;
    h3 {
      font-size: 1.25em;
    }
  }
`;

export const Icon = styled.span`
  transform: scaleX(2) scaleY(2);
  animation-name: ${(props) => props.iconAnimation};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes bounce-icon {
    from {
      transform: scaleX(2) translateY(0) scaleY(1.5);
    }
    25% {
      transform: scaleX(2) translateY(-20px) scaleY(2);
    }
    50% {
      transform: scaleX(2) translateY(0) scaleY(1.7);
    }
    to {
      transform: scaleX(2) translateY(0px) scaleY(2);
    }
  }
  @media ${devices.laptop} {
    @keyframes bounce-icon {
      from {
        transform: scaleX(2.5) translateY(0) scaleY(2);
      }
      25% {
        transform: scaleX(2.5) translateY(-25px) scaleY(2.5);
      }
      50% {
        transform: scaleX(2.5) translateY(0) scaleY(1.8);
      }

      to {
        transform: scaleX(2.5) translateY(0px) scaleY(2.5);
      }
    }
  }
`;
