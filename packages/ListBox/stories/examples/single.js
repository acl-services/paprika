import React from "react";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
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

export const BasicWithImplicitAll = () => (
  <ListBox hasImplicitAll placeholder="All">
    {characters.villians}
    {characters.antiHeroes}
    {characters.heroes}
  </ListBox>
);

export const Dividers = () => (
  <ListBox>
    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}
    <ListBox.Divider>Anti Heroes</ListBox.Divider>
    {characters.antiHeroes}
    <ListBox.Divider>Heroes</ListBox.Divider>
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

export const IsInline = () => (
  <ListBox isInline>
    <ListBox.Popover zIndex={10000}>Anti-Heroes</ListBox.Popover>
    {characters.antiHeroes}
  </ListBox>
);

const styles = {
  container: css`
    padding: 12px;
  `,
  button: css`
    font-size: 16px;
    margin: 2px;
    padding: 8px;
    ${({ isSelected }) => {
      return isSelected ? `background: ${tokens.color.blue}; color: ${tokens.color.white}` : "";
    }}
  `,
};

export const ControlledIsSelected = () => {
  const [options, setOptions] = React.useState(characters.antiHeroesRaw);

  const handleClickItem = index => () => {
    setOptions(options => {
      const cloneList = options.slice(0);

      // setting all options on false
      cloneList.forEach(item => {
        const it = item;
        it.isSelected = false;
      });

      // only setting the option to be selected
      // index could be null if the user clear the listbox.
      if (index !== null) {
        cloneList[index].isSelected = true;
      }

      return cloneList;
    });
  };

  function handleChange(activeOptionIndex) {
    /** this will be trigger when a uncontrolled change occurred inside the listbox
    let's sync our local state with the one on the listbox so we can turn on / off
    the buttons */
    handleClickItem(activeOptionIndex)();
  }

  return (
    <React.Fragment>
      Click on any button to controlled the Listbox:
      <div css={styles.container}>
        {options.map((item, index) => (
          <button
            css={styles.button}
            type="button"
            key={item.label}
            isSelected={options[index].isSelected}
            onClick={handleClickItem(index)}
            data-pka-anchor={`button_${index}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr />
      <ListBox isInline onChange={handleChange}>
        {options.map(item => {
          return (
            <ListBox.Option key={item.label} isSelected={item.isSelected}>
              {item.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </React.Fragment>
  );
};

export const DefaultIsSelected = () => {
  return (
    <ListBox
      isInline
      onChange={activeOptionIndex => {
        console.log(activeOptionIndex);
      }}
    >
      {characters.antiHeroesRaw.map((item, index) => {
        return (
          <ListBox.Option key={item.label} defaultIsSelected={index === 4}>
            {item.label}
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
};

export const WithListBoxBox = () => {
  return (
    <ListBox>
      <ListBox.Box className="my-custom-className" style={{ border: "1px solid red" }} />
      {characters.antiHeroesRaw.map((item, index) => {
        return (
          <ListBox.Option key={item.label} defaultIsSelected={index === 4}>
            {item.label}
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
};

export const OnChange = () => {
  const refListBox = React.useRef(null);
  const [change, setChange] = React.useState(null);
  function handleChange(activeOptionIndex, options) {
    console.log(change);
    setChange(() => {
      return options[activeOptionIndex].label;
    });
  }

  return (
    <>
      {change}
      <hr />
      <ListBox ref={refListBox} isInline onChange={handleChange}>
        {characters.antiHeroesRaw.map(item => {
          return (
            <ListBox.Option value={item.label} key={item.label}>
              {item.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </>
  );
};
