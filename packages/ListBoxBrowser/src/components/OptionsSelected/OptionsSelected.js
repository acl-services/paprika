import React from "react";
import RawButton from "@paprika/raw-button";
import Times from "@paprika/icon/lib/Times";
import { getBreadcrumb } from "../../helpers";
import { ListBoxBrowserContext } from "../../ListBoxBrowser";

import {
  optionStyles,
  container,
  title,
  button,
  remove,
  counter,
  optionLabel,
  optionBreadcrum,
  noOptionsSelectedContainer,
  noOptionsSelected,
} from "./OptionsSelected.styles";

function getLength(options) {
  let i = 0;
  Object.keys(options).forEach(key => {
    return options[key].forEach(() => {
      i += 1;
    });
  });
  return i;
}

export default function OptionsSelected() {
  const { selectedOptions, localData, onRemove, onJumpToOption } = React.useContext(ListBoxBrowserContext);
  const handleClick = key => () => {
    onJumpToOption(key);
  };

  const handleRemove = option => () => {
    onRemove(option);
  };

  const length = getLength(selectedOptions);

  if (!length) {
    return (
      <>
        <div css={title}>
          (i18n) Selected options <span css={counter}>0</span>
        </div>
        <div css={noOptionsSelectedContainer}>
          <div css={noOptionsSelected}>Select one or more items...(i18n)</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div css={title}>
        (i18n) Selected options <span css={counter}>{length}</span>
      </div>
      <div css={container}>
        {Object.keys(selectedOptions).map(key => {
          return selectedOptions[key].map(option => {
            const breadcrumb = getBreadcrumb({ data: localData, option });
            return (
              <div key={option.$$key} css={optionStyles} data-ppk-anchor="listbox-browser-selected-options">
                <RawButton css={button} onClick={handleClick(option)}>
                  <div css={optionLabel} data-ppk-anchor="listbox-browser-selected-options-label">
                    {option.attributes.label}
                  </div>
                  <div css={optionBreadcrum}>
                    {breadcrumb.map((option, index, list) => (
                      <span key={option.$$key} data-ppk-anchor="listbox-browser-selected-options-breadcrumb">
                        {option.attributes.label} {index !== list.length - 1 ? `>` : null}
                      </span>
                    ))}
                  </div>
                </RawButton>
                <RawButton onClick={handleRemove(option)} css={remove} a11yText="Remove (i18n)">
                  <Times />
                </RawButton>
              </div>
            );
          });
        })}
      </div>
    </>
  );
}
