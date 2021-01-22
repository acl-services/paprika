import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";
import Button from "../../src/Button";

function clickHandler() {
  action("Clicked a button")();
}

export default function IconButtonVariations() {
  return (
    <>
      <StoryHeading level={1}>
        <code>&lt;Button.Icon&gt;</code>
      </StoryHeading>
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
    </>
  );
}
