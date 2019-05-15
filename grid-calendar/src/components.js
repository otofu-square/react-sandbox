import React from "react";
import styled from "@emotion/styled";

export const WeekHeader = styled.div`
  /* NOTE: {} でスタイルを囲まないと autoprefixer がエラーを吐くため */
  & {
    display: grid;
    grid-template: 1fr / repeat(7, 1fr);
  }
`;

export const WeekTitle = styled.abbr`
  color: gray;
`;

export const WeekRow = styled.div`
  /* NOTE: {} でスタイルを囲まないと autoprefixer がエラーを吐くため */
  & {
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(7, 1fr);
    grid-gap: 2px 5px;
  }
`;

export const DayTitle = styled.div`
  grid-row-start: 1;
  color: gray;
  font-size: 0.75rem;
  text-align: right;
  margin: 0;
`;

export const DayCell = styled.div`
  text-align: right;
  color: #ddd;
`;

export const Event = styled.div`
  background-color: ${props => props.color};
  border-radius: 4px;
  grid-column-start: ${props => props.start};
  grid-column-end: span ${props => props.end};
`;
