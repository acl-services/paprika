import React from "react";
import PropTypes from "prop-types";
import useStore from "../../store/useStore";

const propTypes = {
  placeholder: PropTypes.string,
};

export default function Label(props) {
  const [state] = useStore();
  const { placeholder } = props;
  const { selectedOptions, isMulti, options, activeOption } = state;

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

  if (activeOption !== null) {
    if (isMulti && selectedOptions.length) {
      return getListboxLabelForMulti();
    }

    const option = options[activeOption];
    if (option.value === "") {
      return placeholder;
    }

    return option.label;
  }

  return placeholder;
}

Label.propTypes = propTypes;
