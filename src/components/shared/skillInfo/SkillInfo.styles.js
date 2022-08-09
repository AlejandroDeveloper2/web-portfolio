import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 2em 3em;

  @media ${devices.laptop} {
    padding: 3em 4em;
    gap: 30px;
  }
`;

export const Image = styled.img`
  @media ${devices.laptop} {
    transform: scale(1.3);
  }
`;

export const SkillTitle = styled.h2`
  font-weight: normal;
  font-size: 1.2em;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;

export const LevelBarContainer = styled.div`
  width: 100%;
  height: 2em;
  border-radius: 20px;
  background-color: var(--primary-color);
  position: relative;

  @media ${devices.laptop} {
    height: 2.5em;
  }
`;

export const LevelBar = styled.div`
  width: ${(props) => props.level}%;
  height: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.background};
  box-shadow: 0px 0px 10px 5px ${(props) => props.background};
  transition: all 0.6s ease;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Label = styled.p`
  font-size: 1em;
  text-align: center;
  span {
    transition: all 0.6s ease;
    color: ${(props) => props.color};
  }
  @media ${devices.laptop} {
    font-size: 1.25em;
  }
`;
