import Button from "@paprika/button";
import Card from "../../src";
import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { ThemeProvider, css } from "styled-components";

const sizes = {
  small: "10px",
  medium: "14px",
  large: "18px",
};

const atlasCard = {
  Card: ({ size }) => css`
    border-radius: 6px;
    -webkit-border-start: 6px solid #5d7599;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 7%), 0px 7px 17px rgb(0 0 0 / 10%);
    background: #fff;
    font-size: ${size === "large" ? "18px" : "14px"};
    padding: 16px;
  `,
};

export default () => (
  <>
    <Card size="large" theme={atlasCard}>
      Board Meeting
      <p>October 6, 2021</p>
      <Button>Agenda</Button>
    </Card>
  </>
);
