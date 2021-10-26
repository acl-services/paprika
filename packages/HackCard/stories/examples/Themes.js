import React from "react";
import { ThemeProvider, css } from "styled-components";
import Card from "../../src";

const sizes = {
  small: "10px",
  medium: "14px",
  large: "18px",
};

const atlasCard = {
  Card: ({ size, isActive }) => css`
    background: #eee;
    color: ${isActive === true ? "#36b" : "#333"};
    font-size: ${sizes[size]};
    padding: 16px;
  `,
};

export default () => (
  <ThemeProvider theme={atlasCard}>
    <Card>YOLO flexitarian succulents</Card>
    <br />
    <Card isActive>YOLO flexitarian succulents</Card>
    <br />
    <Card size="large">Mumblecore hammock polaroid</Card>
  </ThemeProvider>
);
