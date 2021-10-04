import React from "react";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import ListBox from "../../../src";
import * as characters from "../../fixtures/characters";

export const Inline = () => (
    <>
      <ListBox isInline>
        <ListBox.Filter hasClearButton />
        <ListBox.Divider key="divider-hero">Super Heros</ListBox.Divider>
        {characters.heroes}
        <ListBox.Divider key="divider-anti">Anti Heros</ListBox.Divider>
        {characters.antiHeroes}
        <ListBox.Divider key="divider-evil">The most evil super villians in the entire metaverse</ListBox.Divider>
        {characters.villians}
      </ListBox>
      <Gap />
      <CodeHeading>height=&quot;auto&quot;</CodeHeading>
      <ListBox isInline height="auto">
        <ListBox.Filter hasClearButton />
        <ListBox.Divider key="divider-hero">Super Heros</ListBox.Divider>
        {characters.heroes}
        <ListBox.Divider key="divider-anti">Anti Heros</ListBox.Divider>
        {characters.antiHeroes}
        <ListBox.Divider key="divider-evil">The most evil super villians in the entire metaverse</ListBox.Divider>
        {characters.villians}
      </ListBox>
    </>
  );
