import React from "react";
import { storiesOf } from "@storybook/react";
import ListBoxWithTags from "../index";

storiesOf("ListBoxWithTags", module).add("Basic", () => (
  <React.Fragment>
    <ListBoxWithTags placeholder="Select your 🤩 anti-heroes">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </React.Fragment>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Tags and filter", () => (
  <React.Fragment>
    <ListBoxWithTags hasFilter placeholder="Select your 🤩 anti-heroes">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </React.Fragment>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Tags filter and input for custom tags", () => (
  <React.Fragment>
    <ListBoxWithTags hasFilter hasCustomTags placeholder="Select an anti-heroes or add your own 👩‍🎤">
      <ListBoxWithTags.Option>Punisher</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Catwoman</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Venom</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Thunderbolts</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Deadpool</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Spawn</ListBoxWithTags.Option>
      <ListBoxWithTags.Option>Wolverine</ListBoxWithTags.Option>
    </ListBoxWithTags>
  </React.Fragment>
));

storiesOf("ListBoxWithTags", module).add("ListBox With Some Tags filter and input for custom tags", () => (
  <React.Fragment>
    <ListBoxWithTags hasFilter hasCustomTags placeholder="Select an anti-heroes or add your own 👩‍🎤">
      {[...Array(100).keys()].map(index => (
        <ListBoxWithTags.Option key={index}>{`Paprika_${index}`}</ListBoxWithTags.Option>
      ))}
    </ListBoxWithTags>
  </React.Fragment>
));
