import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
  padding: 4em 1.5em;
  p {
    font-size: 0.8em;
    font-weight: normal;
    text-align: center;
  }
  /*Desktop */
  @media ${devices.laptop} {
    gap: 2em;
    padding: 4em;
    p {
      text-align: left;
      font-size: 1em;
    }
  }
`;

export const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 1em;
  font-weight: normal;

  /*Desktop */
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;

export const ProjectLogo = styled.img`
  transform: scale(0.8);

  /*Desktop */
  @media ${devices.laptop} {
    transform: scale(1);
  }
`;

export const TechnologiesBox = styled.div`
  width: 100%;
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: var(--strong-gray-opacity);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const Technology = styled.button`
  padding: 1em;
  border-radius: 50%;
  background-color: var(--extra-strong-gray);
  display: grid;
  align-place: center;
  border: none;
  transition: all 0.6s ease;
  img {
    width: ${(props) =>
      props.technologyName === "Express JS" ? "75px" : "2.5em"};
    height: ${(props) =>
      props.technologyName === "Express JS" ? "22px" : "2.5em"};
    transform: scale(0.8);
    transition: all 0.5s ease;
  }
  &:active {
    background-color: var(--red);
    box-shadow: 0px 0px 10px 5px var(--red);
  }
  /*Desktop*/
  @media ${devices.laptop} {
    padding: 1.5em;
    cursor: pointer;
    &:hover {
      background-color: var(--red);
      box-shadow: 0px 0px 10px 5px var(--red);
      img {
        transform: rotate(10deg);
      }
    }
    img {
      transform: scale(1);
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  /* Desktop */
  @media ${devices.laptop} {
    justify-content: space-between;
    gap: 0;
  }
`;
