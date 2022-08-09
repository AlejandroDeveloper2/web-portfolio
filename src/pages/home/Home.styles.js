import styled from "styled-components";

import { devices } from "../../helpers/breakpoints";

export const ProfileMainContainer = styled.div`
  /*Phone and Tablet*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2em;

  /*Desktop*/
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 5em;
    margin-top: 1em;
  }
`;

export const ProfileContainer = styled(ProfileMainContainer)`
  /*Phone*/
  gap: 0.625em;

  /*Tablet*/
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 1.25em;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    flex-direction: row;
    gap: 1.5625em;
  }
`;

export const ProfileInfo = styled.div`
  /*Phone */
  display: flex;
  align-items: center;
  gap: 2em;
  flex-direction: column;
  justify-content: center;

  /*Tablet */
  @media ${devices.tablet} {
    align-items: flex-start;
  }

  /*Desktop */
  @media ${devices.laptop} {
    align-items: flex-start;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /*Tablet */
  @media ${devices.tablet} {
    align-items: flex-start;
  }
  /*Desktop */
  @media ${devices.laptop} {
    align-items: flex-start;
  }
`;

export const SkillsTitle = styled.h2`
  /*Phone*/
  font-size: 1em;
  font-weight: normal;
  color: var(--white);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  /*Tablet */
  @media ${devices.tablet} {
    font-size: 1.25em;
  }
  /*Desktop */
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;

export const SkillBox = styled.div`
  /*Phone*/
  width: 20em;
  height: 6.875em;
  padding: 0;
  background: var(--strong-gray-opacity);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  /*Tablet */
  @media ${devices.tablet} {
    width: 25em;
  }

  /*Desktop */
  @media ${devices.laptop} {
    width: 29.375em;
  }
`;

export const Info = styled.div`
  /*Phone and Tablet*/
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  flex-direction: column;

  /*tablet */
  @media ${devices.tablet} {
    align-items: flex-start;
  }
  /*Desktop */
  @media ${devices.laptop} {
    gap: 0.625em;
  }
`;

export const Name = styled.p`
  /*Phone */
  font-size: 1.25em;
  font-weight: normal;
  color: var(--white);
  text-align: center;

  /*Tablet*/
  @media ${devices.tablet} {
    font-size: 1.5em;
  }

  /*Desktop */
  @media ${devices.laptop} {
    font-size: 2em;
  }
`;

export const Proffession = styled(Name)`
  /*Phone */
  font-size: 1em;
  span {
    color: var(--secondary-color);
    text-shadow: 0px 0px 10px var(--secondary-color);
    animation-name: neon-change-effect;
    animation-iteration-count: infinite;
    animation-duration: 3s;

    @keyframes neon-change-effect {
      10% {
        color: var(--blue);
        text-shadow: 0px 0px 10px var(--blue);
      }
      50% {
        color: var(--red);
        text-shadow: 0px 0px 10px var(--red);
      }
    }
  }

  /*Tablet*/
  @media ${devices.tablet} {
    font-size: 1.25em;
  }

  /*Desktop */
  @media ${devices.laptop} {
    font-size: 1.5em;
  }
`;
export const Presentation = styled.p`
  /*Phone  and tablet */
  display: none;
  span {
    font-size: 1.5em;
  }
  text-align: center;
  width: 18em;
  small {
    color: var(--secondary-color);
    font-size: 1.5em;
    text-shadow: 0px 0px 10px var(--secondary-color);
    animation-name: neon-change-effect-2;
    animation-iteration-count: infinite;
    animation-duration: 3s;

    @keyframes neon-change-effect-2 {
      10% {
        color: var(--white);
        text-shadow: 0px 0px 10px var(--white);
      }
      50% {
        color: var(--orange);
        text-shadow: 0px 0px 10px var(--orange);
      }
    }
  }

  /*Desktop*/
  @media ${devices.laptop} {
    display: block;
  }
`;

export const Illustration = styled.img`
  /*Phone and tablet */
  display: none;

  @media screen and (min-width: 1600px) {
    display: block;
    position: absolute;
    top: 8em;
    left: 5em;
    animation-name: vibrate-illustration;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    animation-direction: alternate-reverse;

    @keyframes vibrate-illustration {
      from {
        transform: translateY(-1em);
      }
      to {
        transform: translateY(1em);
      }
    }
  }
`;

export const IllustrationTwo = styled.img`
  /*Phone and tablet */
  display: none;

  @media screen and (min-width: 1600px) {
    display: block;
    position: absolute;
    top: 15em;
    right: 5em;
    animation-name: rotate-illustration;
    animation-iteration-count: infinite;
    animation-duration: 2s;

    @keyframes rotate-illustration {
      50% {
        transform: rotate(180deg);
      }
    }
  }
`;
