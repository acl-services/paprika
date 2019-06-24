import React from "react";
import PropTypes from "prop-types";
import { labelStyles } from "./Label.styles";

const propTypes = {
  selectedOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  // complex object not worth declaring the shape of the strcuture
  options: PropTypes.object.isRequired, // eslint-disable-line
};

function getFormattedLabel(selectedOptions, options) {
  return selectedOptions
    .map(index => {
      const option = options[index];
      if (typeof option.content === "string") {
        return option.content;
      }

      if (option.label) {
        return option.label;
      }

      throw new Error(
        `The trigger label on the ListBox needs that either <ListBox.Option> children are typeof string
      or a label prop is add to the <ListBox.Option label='my description'> component`
      );
    })
    .join(", ");
}

export default function LabelMulti(props) {
  const optionsLength = props.selectedOptions.length;

  const label = getFormattedLabel(props.selectedOptions, props.options);

  if (optionsLength > 1) {
    return (
      <span css={labelStyles}>
        <span>({optionsLength})&nbsp;</span>
        {label}
      </span>
    );
  }

  return <span css={labelStyles}>{label}</span>;
}

LabelMulti.propTypes = propTypes;
