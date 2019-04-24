import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

import AddIcon from "@paprika/icon/Add";
import CloseIcon from "@paprika/icon/Times";
import RefreshIcon from "@paprika/icon/Refresh";
import SearchIcon from "@paprika/icon/Search";
import TrashIcon from "@paprika/icon/Trashbin";
import ArrowIcon from "@paprika/icon/ArrowRight";

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
        <AddIcon aria-hidden />
      </span>
      &nbsp;Lorem ipsum irony pop-up kale chips next level <CloseIcon color={tokens.textColor.icon} aria-hidden /> roof
      party copper mug try-hard <RefreshIcon aria-label="cycle" title="cycle" role="img" /> put a bird on it. Adaptogen
      mumblecore yr mustache selfies <SearchIcon role="none" /> jean shorts listicle man braid VHS kitsch drinking
      vinegar polaroid unicorn&nbsp;
      <TrashIcon
        aria-label="rubbish"
        title="garbage"
        role="presentation"
        size={stylers.spacer(7)}
        width={stylers.spacer(2)}
        height={stylers.spacer(2)}
        style={{
          verticalAlign: "middle",
        }}
      />
      , photo booth small batch poke. <ArrowIcon />
    </p>
  </Story>
);

export default ExampleStory;
