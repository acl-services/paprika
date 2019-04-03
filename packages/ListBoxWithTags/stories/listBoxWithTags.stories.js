import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Tag from "@paprika/tag";
import { Frame } from "./stories.styles";
import ListBoxWithTags from "../index";

storiesOf("ListBoxWithTags", module).add("Basic", () => (
  <Frame>
    <ListBoxWithTags placeholder="Select your 🤩 anti-heroes">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </Frame>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Tags and filter", () => (
  <Frame>
    <ListBoxWithTags hasFilter placeholder="Select your 🤩 anti-heroes">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </Frame>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Tags and Footer", () => (
  <Frame>
    <ListBoxWithTags hasFilter placeholder="Select your 🤩 anti-heroes">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
      <ListBoxWithTags.Footer />
    </ListBoxWithTags>
  </Frame>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Tags filter and input for custom tags", () => (
  <Frame>
    <ListBoxWithTags hasFilter hasCustomTags placeholder="Select an anti-heroes or add your own 👩‍🎤">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option isSelected>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option isSelected>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </Frame>
));

const TagStyled = styled(Tag)`
  margin: 2px;
  background: #f60;
  color: #fff;
  box-sizing: border-box;
  position: relative;

  &:hover {
    background: rebeccapurple;
  }

  [role="button"] {
    border: 1px solid white;
    padding: 8px;
    border-radius: 4px;
    top: 12px;
  }

  ${props => {
    const hasFocusStyle = props.isTagActive ? `border: 3px solid #F90` : "";
    return `
      && {${hasFocusStyle}}
    `;
  }}
`;

storiesOf("ListBoxWithTags", module).add("ListBox With renderTag", () => (
  <Frame>
    <ListBoxWithTags
      hasFilter
      hasCustomTags
      renderTag={(option, props) => {
        return <TagStyled {...props}>{option.label}</TagStyled>;
      }}
      placeholder="Select an anti-heroes or add your own 👩‍🎤"
    >
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </Frame>
));

// Groups in ListBoxWithTags are not fully support it, unless you do it by controlled options
storiesOf("ListBoxWithTags", module).add("ListBox With Groups", () => (
  <Frame>
    <ListBoxWithTags hasCustomTags>
      <ListBoxWithTags.Group title="Good guys">
        <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
        <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
        <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      </ListBoxWithTags.Group>
      <ListBoxWithTags.Group title="Bad guys">
        <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
        <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
        <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      </ListBoxWithTags.Group>
    </ListBoxWithTags>
  </Frame>
));
