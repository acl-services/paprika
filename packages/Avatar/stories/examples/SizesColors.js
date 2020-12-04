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
          return (
            <div style={{ margin: "1em" }} key={text}>
              <Avatar>{text}</Avatar>
            </div>
          );
        })}
      </div>
      <div>
        <Heading level={3}>Sizes and Shapes</Heading>
        <Heading level={5}>Square</Heading>
        <Avatar backgroundColor="navy" color="white" size={Avatar.types.size.SMALL}>
          Small Square
        </Avatar>
        &nbsp;
        <Avatar backgroundColor="navy" color="white" size={Avatar.types.size.MEDIUM}>
          Medium Square
        </Avatar>
        <Heading level={5}>Round</Heading>
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.SMALL}>
          Small Round
        </Avatar>
        &nbsp;
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.MEDIUM}>
          Medium Round
        </Avatar>
        &nbsp;
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.LARGE}>
          Large Round
        </Avatar>
      </div>
    </Story>
  );
};
