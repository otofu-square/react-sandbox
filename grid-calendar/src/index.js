import "core-js/stable";
import "regenerator-runtime/runtime";
import "./polyfill";

import styled from "@emotion/styled";
import React from "react";
import { render } from "react-dom";
import {
  WeekHeader,
  WeekTitle,
  WeekRow,
  Event,
  DayTitle,
  DayCell
} from "./components";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <WeekHeader>
        <WeekTitle>S</WeekTitle>
        <WeekTitle>M</WeekTitle>
        <WeekTitle>T</WeekTitle>
        <WeekTitle>W</WeekTitle>
        <WeekTitle>T</WeekTitle>
        <WeekTitle>F</WeekTitle>
        <WeekTitle>S</WeekTitle>
      </WeekHeader>
      <WeekRow>
        <DayCell>
          <DayTitle>1</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>2</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>3</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>4</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>5</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>6</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>7</DayTitle>
        </DayCell>
        <Event start={1} end={2} color="green">
          aaa
        </Event>
        <Event start={2} end={3} color="orange">
          bbb
        </Event>
        <Event start={4} end={3} color="skyblue">
          ccc
        </Event>
        <Event start={3} end={3} color="red">
          ddd
        </Event>
        <Event start={3} end={4} color="pink">
          eee
        </Event>
      </WeekRow>
      <WeekRow>
        <DayCell>
          <DayTitle>8</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>9</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>10</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>11</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>12</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>13</DayTitle>
        </DayCell>
        <DayCell>
          <DayTitle>14</DayTitle>
        </DayCell>
        <Event start={2} end={6} color="blue">
          fff
        </Event>
      </WeekRow>
    </StyledApp>
  );
}

const root = document.createElement("div");
document.body.append(root);

render(<App />, root);
