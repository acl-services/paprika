import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import RawButton from "@paprika/raw-button";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import Spinner from "@paprika/spinner";
import useI18n from "@paprika/l10n/lib/useI18n";

import { isSelected, isSelectable } from "./helpers";
import { ListBoxBrowserContext } from "../../ListBoxBrowser";
import {
  arrowRightButton,
  arrowRightContainer,
  backButton,
  checkbox,
  label,
  labelContainer,
  labelCheckbox,
  loading,
} from "./CustomListBox.styles";

const noop = () => () => {};
const propTypes = {
  hasOnUp: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClickNavigate: PropTypes.func.isRequired,
  onUp: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  hasOnUp: false,
  id: "root",
  isLoading: false,
  onUp: () => {},
};

export default function CustomListBox(props) {
  const i18n = useI18n();
  const { browserKey, height, isMulti, isParentSelectable, rootKey, selectedOptions } = React.useContext(
    ListBoxBrowserContext
  );

  const { id, onChange, options, onClickNavigate, onUp, hasOnUp, isLoading } = props;
  const isRootListBox = id === "root";

  if (isLoading) {
    return (
      <div css={loading}>
        <Spinner />
      </div>
    );
  }

  return (
    <ListBox key={id} height={height} isMulti={isMulti} isInline onChange={onChange}>
      <ListBox.Trigger isHidden />
      {hasOnUp ? (
        <ListBox.Option onClick={onUp}>
          <span css={backButton} data-pka-anchor="listboxbrowser-listoption-back">
            <ArrowLeft />
            {i18n.t("back")}
          </span>
        </ListBox.Option>
      ) : null}
      {options.map(option => {
        const { $$key, attributes, hasOptions } = option;
        return (
          <ListBox.Option
            preventDefaultOnSelect={isSelectable({ hasOptions, isParentSelectable })}
            isSelected={isSelected({ browserKey, $$key, selectedOptions, isRootListBox })}
            key={$$key}
            label={attributes.label}
            value={option}
            data-ppk-is-root-selected={rootKey === $$key}
            onClick={hasOptions ? onClickNavigate({ $$key, hasOptions }) : noop()}
          >
            <div css={labelContainer}>
              <div css={label}>
                <span css={labelCheckbox}>
                  {!hasOptions || isParentSelectable ? (
                    <input
                      css={checkbox}
                      tabIndex={-1}
                      aria-hidden
                      type={isMulti ? "checkbox" : "radio"}
                      checked={isSelected({ browserKey, $$key, selectedOptions, isRootListBox })}
                      onChange={() => {}}
                    />
                  ) : null}
                </span>
                <span>{attributes.label}</span>
              </div>
              <div css={arrowRightContainer}>
                {hasOptions ? (
                  <RawButton
                    tabIndex={isParentSelectable ? 0 : -1}
                    isParentSelectable={isParentSelectable}
                    a11yText={i18n.t("listBoxBrowser.explore")}
                    css={arrowRightButton}
                    onClick={onClickNavigate({ $$key, hasOptions, isClickFromButton: true })}
                  >
                    <ArrowRight />
                  </RawButton>
                ) : null}
              </div>
            </div>
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
}

CustomListBox.propTypes = propTypes;
CustomListBox.defaultProps = defaultProps;
