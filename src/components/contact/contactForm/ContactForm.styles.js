import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const Form = styled.form`
  width: 100%;
  height: auto;
  background-color: var(--strong-gray-opacity);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  margin-top: 18em;
  padding: 2em;
  gap: 1.5em;

  @media ${devices.tablet} {
    margin-top: 40em;
    width: 28.125em;
    padding: 3em;
    gap: 2em;
  }

  @media ${devices.laptop} {
    width: 36.25em;
    padding: 4.5em;
    gap: 2.5em;
    margin-top: 20em;
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media ${devices.tablet} {
    gap: 2.5em;
  }

  @media ${devices.laptop} {
    gap: 2.5em;
  }
`;

export const FigureContainer = styled.div`
  width: 6.25em;
  height: 6.25em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: -5em;
  animation-duration: 2s;
  animation-name: change-background-color;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  span {
    transform: scale(2);
  }

  @keyframes change-background-color {
    from {
      background-color: var(--secondary-color);
      box-shadow: 0 0 10px 5px var(--secondary-color);
      transform: rotate(0deg);
    }
    to {
      background-color: var(--blue);
      box-shadow: 0 0 10px 5px var(--blue);
      transform: rotate(8deg);
    }
  }

  @media ${devices.tablet} {
    width: 9.375em;
    height: 9.375em;
    top: -8em;
    span {
      transform: scale(3);
    }
  }

  @media ${devices.laptop} {
    top: 0;
    bottom: 0;
    left: -45em;
    width: 12.5em;
    height: 12.5em;
    span {
      transform: scale(4);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 2em;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4em;
  border-radius: 20px;
  border: solid 1px var(--white);
  background-color: transparent;
  padding-left: 1em;
  color: white;
  outline: none;
  &:focus {
    border: solid 2px var(--blue-2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 7.5em;
  resize: none;
  border-radius: 20px;
  border: solid 1px var(--white);
  background-color: transparent;
  padding: 1em;
  color: white;
  outline: none;
  &:focus {
    border: solid 2px var(--blue-2);
  }
`;

export const Row = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: block;
`;

export const Label = styled.label`
  position: absolute;
  color: var(--white-opacity);
  font-weight: normal;
  font-size: 1em;
  transition: all 0.5s ease;
  z-index: -1;
  top: 1em;
  left: 1em;
`;
