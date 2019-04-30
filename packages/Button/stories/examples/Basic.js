import React from "react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { Rule } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import PlusIcon from "@paprika/icon/lib/Add";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import { ButtonStory } from "../Button.stories.styles";
import Button from "../../src";

const DarkBackground = styled.span`
  background: ${tokens.color.black};
  display: inline-block;
  padding: ${tokens.space};
  margin-left: ${tokens.space};
`;

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => (
  <ButtonStory>
    <p>
      <Button a11yText="ceci n'est pas un bouton" data-qa-anchor="test-button" onClick={clickHandler}>
        default button
      </Button>
      <Button onClick={clickHandler} isDisabled>
        disabled button
      </Button>
    </p>
    <Rule />
    <p>
      <Button isSubmit onClick={clickHandler}>
        submit
      </Button>
    </p>
    <p>
      <Button onClick={clickHandler}>
        long button lumbersexual authentic <br /> vegan vaporware scenester humblebrag
      </Button>
    </p>
    <p>
      <Button isFullWidth onClick={clickHandler}>
        full width
      </Button>
    </p>
    <Rule />
    <p>
      <Button size="small" onClick={clickHandler}>
        small
      </Button>
      <Button onClick={clickHandler}>medium</Button>
      <Button size="large" onClick={clickHandler}>
        large
      </Button>
    </p>
    <Rule />
    <p>
      <Button onClick={clickHandler}>default</Button>
      <Button kind="primary" onClick={clickHandler}>
        primary
      </Button>
      <Button kind="secondary" onClick={clickHandler}>
        secondary
      </Button>
      <Button kind="destructive" onClick={clickHandler}>
        destructive
      </Button>
      <Button kind="flat" onClick={clickHandler}>
        flat
      </Button>
      <Button kind="minor" onClick={clickHandler}>
        minor
      </Button>
      <Button kind="link" onClick={clickHandler}>
        link
      </Button>
    </p>
    <Rule />
    <p>
      <Button isSemantic={false} size="large" kind="primary" isActive onClick={clickHandler}>
        raw large active primary
      </Button>
      <Button isSemantic={false} isDisabled onClick={clickHandler}>
        raw default disabled
      </Button>
      <Button isSemantic={false} kind="link" size="small" onClick={clickHandler}>
        raw small link
      </Button>
    </p>
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
        {"🦙"}
      </Button.Icon>
    </p>
    <Rule />
    <p>
      <Button onClick={clickHandler} icon={<PlusIcon />} size="small">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />}>
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} size="large">
        with icon
      </Button>
    </p>
    <Rule />
    <p>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="minor">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="link">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="flat">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="primary">
        with icon
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} kind="primary" isDisabled>
        with icon
      </Button>
    </p>
    <Rule />
    <p>
      <Button onClick={clickHandler} icon={<PlusIcon />} isPending>
        Pending...
      </Button>
      <Button onClick={clickHandler} icon={<PlusIcon />} isDropdown>
        Menu
      </Button>
    </p>
    <Rule />
    <p>
      <Button.Close onClick={clickHandler} size="small" />
      <Button.Close onClick={clickHandler} />
      <Button.Close onClick={clickHandler} size="large" />
      <DarkBackground>
        <Button.Close onClick={clickHandler} isDark a11yText="dark close" />
      </DarkBackground>
    </p>
    {[...Array(34).keys()].map(index => (
      <br key={index} />
    ))}
    ...fin.
  </ButtonStory>
);

export default ExampleStory;
