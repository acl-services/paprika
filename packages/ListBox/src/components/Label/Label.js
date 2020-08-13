import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as sc from "./Label.styles";
import LabelMulti from "./LabelMulti";
import LabelSingle from "./LabelSingle";

const propTypes = {
  hasImplicitAll: PropTypes.bool,
  /** Custom label text */
  customLabel: PropTypes.string,

  /** Sets a placeholder for the label. */
  placeholder: PropTypes.string,
};

const defaultProps = {
  customLabel: null,
  hasImplicitAll: false,
  placeholder: "",
};

export default function Label(props) {
  const { hasImplicitAll, placeholder, customLabel } = props;
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

  return (
    <sc.Label hasImplicitAll={hasImplicitAll} isPlaceholder={!selectedOptions.length}>
      {customLabel || label}
    </sc.Label>
  );
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
