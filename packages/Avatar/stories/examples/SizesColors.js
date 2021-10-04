import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Avatar from "../../src";
import Heading from "../../../Heading/src";

const text = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export default () => (
  <Story>
    <Heading level={3}>Colors</Heading>
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {text.map(text => (
        <div style={{ margin: "1em" }} key={text}>
          <Avatar>{text}</Avatar>
        </div>
      ))}
    </div>
    <div>
      <Heading level={3}>Sizes and Shapes</Heading>
      <Heading level={5}>Square (default)</Heading>
      <table cellPadding="5">
        {[Avatar.types.size.MEDIUM, Avatar.types.size.LARGE].map(size => (
          <tr>
            <td>{size}:</td>
            <td>
              <Avatar backgroundColor="#004A94" color="white" size={size}>
                W
              </Avatar>
            </td>
            <td>
              <Avatar backgroundColor="#004A94" color="white" size={size}>
                Ww
              </Avatar>
            </td>
            <td>
              <Avatar backgroundColor="#004A94" color="white" size={size}>
                WW
              </Avatar>
            </td>
            <td>
              <Avatar backgroundColor="#004A94" color="white" size={size}>
                <CalendarIcon />
              </Avatar>
            </td>
          </tr>
        ))}
      </table>
    </div>
    <div>
      <Heading level={5}>Round</Heading>
      <table cellPadding="5">
        {[Avatar.types.size.SMALL, Avatar.types.size.MEDIUM, Avatar.types.size.LARGE].map(size => (
          <tr>
            <td>{size}:</td>
            <td>
              <Avatar isRound backgroundColor="#004A94" color="white" size={size}>
                W
              </Avatar>
            </td>
            <td>
              <Avatar isRound backgroundColor="#004A94" color="white" size={size}>
                Ww
              </Avatar>
            </td>
            <td>
              <Avatar isRound backgroundColor="#004A94" color="white" size={size}>
                WW
              </Avatar>
            </td>
            <td>
              <Avatar isRound backgroundColor="#004A94" color="white" size={size}>
                <CalendarIcon />
              </Avatar>
            </td>
          </tr>
        ))}
      </table>
    </div>
  </Story>
);
