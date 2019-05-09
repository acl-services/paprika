import React from "react";
import { ImageOption } from "../stories.styles";
import ListBox from "../../src";
import { images } from "../fixtures/images";

import * as characters from "../fixtures/characters";

export const Basic = () => <ListBox>{characters.heroes}</ListBox>;

export const BasicWithEmptyOption = () => (
  <ListBox>
    <ListBox.Option label="">&nbsp;</ListBox.Option>
    {characters.heroes}
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
    {characters.heroes}
    <ListBox.Option isDisabled>Loki</ListBox.Option>
    <ListBox.Option isDisabled>Odin</ListBox.Option>
  </ListBox>
);

export const HasNotClearButton = () => (
  <ListBox>
    <ListBox.Popover hasClearButton={false} />
    {characters.heroes}
  </ListBox>
);

export const WithFilterInline = () => (
  <ListBox hasFilter isInline>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

// ->
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
    {characters.antiheroes}
    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}
    <ListBox.Divider>Heroes</ListBox.Divider>
    {characters.heroes}
  </ListBox>
);

export const OptionProp = () => (
  <ListBox>
    <ListBox.Option label="hero">Punisher</ListBox.Option>
    <ListBox.Option value="hero">Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const WithPreventDefaultOnSelect = () => (
  <ListBox>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option preventDefaultOnSelect>
      <em>Show More</em>
    </ListBox.Option>
  </ListBox>
);

export const WithContainerScroll = () => (
  <React.Fragment>
    <p style={{ height: 400 }} />
    <ListBox getScrollContainer={() => document.querySelector("#root > div")}>
      <ListBox.Option>Punisher</ListBox.Option>
      <ListBox.Option>Catwoman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Thunderbolts</ListBox.Option>
      <ListBox.Option>Deadpool</ListBox.Option>
      <ListBox.Option>Spawn</ListBox.Option>
      <ListBox.Option>Wolverine</ListBox.Option>
      <ListBox.Option>QuickSilver</ListBox.Option>
      <ListBox.Option>Ironman</ListBox.Option>
      <ListBox.Option>Spiderman</ListBox.Option>
    </ListBox>
    <p style={{ height: 1000 }} />
  </React.Fragment>
);

export const WithPreventTriggerBlur = () => (
  <ListBox preventOnBlurForTriggerListBox>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const WithOnChange = () => (
  <ListBox
    onChange={(i, options, evntype) => {
      console.log("hello", i, options, evntype);
    }}
  >
    <ListBox.Option value="punish">Punisher</ListBox.Option>
    <ListBox.Option value="cat">Catwoman</ListBox.Option>
    <ListBox.Option value="spidey">Venom</ListBox.Option>
  </ListBox>
);

export const WithZIndexAttribute = () => (
  <ListBox zIndex={10000}>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
  </ListBox>
);

export const WithCustomFilter = () => (
  <ListBox
    hasFilter
    filter={e => {
      console.log("here", e);

      const filterInp = e.search;

      const listboxOptionsToFilter = Object.values(e.state.options);

      const filteredGroupArr = listboxOptionsToFilter.filter(function(d) {
        return d.groupLabel.toLowerCase().includes(filterInp.toLowerCase());
      });
      const labelFilteredOptions = filteredGroupArr.map(obj => (
        <ListBox.Option key={obj.id}>{obj.label}</ListBox.Option>
      ));

      console.log(labelFilteredOptions);

      return <ListBox>labelFilteredOptions</ListBox>;
    }}
  >
    <ListBox.Group groupId="villans" label="Villans">
      <ListBox.Option>The Joker</ListBox.Option>
      <ListBox.Option>Darth Vader</ListBox.Option>
      <ListBox.Option>Hannibal Lecter</ListBox.Option>
      <ListBox.Option>Lord Voldemort</ListBox.Option>
      <ListBox.Option>Freddy Krueger</ListBox.Option>
      <ListBox.Option>Palpatine</ListBox.Option>
      <ListBox.Option>Agent Smith</ListBox.Option>
    </ListBox.Group>
    <ListBox.Group groupId="heroes" label="Heroes">
      <ListBox.Option>Black Panther</ListBox.Option>
      <ListBox.Option>Wonder Woman</ListBox.Option>
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option>The Incredibles</ListBox.Option>
      <ListBox.Option>Thor</ListBox.Option>
      <ListBox.Option>Batman</ListBox.Option>
      <ListBox.Option>Iron Man</ListBox.Option>
      <ListBox.Option>Doctor Strange</ListBox.Option>
    </ListBox.Group>
  </ListBox>
);

export const WithOnClick = () => (
  <ListBox isMulti>
    <ListBox.Option
      preventDefaultOnSelect
      onClick={() => {
        alert("bla bal");
      }}
    >
      Punisher
    </ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
  </ListBox>
);

export const WithOnSelected = () => (
  <ListBox
    isMulti
    zIndex={10000}
    onDeselected={() => {
      alert("yeet");
    }}
  >
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
  </ListBox>
);
