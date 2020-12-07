import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Avatar from "../../src";
import { getInitialsFromText } from "../../src/helpers";

const text = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

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
        <Heading level={5}>Square (default)</Heading>
        <Avatar backgroundColor="navy" color="white" size={Avatar.types.size.MEDIUM}>
          M
        </Avatar>
        &nbsp;
        <Avatar backgroundColor="navy" color="white" size={Avatar.types.size.LARGE}>
          {getInitialsFromText("LARGE")}
        </Avatar>
        <Heading level={5}>Round</Heading>
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.SMALL}>
          {getInitialsFromText("Small round", 2)}
        </Avatar>
        &nbsp;
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.MEDIUM}>
          Mr
        </Avatar>
        &nbsp;
        <Avatar isRound backgroundColor="navy" color="white" size={Avatar.types.size.LARGE}>
          Lr
        </Avatar>
      </div>
    </Story>
  );
};
