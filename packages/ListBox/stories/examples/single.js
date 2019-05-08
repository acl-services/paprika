import React from "react";
import { ImageOption } from "../stories.styles";
import ListBox from "../../src";
import { images } from "../fixtures/images";

export const Basic = () => (
  <ListBox>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
    <ListBox.Option>Black Widow</ListBox.Option>
    <ListBox.Option>Hawkeye</ListBox.Option>
    <ListBox.Option>Scarlet Witch</ListBox.Option>
  </ListBox>
);

export const BasicWithEmptyOption = () => (
  <ListBox>
    <ListBox.Option label="">&nbsp;</ListBox.Option>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
    <ListBox.Option>Black Widow</ListBox.Option>
    <ListBox.Option>Hawkeye</ListBox.Option>
    <ListBox.Option>Scarlet Witch</ListBox.Option>
  </ListBox>
);

export const BasicOptionOnClick = () => (
  <ListBox>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Punisher
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(`This will not be selected  ${options[index].label}`);
      }}
    >
      Catwoman
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Venom
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Thunderbolts
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Deadpool
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Spawn
    </ListBox.Option>
    <ListBox.Option
      onClick={(index, options) => {
        alert(options[index].label);
      }}
    >
      Wolverine
    </ListBox.Option>
  </ListBox>
);

export const BasicInlineDisplay = () => (
  <ListBox isInline>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const BasicIsDisabled = () => (
  <ListBox isDisabled>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const BasicPreselectedOption = () => (
  <ListBox>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option isSelected>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const BasicIsInlineDisable = () => (
  <ListBox isDisabled isInline>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const BasicOptionDisabled = () => (
  <ListBox isInline>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option isDisabled>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option isDisabled>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const WithFilter = () => (
  <ListBox hasFilter>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
  </ListBox>
);

export const HasNotClearButton = () => (
  <ListBox hasClearButton={false}>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
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

export const Footer = () => (
  <ListBox hasFilter>
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
    <ListBox.Footer
      onClickAccept={(index, options) => {
        if (index) {
          console.log(options[index]);
        }
      }}
    />
  </ListBox>
);

export const WithFilterAndNodesAsChildren = () => (
  <ListBox hasFilter height={300}>
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
);

export const FilterCustomChildrenInline = () => (
  <ListBox hasFilter isInline height={320}>
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
);

export const CustomRenderTrigger = () => (
  <ListBox
    renderTrigger={(state, dispatch, { getDOMAttributesForListBoxButton }) => (
      <button
        onClick={() => {
          dispatch({ type: "OPEN_POPOVER" });
        }}
        type="button"
        {...getDOMAttributesForListBoxButton()}
        ref={state.refTrigger}
      >
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Toggle Listbox
      </button>
    )}
  >
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
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
    hasFilter
    renderCheckbox={isChecked => {
      return isChecked ? "✅" : "🙅‍";
    }}
  >
    <ListBox.Option>Punisher</ListBox.Option>
    <ListBox.Option>Catwoman</ListBox.Option>
    <ListBox.Option>Venom</ListBox.Option>
    <ListBox.Option>Thunderbolts</ListBox.Option>
    <ListBox.Option>Deadpool</ListBox.Option>
    <ListBox.Option>Spawn</ListBox.Option>
    <ListBox.Option>Wolverine</ListBox.Option>
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
