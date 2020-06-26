import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Avatar from "../../src";

const text = [
  "apple",
  "box",
  "cake",
  "duck",
  "earth",
  "flower",
  "glasses",
  "hair",
  "image",
  "jellybeans",
  "kayak",
  "lamp",
];

export default () => {
  return (
    <Story>
      <Heading level={3}>Colors</Heading>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {text.map(text => {
          const initial = text.charAt(0).toUpperCase();
          return (
            <div style={{ margin: "1em" }} key={text}>
              <Avatar>{initial}</Avatar>
            </div>
          );
        })}
      </div>
      <div>
        <Heading level={3}>Sizes</Heading>
        <Avatar backgroundColor="black" color="white" size="small">
          S
        </Avatar>
        <Avatar backgroundColor="black" color="white" size="medium">
          M
        </Avatar>
      </div>
    </Story>
  );
};
