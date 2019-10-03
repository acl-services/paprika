import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Times from "@paprika/icon/lib/Times";
import { optionStyles, container, divider, button, remove } from "./OptionsSelected.styles";

const propTypes = {
  // need a custom proptype
  options: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.func,
  onRemove: PropTypes.bool,
};

const defaultProps = {
  onClick: () => {},
  onRemove: () => {},
};

export default function OptionsSelected(props) {
  const { options, onClick, onRemove } = props;
  const handleClick = key => () => {
    onClick(key);
  };

  const handleRemove = key => () => {
    onRemove(key);
  };
  return (
    <>
      <div css={divider}>Selected options (i18n)</div>
      <div css={container}>
        {Object.keys(options).map(key => {
          return options[key].map(option => {
            return (
              <div key={option.$$key} css={optionStyles}>
                <RawButton css={button} onClick={handleClick(option)}>
                  {option.attributes.label}
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

OptionsSelected.propTypes = propTypes;
OptionsSelected.defaultProps = defaultProps;
