import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const SkillContainer = styled.section`
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
  grid-area: "skill-section";
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
  span {
    color: var(--secondary-color);
    text-shadow: 0px 0px 10px var(--secondary-color);
  }
  /*Desktop*/
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
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

export const SkillList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;

  /*Tablet*/
  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${devices.laptop} {
    gap: 6em;
  }
`;

export const SkillBox = styled.div`
  width: 100%;
  height: 6.875em;
  padding: 0;
  background: var(--strong-gray-opacity);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /*Tablet*/
  @media ${devices.tablet} {
    width: 21.25em;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 29.375em;
  }
`;

export const SkillCategory = styled.div`
  width: 70%;
  background-color: ${(props) => props.background};
  box-shadow: 0px 0px 10px ${(props) => props.background},
    0px 0px 20px ${(props) => props.background};
  border-radius: 20px;
  padding: 1em 0.2em;
  display: grid;
  align-place: center;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 6em;
  p {
    font-weight: normal;
    text-align: center;
    font-size: 1em;
  }
  /*Tablet*/
  @media ${devices.tablet} {
    width: 16.5em;
    p {
      font-size: 1.25em;
    }
  }

  /*desktop*/
  @media ${devices.laptop} {
    width: 60%;
  }
`;

export const Illustration = styled.img`
  position: absolute;
  top: 1em;
  right: -2em;
  display: none;
  transform: scale(0.7);
  animation-name: rotate-figure;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  background-color: var(--blue);
  padding: 1em;
  box-shadow: 0px 0px 10px 5px var(--blue);

  @keyframes rotate-figure {
    from {
      transform: rotate(5deg) scale(0.7);
    }
    50% {
      transform: rotate(-5deg) scale(0.7);
    }
    to {
      transform: rotate(5deg) scale(0.7);
    }
  }

  /*Laptop*/
  @media ${devices.laptop} {
    display: block;
  }
`;
