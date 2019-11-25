import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

const propTypes = {
  /** aria-labelledby prop on the containing group element */
  a11yLabelledByText: PropTypes.string,

  /** Can deselect any radio */
  canDeselect: PropTypes.bool,

  /** Function used to evaluate which radio is selected by default. */
  defaultCheck: PropTypes.func,

  /** The individual radio itemss. */
  children: PropTypes.node,

  /** Are all radios disabled */
  isDisabled: PropTypes.bool,

  /** On change of radio selection. */
  onChange: PropTypes.func.isRequired,

  /** The size for all radio components. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yLabelledByText: "",
  canDeselect: false,
  children: null,
  defaultCheck: () => {},
  isDisabled: false,
  size: ShirtSizes.MEDIUM,
};

function Group(props) {
  const { a11yLabelledByText, canDeselect, children, defaultCheck, ...moreGroupProps } = props;
  const defaultCheckedId = React.Children.toArray(children).find(defaultCheck).props.value.id;
  const [checkedId, setCheckedId] = React.useState(defaultCheckedId || null);
  const deselectableId = id => (checkedId === id ? null : id);
  const handleRadioClick = id => {
    setCheckedId(canDeselect ? deselectableId(id) : id);
  };

  return (
    <div role="radiogroup" aria-labelledby={a11yLabelledByText} data-pka-anchor="radio.group">
      {React.Children.map(children, (child, index) => {
        if (child && child.type && child.type.displayName === "Radio") {
          const childKey = { key: `Radio${index}` };
          return React.cloneElement(child, {
            onClick: () => handleRadioClick(child.props.value.id),
            isChecked: checkedId === child.props.value.id,
            canDeselect,
            ...childKey,
            ...moreGroupProps,
          });
        }
        return child;
      })}
    </div>
  );
}

Group.displayName = "Radio.Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;

export default Group;
