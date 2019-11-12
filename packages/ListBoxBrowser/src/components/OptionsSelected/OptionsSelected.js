import React from "react";
import RawButton from "@paprika/raw-button";
import Trashbin from "@paprika/icon/lib/Trashbin";
import useI18n from "@paprika/l10n/lib/useI18n";
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
  optionBreadcrumb,
  noOptionsSelectedContainer,
  noOptionsSelected,
} from "./OptionsSelected.styles";

function getTotalOptionsLength(options) {
  return Object.values(options).reduce((acc, option) => acc + option.length, 0);
}

export default function OptionsSelected() {
  const { selectedOptions, localData, onRemove, onJumpToOption } = React.useContext(ListBoxBrowserContext);
  const i18n = useI18n();

  const handleClick = key => () => {
    onJumpToOption(key);
  };

  const handleRemove = option => () => {
    onRemove(option);
  };

  const length = getTotalOptionsLength(selectedOptions);

  if (!length) {
    return (
      <>
        <div css={title}>
          {`${i18n.t("listBoxBrowser.selected")} `}{" "}
          <span css={counter} data-pka-anchor="listboxbrowser-optionselected-counter">
            0
          </span>
        </div>
        <div css={noOptionsSelectedContainer}>
          <div css={noOptionsSelected}>{i18n.t("listBoxBrowser.selectOne")}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div css={title}>
        {`${i18n.t("listBoxBrowser.selected")} `}
        <span css={counter} data-pka-anchor="listboxbrowser-optionselected-counter">
          {length}
        </span>
      </div>
      <div css={container}>
        {Object.keys(selectedOptions).map(key => {
          return selectedOptions[key].map(option => {
            const breadcrumb = getBreadcrumb({ data: localData, option });
            return (
              <div key={option.$$key} css={optionStyles} data-pka-anchor="listbox-browser-selected-option">
                <RawButton css={button} onClick={handleClick(option)}>
                  <div css={optionLabel} data-pka-anchor="listbox-browser-selected-option-label">
                    {option.attributes.label}
                  </div>
                  <div css={optionBreadcrumb}>
                    {breadcrumb.map((option, index, list) => (
                      <span key={option.$$key} data-pka-anchor="listbox-browser-selected-option-breadcrumb">
                        {option.attributes.label} {index !== list.length - 1 ? `>` : null}
                      </span>
                    ))}
                  </div>
                </RawButton>
                <RawButton
                  onClick={handleRemove(option)}
                  css={remove}
                  a11yText={`${i18n.t("remove")} ${option.attributes.label}`}
                  data-pka-anchor="listbox-browser-selected-option-trashbin"
                >
                  <Trashbin />
                </RawButton>
              </div>
            );
          });
        })}
      </div>
    </>
  );
}
