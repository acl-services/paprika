import React from "react";
import { action } from "@storybook/addon-actions";
import { Rule, Gap } from "storybook/assets/styles/common.styles";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";
import Popover from "@paprika/popover";
import PlusIcon from "@paprika/icon/lib/Add";
import Heading from "@paprika/heading";
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
      <Heading level={1} displayLevel={2} isLight>
        Variations of Icon Button
      </Heading>
      <Rule />
      <p>
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
      </p>
      <Rule />
      <p>
        <Button.Icon onClick={clickHandler} isDisabled>
          <InfoIcon />
        </Button.Icon>
        <Button.Icon onClick={clickHandler} isDisabled kind="minor">
          <InfoIcon />
        </Button.Icon>
      </p>
      <Rule />
      <p>
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
      </p>
      <Rule />
      <p>
        <div>Button Icon with tooltip</div>
        <Button.Icon>{renderTriggerWithTooltip()}</Button.Icon>
      </p>
    </>
  );
}
