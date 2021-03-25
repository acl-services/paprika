import React from "react";
import PropTypes from "prop-types";
import { labelStyles } from "./Label.styles";
import { PropsContext } from "../../store/PropsProvider";

const propTypes = {
  selectedOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  // complex object not worth declaring the shape of the strcuture
  options: PropTypes.object.isRequired, // eslint-disable-line
};

function getFormattedLabel(selectedOptions, options) {
  return selectedOptions
    .map(index => {
      const option = options[index];

      if (!option) return null;

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
    .filter(label => label !== null)
    .join(", ");
}

export default function LabelMulti(props) {
  const { virtualize } = React.useContext(PropsContext);

  const optionsLength = virtualize ? virtualize.onSelectedOptions().length : props.selectedOptions.length;

  const label = virtualize
    ? virtualize
        .onSelectedOptions()
        .map(index => {
          return virtualize.onRenderLabel(index);
        })
        .join(", ")
    : getFormattedLabel(props.selectedOptions, props.options);

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
