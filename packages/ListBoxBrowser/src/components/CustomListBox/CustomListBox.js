import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import RawButton from "@paprika/raw-button";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import Spinner from "@paprika/spinner";
import { ListBoxBrowserContext } from "../../ListBoxBrowser";
import {
  arrowRightButton,
  arrowRigthContainer,
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

function isSelected({ $$key, selectedOptions, browserKey, isRootListBox }) {
  let key = browserKey;
  if (isRootListBox) {
    key = "root";
  }

  if (key in selectedOptions) {
    return selectedOptions[key].some(option => option.$$key === $$key);
  }

  return false;
}

function isSelectable({ hasOptions, isParentSelectable }) {
  if (isParentSelectable !== null) {
    return !isParentSelectable;
  }

  return hasOptions;
}

export default function CustomListBox(props) {
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
      <ListBox.Trigger isHidden></ListBox.Trigger>
      {hasOnUp ? (
        <ListBox.Option onClick={onUp}>
          <span css={backButton}>
            <ArrowLeft /> Back <span css="opacity: .2; margin-left: 8px">(i18n)</span>
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
              <div css={arrowRigthContainer}>
                {hasOptions ? (
                  <RawButton
                    tabIndex={isParentSelectable ? 0 : -1}
                    isParentSelectable={isParentSelectable}
                    a11yText="Browse content (i18n)"
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
