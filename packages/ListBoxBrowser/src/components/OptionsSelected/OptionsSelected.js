import React from "react";
import PropTypes from "prop-types";
import { optionStyles, container, divider } from "./OptionsSelected.styles";

const propTypes = {
  // need a custom proptype
  options: PropTypes.object.isRequired, // eslint-disable-line
};
const defaultProps = {};

export default function OptionsSelected(props) {
  const { options } = props;
  return (
    <>
      <div css={divider}>Results (i18n)</div>
      <div css={container}>
        {Object.keys(options).map(key => {
          return options[key].map(option => {
            return (
              <div key={option.$$key} css={optionStyles}>
                {option.attributes.label}
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
