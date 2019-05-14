import React from "react";
import styled from "@emotion/styled";

export const Header = styled.div`
  /* NOTE: {} でスタイルを囲まないと autoprefixer がエラーを吐くため */
  & {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 0;
  }
`;

export const WeekTitle = styled.abbr`
  color: gray;
`;

export const Week = styled.div`
  /* NOTE: {} でスタイルを囲まないと autoprefixer がエラーを吐くため */
  & {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto auto;
    grid-auto-flow: row;
    grid-gap: 2px 5px;
  }
`;

export const DayTitle = styled.div`
  color: gray;
  font-size: 0.75rem;
  grid-row-start: 1;
  text-align: right;
  margin: 0;
`;

export const DayCell = styled.div`
  display: contents;
  background-color: #ddd;
`;

export const Event = styled.div`
  background-color: ${props => props.color};
  border-radius: 4px;
  grid-column-start: ${props => props.start};
  grid-column-end: span ${props => props.end};
`;
