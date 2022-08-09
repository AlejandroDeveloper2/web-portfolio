import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const AlertContainer = styled.div`
  width: 90%;
  height: auto;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0em;
  padding: 0.8em 0;
  box-shadow: 0 0 10px 5px ${(props) => props.background};
  border-radius: 10px;
  transform: ${(props) => (props.isVisible ? "scale(1)" : "scale(0)")};
  transition: transform 0.5s ease-in;
  position: absolute;
  bottom: 29em;

  @media ${devices.tablet} {
    bottom: -8em;
  }

  @media ${devices.laptop} {
    width: 35em;
    padding: 1em 0;
    gap: 0.5em;
  }
`;

export const Message = styled.p`
  font-weight: normal;
  text-align: center;
`;

export const Icon = styled.span`
  transform: scale(1.2);
`;
