import React from "react";
import { ImageOption } from "../stories.styles";
import ListBox from "../../src";
import { images } from "../fixtures/images";

const options = [
  "Punisher",
  "Catwoman",
  "Venom",
  "Thunderbolts",
  "Deadpool",
  "Spawn",
  "Wolverine",
  "Black Widow",
  "Hawkeye",
  "Scarlet Witch, ",
];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

export const Basic = () => <ListBox>{renderOptions()}</ListBox>;

export const BasicWithEmptyOption = () => (
  <ListBox>
    <ListBox.Option label="">&nbsp;</ListBox.Option>
    {renderOptions()}
  </ListBox>
);

export const BasicInlineDisplay = () => <ListBox isInline>{renderOptions()}</ListBox>;

export const BasicIsDisabled = () => <ListBox isDisabled>{renderOptions()}</ListBox>;

export const BasicPreselectedOption = () => (
  <ListBox>
    <ListBox.Option isSelected>Loki</ListBox.Option>
    {renderOptions()}
  </ListBox>
);

export const BasicIsInlineDisable = () => (
  <ListBox isDisabled isInline>
    {renderOptions()}
  </ListBox>
);

export const BasicOptionDisabled = () => (
  <ListBox isInline>
    {renderOptions()}
    <ListBox.Option isDisabled>Loki</ListBox.Option>
    <ListBox.Option isDisabled>Odin</ListBox.Option>
  </ListBox>
);

export const HasNotClearButton = () => <ListBox hasClearButton={false}>{renderOptions()}</ListBox>;

export const Footer = () => (
  <ListBox>
    {renderOptions()}
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

export const Checkboxes = () => (
  <React.Fragment>
    <p>Default option checker when is single select</p>
    <ListBox>
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Carnage</ListBox.Option>
    </ListBox>
    <p>Default option checker when is multi select</p>
    <ListBox isMulti>
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Carnage</ListBox.Option>
    </ListBox>
    <p>To remove the checkbox simply return a falsy value on the renderCheckbox methdod</p>
    <ListBox
      isMulti
      renderCheckbox={() => null}
      zIndex={10000}
      getScrollContainer={() => document.querySelector("#root > div")}
    >
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Carnage</ListBox.Option>
    </ListBox>
    <p>You have access to the current state of the option so you could have a third state</p>
    <ListBox
      isMulti
      renderCheckbox={(isChecked, index, state) => {
        if (state.options[index].isDisabled) {
          return `🔒`;
        }

        return isChecked ? "😇" : "😢";
      }}
      zIndex={10000}
      getScrollContainer={() => document.querySelector("#root > div")}
    >
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option isDisabled>Venom</ListBox.Option>
      <ListBox.Option>Carnage</ListBox.Option>
    </ListBox>
  </React.Fragment>
);

export const WithCustomCheckers = () => (
  <ListBox
    renderCheckbox={isChecked => {
      return isChecked ? "✅" : "🙅‍";
    }}
  >
    {renderOptions()}
  </ListBox>
);

export const WithGroups = () => (
  <ListBox>
    <ListBox.Group groupId="antiheroes" label="Anti-Heroes">
      <ListBox.Option>Punisher</ListBox.Option>
      <ListBox.Option>Catwoman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Thunderbolts</ListBox.Option>
      <ListBox.Option>Suicide Squad</ListBox.Option>
      <ListBox.Option>Deadpool</ListBox.Option>
      <ListBox.Option>Spawn</ListBox.Option>
      <ListBox.Option>Wolverine</ListBox.Option>
    </ListBox.Group>
    <ListBox.Group groupId="villians" label="Villians">
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
