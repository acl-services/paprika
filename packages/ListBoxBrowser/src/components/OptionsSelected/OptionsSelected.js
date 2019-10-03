import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Times from "@paprika/icon/lib/Times";
import { getBreadcrumb } from "../../helpers";
import {
  optionStyles,
  container,
  divider,
  button,
  remove,
  counter,
  optionLabel,
  optionBreadcrum,
} from "./OptionsSelected.styles";

const propTypes = {
  // need a custom proptype
  options: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.func,
  onRemove: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  onClick: () => {},
  onRemove: () => {},
};

function getLength(options) {
  let i = 0;
  Object.keys(options).forEach(key => {
    return options[key].forEach(() => {
      i += 1;
    });
  });
  return i;
}

export default function OptionsSelected(props) {
  const { options, onClick, onRemove, data } = props;
  const handleClick = key => () => {
    onClick(key);
  };

  const handleRemove = key => () => {
    onRemove(key);
  };

  return (
    <>
      <div css={divider}>
        (i18n) Selected options <span css={counter}>{getLength(options)}</span>
      </div>
      <div css={container}>
        {Object.keys(options).map(key => {
          return options[key].map(option => {
            const breadcrumb = getBreadcrumb({ data, option });
            return (
              <div key={option.$$key} css={optionStyles}>
                <RawButton css={button} onClick={handleClick(option)}>
                  <div css={optionLabel}>{option.attributes.label}</div>
                  <div css={optionBreadcrum}>
                    {breadcrumb.map((option, index, list) => (
                      <span>
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

OptionsSelected.propTypes = propTypes;
OptionsSelected.defaultProps = defaultProps;
