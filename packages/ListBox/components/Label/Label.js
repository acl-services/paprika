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
      <React.Fragment>
        <span>({optionsLength})&nbsp;</span>
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
