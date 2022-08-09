import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  gap: 1em;
  overflow-x: auto;

  @media ${devices.laptop} {
    gap: 2em;
    overflow: hidden;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  box-shadow: 0px 0px 10px 5px
    ${(props) =>
      props.category === "highSchool"
        ? "var(--blue-2)"
        : props.category === "college"
        ? "var(--orange)"
        : "var(--secondary-color)"};
  table-layout: fixed;
  thead {
    border: none;
    background-color: ${(props) =>
      props.category === "highSchool"
        ? "var(--blue-2)"
        : props.category === "college"
        ? "var(--orange)"
        : "var(--secondary-color)"};
    tr {
      th {
        padding: 0.5em;
        text-align: center;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 6em;
      }
    }
  }
  tbody {
    border: none;
    background-color: var(--strong-gray-opacity);
    tr {
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        background-color: var(--extra-strong-gray-opacity-2);
      }
      td {
        padding: 0.5em;
        text-align: center;
        font-weight: 200;
        font-size: 0.875em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 6em;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.25em;
  font-weight: normal;
  text-align: center;
`;
