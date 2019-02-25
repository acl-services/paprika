import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  activeOption: PropTypes.object,
  isMulti: PropTypes.bool,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  selectedOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.arrayOf(PropTypes.number)]),
};

export default function Label(props) {
  const { selectedOptions, isMulti, placeholder, options, activeOption } = props;

  function getListboxLabelForMulti() {
    const optionsLength = selectedOptions.length;
    if (activeOption.hasLabel) {
      const label = selectedOptions.map(item => ` ${options[item].label}`);

      const quantity = optionsLength > 1 ? `(${optionsLength})` : "";
      return `${quantity} ${label}`;
    }
    const label = selectedOptions.map(item => options[item].label);

    return optionsLength > 1 ? (
      <React.Fragment>
        <span>({optionsLength})</span>
        {label}
      </React.Fragment>
    ) : (
      <React.Fragment>{label}</React.Fragment>
    );
  }

  if (activeOption.value === "") {
    return placeholder;
  }

  if (!selectedOptions.length) {
    return placeholder;
  }

  if (isMulti) {
    return getListboxLabelForMulti();
  }

  return activeOption.label;
}

Label.propTypes = propTypes;
