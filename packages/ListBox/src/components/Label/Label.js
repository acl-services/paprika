import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { PropsContext } from "../../store/PropsProvider";
import * as sc from "./Label.styles";
import LabelMulti from "./LabelMulti";
import LabelSingle from "./LabelSingle";

export default function Label(props) {
  const { hasImplicitAll, placeholder, label: customLabel, isDisabled } = props;
  const [state] = useListBox();
  const { selectedOptions, isMulti, options } = state;
  const { isReadOnly } = React.useContext(PropsContext);
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
    <sc.Label
      hasImplicitAll={hasImplicitAll}
      isPlaceholder={!selectedOptions.length}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      {customLabel || label}
    </sc.Label>
  );
}

Label.propTypes = {
  hasImplicitAll: PropTypes.bool,

  isDisabled: PropTypes.bool,

  /** Override the label with a custom one. */
  label: PropTypes.string,

  /** Sets a placeholder for the label. */
  placeholder: PropTypes.string,
};

Label.defaultProps = {
  hasImplicitAll: false,
  isDisabled: false,
  label: null,
  placeholder: "",
};
