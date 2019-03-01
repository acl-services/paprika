import React from "react";
import { storiesOf } from "@storybook/react";
import ListBoxWithTags from "../ListBoxWithTags";

storiesOf("ListBox / compose", module).add("ListBox With Tags", () => (
  <React.Fragment>
    <ListBoxWithTags placeholder="Select your 🤩 anti heroes">
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
