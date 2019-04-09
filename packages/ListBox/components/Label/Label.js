import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import labelStyles from "./Label.styles";

const propTypes = {
  placeholder: PropTypes.string,
};

export default function Label(props) {
  const [state] = useListBox();
  const { placeholder } = props;
  const { selectedOptions, isMulti, options } = state;

  function getListboxLabelForMulti() {
    const optionsLength = selectedOptions.filter(index => !options[index].isOptionActionGroup).length;

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

    return optionsLength > 1 ? (
      <span css={labelStyles}>
        <span>({optionsLength})&nbsp;</span>
        {label}
      </span>
    ) : (
      <span css={labelStyles}>{label}</span>
    );
  }

  if (isMulti && selectedOptions.length) {
    return getListboxLabelForMulti();
  }

  if (selectedOptions.length) {
    const option = options[selectedOptions[0]];
    if (option.label) {
      return option.label;
    }

    return option.content;
  }

  return placeholder;
}

Label.propTypes = propTypes;
