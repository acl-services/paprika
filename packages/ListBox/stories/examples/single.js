import React from "react";
import { ImageOption } from "../stories.styles";
import ListBox from "../../src";
import { images } from "../fixtures/images";

import * as characters from "../fixtures/characters";

export const Basic = () => (
  <ListBox>
    {characters.villians}
    {characters.antiHeroes}
    {characters.heroes}
  </ListBox>
);

export const BasicWithEmptyOption = () => (
  <ListBox>
    <ListBox.Option label="">&nbsp;</ListBox.Option>
    {characters.heroes}
    {characters.villians}
    {characters.antiHeroes}
  </ListBox>
);

export const BasicInlineDisplay = () => <ListBox isInline>{characters.heroes}</ListBox>;

export const BasicIsDisabled = () => <ListBox isDisabled>{characters.heroes}</ListBox>;

export const BasicPreselectedOption = () => (
  <ListBox>
    <ListBox.Option isSelected>Loki</ListBox.Option>
    {characters.heroes}
  </ListBox>
);

export const BasicIsInlineDisable = () => (
  <ListBox isDisabled isInline>
    {characters.heroes}
  </ListBox>
);

export const BasicOptionDisabled = () => (
  <ListBox isInline>
    <ListBox.Option key="loki" isDisabled>
      Loki
    </ListBox.Option>
    <ListBox.Option key="odin" isDisabled>
      Odin
    </ListBox.Option>
    {characters.heroes}
  </ListBox>
);

export const HasNoClearButton = () => (
  <ListBox>
    <ListBox.Popover hasClearButton={false} />
    {characters.heroes}
  </ListBox>
);

export const Footer = () => (
  <ListBox>
    {characters.heroes}
    <ListBox.Footer
      onClickAccept={(index, options) => {
        if (index) {
          console.log(options[index]);
        }
      }}
    />
  </ListBox>
);

export const CustomChildrenInline = () => (
  <ListBox height={320}>
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
);

export const WithGroups = () => (
  <ListBox>
    <ListBox.Divider>Anti-Heroes</ListBox.Divider>
    {characters.antiHeroes}
    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}
    <ListBox.Divider>Heroes</ListBox.Divider>
    {characters.heroes}
  </ListBox>
);

export const WithPreventDefaultOnSelect = () => (
  <ListBox>
    {characters.villians}
    <ListBox.RawItem>
      <em>Show More</em>
    </ListBox.RawItem>
  </ListBox>
);

export const WithContainerScroll = () => (
  <React.Fragment>
    <p style={{ height: 400 }} />
    <ListBox getScrollContainer={() => document.querySelector("#root > div")}>{characters.heroes}</ListBox>
    <p style={{ height: 1000 }} />
  </React.Fragment>
);

export const WithCustomZIndex = () => (
  <ListBox>
    <ListBox.Popover zIndex={10000}>Anti-Heroes</ListBox.Popover>
    {characters.antiHeroes}
  </ListBox>
);
