/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import Button from "@paprika/button";
import ListBox from "../../../../index";

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

export default function Add() {
  const [optionsState, setOptionsState] = React.useState(options);

  const handleToogleDisableSecondOptions = () => {
    const clone = optionsState.slice(0);
    clone[1].isDisabled = !clone[1].isDisabled;
    setOptionsState(clone);
  };

  return (
    <fieldset>
      <legend>Toggle properties</legend>
      <Button size="small" onClick={handleToogleDisableSecondOptions}>
        Toogle disable second options
      </Button>
      <br />
      <br />
      <Button size="small" onClick={() => {}}>
        Toogle hidden third options
      </Button>
      <br />
      <br />
      <Button size="small" onClick={() => {}}>
        Change label of first options to Flufircon
      </Button>
      <br />
      <br />
      <ListBox isInlineDisplay>
        {optionsState.map(option => {
          console.log("isDisabled>>>", option.isDisabled);
          return (
            <ListBox.Option
              value={option.value}
              label={option.label}
              isDisabled={option.isDisabled}
              isHidden={options.isHidden}
              key={option.key}
            >
              For {option.label} value is {option.value}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </fieldset>
  );
}
