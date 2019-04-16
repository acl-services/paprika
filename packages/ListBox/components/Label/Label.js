import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import labelStyles from "./Label.styles";

const propTypes = {
  placeholder: PropTypes.string,
};

let lastKnownLabel = "";

export default function Label(props) {
  const { placeholder } = props;
  const [state] = useListBox();
  const { selectedOptions, isMulti, options } = state;

  if (!isMulti && selectedOptions.length && state.options[selectedOptions[0]].preventDefaultOnSelect) {
    if (!lastKnownLabel) return placeholder;

    return lastKnownLabel;
  }

  function getListboxLabelForMulti() {
    const optionsLength = selectedOptions.length;

    const label = selectedOptions
      .map(index => {
        const option = options[index];
        if (typeof option.content === "string") {
          return option.content;
        }

        if (option.label) {
          return option.label;
        }

        throw Error(
          `The trigger label on the ListBox needs that either <ListBox.Option> children are typeof string
        or a label prop is add to the <ListBox.Option label='my description'> component`
        );
      })
      .join(", ");

    const lastKnownLabel =
      optionsLength > 1 ? (
        <span css={labelStyles}>
          <span>({optionsLength})&nbsp;</span>
          {label}
        </span>
      ) : (
        <span css={labelStyles}>{label}</span>
      );

    return lastKnownLabel;
  }

  if (isMulti && selectedOptions.length) {
    return getListboxLabelForMulti();
  }

  if (selectedOptions.length) {
    const option = options[selectedOptions[0]];
    if (option.label) {
      lastKnownLabel = option.label;
      return lastKnownLabel;
    }

    if (typeof options.content === "string") {
      lastKnownLabel = option.content;
      return lastKnownLabel;
    }

    console.log(
      "Warning: Your Option required a label prop, <ListBox.Option label='your label' /><MyCoolContent /></ListBox.Option>"
    );
    return option.content;
  }

  lastKnownLabel = placeholder;
  return lastKnownLabel;
}

Label.propTypes = propTypes;
