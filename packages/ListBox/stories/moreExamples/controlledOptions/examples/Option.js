import React from "react";
import Button from "@paprika/button";
import ListBox from "../../../../src";

const options = [
  { key: 1, isDisabled: false, isHidden: false, label: "unicorn", value: 1 },
  { key: 2, isDisabled: false, isHidden: false, label: "puke rainbows", value: 1 },
  { key: 3, isDisabled: false, isHidden: false, label: "multicolors", value: 1 },
  { key: 4, isDisabled: false, isHidden: false, label: "red", value: 1 },
  { key: 5, isDisabled: false, isHidden: false, label: "blue", value: 1 },
  { key: 6, isDisabled: false, isHidden: false, label: "green", value: 1 },
  { key: 7, isDisabled: false, isHidden: false, label: "cyan", value: 1 },
  { key: 8, isDisabled: false, isHidden: false, label: "magenta", value: 1 },
  { key: 9, isDisabled: false, isHidden: false, label: "yellow", value: 1 },
];

export default function Option() {
  const [optionsState, setOptionsState] = React.useState(options);

  const handleToogleNameFirstOption = () => {
    const clone = optionsState.slice(0);
    clone[0].label = clone[0].label === "🐉🦄 Flufircon" ? "unicorn" : "🐉🦄 Flufircon";
    setOptionsState(clone);
  };

  const handleToogleDisableSecondOption = () => {
    const clone = optionsState.slice(0);
    clone[1].isDisabled = !clone[1].isDisabled;
    setOptionsState(clone);
  };

  const handleToogleHideThirdOption = () => {
    const clone = optionsState.slice(0);
    clone[2].isHidden = !clone[2].isHidden;
    setOptionsState(clone);
  };

  return (
    <fieldset>
      <legend>Toggle properties</legend>
      <Button size="small" onClick={handleToogleNameFirstOption}>
        Change label of first options to Flufircon
      </Button>
      <br />
      <br />
      <Button size="small" onClick={handleToogleDisableSecondOption}>
        Toogle disable second options
      </Button>
      <br />
      <br />
      <Button size="small" onClick={handleToogleHideThirdOption}>
        Toogle hidden third options
      </Button>
      <br />
      <br />
      <ListBox isInline>
        {optionsState.map(option => {
          return (
            <ListBox.Option
              value={option.value}
              label={option.label}
              isDisabled={option.isDisabled}
              isHidden={option.isHidden}
              key={option.key}
            >
              {option.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </fieldset>
  );
}
