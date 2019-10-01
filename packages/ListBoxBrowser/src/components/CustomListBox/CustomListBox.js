import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/listbox";
import RawButton from "@paprika/raw-button";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import { label, navigateButton } from "../../ListBoxBrowser.styles";

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number.isRequired,
  isMulti: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  hasOnUp: PropTypes.bool,
  onUp: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickNavigate: PropTypes.func.isRequired,
  selectedOptions: PropTypes.object, // eslint-disable-line
  rootKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  browserKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isParentSelectable: PropTypes.bool,
};
const defaultProps = {
  id: "root",
  hasOnUp: false,
  onUp: () => {},
  rootKey: null,
  isParentSelectable: null,
};

function isSelected({ $$key, selectedOptions, browserKey }) {
  if (browserKey in selectedOptions) {
    return selectedOptions[browserKey].some(option => option.$$key === $$key);
  }

  return false;
}

function hasPreventDefaultOnSelect({ hasOptions, isParentSelectable }) {
  if (isParentSelectable !== null) {
    return !isParentSelectable;
  }

  return hasOptions;
}

export default function CustomListBox(props) {
  const {
    browserKey,
    hasOnUp,
    height,
    id,
    isMulti,
    onChange,
    onClickNavigate,
    onUp,
    options,
    rootKey,
    selectedOptions,
    isParentSelectable,
  } = props;
  return (
    <ListBox key={id} height={height} isMulti={isMulti} isInline onChange={onChange}>
      <ListBox.Trigger isHidden></ListBox.Trigger>
      {hasOnUp ? <ListBox.Option onClick={onUp}>../</ListBox.Option> : null}
      {options.map(({ $$key, attributes, hasOptions }) => (
        <ListBox.Option
          preventDefaultOnSelect={hasPreventDefaultOnSelect({ hasOptions, isParentSelectable })}
          isSelected={isSelected({ browserKey, $$key, selectedOptions })}
          key={$$key}
          label={attributes.label}
          value={{ $$key, attributes, hasOptions }}
          data-ppk-is-root-selected={rootKey === $$key}
        >
          {({ isSelected }) => {
            return (
              <div css={label}>
                <div>
                  {!hasOptions || isParentSelectable ? (
                    <span>
                      <input tabIndex={-1} aria-hidden type="checkbox" checked={isSelected} onChange={() => {}} />
                    </span>
                  ) : null}
                  <span>{attributes.label}</span>
                </div>
                <div>
                  {hasOptions ? (
                    <RawButton
                      a11yText="Browse content (i18n)"
                      css={navigateButton}
                      onClick={onClickNavigate($$key, hasOptions)}
                    >
                      <ArrowRight />
                    </RawButton>
                  ) : null}
                </div>
              </div>
            );
          }}
        </ListBox.Option>
      ))}
    </ListBox>
  );
}

CustomListBox.propTypes = propTypes;
CustomListBox.defaultProps = defaultProps;
