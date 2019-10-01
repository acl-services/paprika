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
  selectedOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  rootKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const defaultProps = {
  id: "root",
  hasOnUp: false,
  onUp: () => {},
  rootKey: null,
};

function isSelected({ $$key, selectedOptions, browserKey }) {
  if (browserKey in selectedOptions) {
    return selectedOptions[browserKey].some(option => option.$$key === $$key);
  }

  return false;
}

export default function CustomListBox(props) {
  const { id, height, isMulti, onChange, hasOnUp, onUp, options, onClickNavigate, selectedOptions, rootKey } = props;
  return (
    <ListBox key={id} height={height} isMulti={isMulti} isInline onChange={onChange}>
      <ListBox.Trigger isHidden></ListBox.Trigger>
      {hasOnUp ? <ListBox.Option onClick={onUp}>../</ListBox.Option> : null}
      {options.map(({ $$key, attributes, hasOptions }) => (
        <ListBox.Option
          preventDefaultOnSelect={hasOptions}
          isSelected={isSelected({ $$key, id, selectedOptions })}
          key={$$key}
          label={attributes.label}
          value={{ $$key, attributes, hasOptions }}
          data-ppk-is-root-selected={rootKey === $$key}
        >
          <div css={label}>
            <div>{attributes.label}</div>
            <div>
              {hasOptions ? (
                <RawButton css={navigateButton} onClick={onClickNavigate($$key, hasOptions)}>
                  <ArrowRight />
                </RawButton>
              ) : null}
            </div>
          </div>
        </ListBox.Option>
      ))}
    </ListBox>
  );
}

CustomListBox.propTypes = propTypes;
CustomListBox.defaultProps = defaultProps;
