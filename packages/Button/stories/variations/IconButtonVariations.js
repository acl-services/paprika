import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";
import Popover from "@paprika/popover";
import PlusIcon from "@paprika/icon/lib/Add";
import Button from "../../src/Button";

const renderTriggerWithTooltip = () => {
  const content = "Tooltip text example";
  return (
    <Popover align="top" isDark isEager offset={8} shouldKeepFocus>
      <Popover.Trigger tabIndex="-1">
        <PlusIcon />
      </Popover.Trigger>
      {content && (
        <>
          <Popover.Content key={content}>
            <Popover.Card>{content}</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </>
      )}
    </Popover>
  );
};

function clickHandler() {
  action("Clicked a button")();
}

export default function IconButtonVariations() {
  return (
    <>
      <StoryHeading>Icon Button</StoryHeading>
      <Gap.Small />
      <Button.Icon onClick={clickHandler} size="small">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler}>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} size="large">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="flat">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} icon="🐐" kind="secondary" size="small">
        <span role="img" aria-label="Llama">
          🦙
        </span>
      </Button.Icon>
      <Gap.Small />
      <Button.Icon onClick={clickHandler} isDisabled>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} isDisabled kind="minor">
        <InfoIcon />
      </Button.Icon>
      <Gap.Small />
      <Button.Icon onClick={clickHandler}>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} isDisabled>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="primary">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="primary" isDisabled>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="link">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="link" isDisabled>
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor">
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor" isDisabled>
        <InfoIcon />
      </Button.Icon>
      <Gap.Inline />
      <Gap.Inline />
      <Gap.Inline />
      <Button.Icon
        onClick={clickHandler}
        kind="minor"
        css={`
          color: ${tokens.color.gold};
        `}
      >
        <InfoIcon />
      </Button.Icon>
      <Button.Icon
        onClick={clickHandler}
        kind="minor"
        css={`
          color: ${tokens.color.gold};
        `}
        isDisabled
      >
        <InfoIcon />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor">
        <InfoIcon
          css={`
            color: ${tokens.color.gold};
          `}
        />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor" isDisabled>
        <InfoIcon
          css={`
            color: ${tokens.color.gold};
          `}
        />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor">
        <InfoIcon color={tokens.color.gold} />
      </Button.Icon>
      <Button.Icon onClick={clickHandler} kind="minor" isDisabled>
        <InfoIcon color={tokens.color.gold} />
      </Button.Icon>
      <Gap.Small />
      <StoryHeading level={3}>With tooltip</StoryHeading>
      <Button.Icon>{renderTriggerWithTooltip()}</Button.Icon>
    </>
  );
}
