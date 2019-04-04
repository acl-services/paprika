import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as Icon from "@paprika/icon";

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
      <Icon.Add />
      Lorem ipsum irony pop-up kale chips next level <Icon.Times color={tokens.textColor.icon} /> roof party copper mug
      try-hard <Icon.Refresh /> put a bird on it. Adaptogen mumblecore yr mustache selfies <Icon.Search /> jean shorts
      listicle man braid VHS kitsch drinking vinegar polaroid unicorn{" "}
      <Icon.Trashbin
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
