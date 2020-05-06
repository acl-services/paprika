import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
// import {labelStyles} from "./Label.styles";
import LabelMulti from "./LabelMulti";
import LabelSingle from "./LabelSingle";

const propTypes = {
  /** Sets a placeholder for the label. */
  placeholder: PropTypes.string,
};

export default function Label(props) {
  const { placeholder } = props;
  const [state] = useListBox();
  const { selectedOptions, isMulti, options } = state;
  const [label, setLabel] = React.useState(placeholder);

  React.useEffect(() => {
    if (selectedOptions.length) {
      const _label = isMulti ? (
        <LabelMulti options={options} selectedOptions={selectedOptions} />
      ) : (
        <LabelSingle options={options} selectedOptions={selectedOptions} />
      );

      setLabel(_label);
      return;
    }

    setLabel(placeholder);
  }, [isMulti, options, placeholder, selectedOptions]);

  return label;
}

Label.propTypes = propTypes;
