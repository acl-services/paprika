import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Icon from "@paprika/icon";

const ExampleStory = () => (
  <Story
    css={`
      font-size: ${stylers.spacer(4)};
      color: ${tokens.color.purple};
      ${stylers.lineHeight(2)};

      svg:hover {
        background: ${tokens.color.blackLighten70};
        box-shadow: inset 0 0 0 1px ${tokens.border.color};
        color: ${tokens.color.black};
      }
    `}
  >
    <p>
      <span aria-label="plus" title="plus" role="img">
        <Icon.Add aria-hidden />
      </span>
      &nbsp;Lorem ipsum irony pop-up kale chips next level <Icon.Times color={tokens.textColor.icon} aria-hidden /> roof
      party copper mug try-hard <Icon.Refresh aria-label="cycle" title="cycle" role="img" /> put a bird on it. Adaptogen
      mumblecore yr mustache selfies <Icon.Search role="none" /> jean shorts listicle man braid VHS kitsch drinking
      vinegar polaroid unicorn&nbsp;
      <Icon.Trashbin
        aria-label="rubbish"
        role="presentation"
        size={stylers.spacer(7)}
        width={stylers.spacer(2)}
        height={stylers.spacer(2)}
        style={{
          verticalAlign: "middle",
        }}
      />
      , photo booth small batch poke.
    </p>
  </Story>
);

export default ExampleStory;
