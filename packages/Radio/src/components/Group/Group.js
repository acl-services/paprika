import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import types from "../../types";

const propTypes = {
  /** Can deselect any radio */
  canDeselect: PropTypes.bool,

  /** The individual radio items. */
  children: PropTypes.node,

  /** Are all radios disabled */
  isDisabled: PropTypes.bool,

  /** On change of radio selection. */
  onChange: PropTypes.func.isRequired,

  /** The size for all radio components. */
  size: PropTypes.oneOf([types.size.SMALL, types.size.MEDIUM, types.size.LARGE]),
};

const defaultProps = {
  canDeselect: false,
  children: null,
  isDisabled: false,
  size: types.size.MEDIUM,
};

function Group(props) {
  const { canDeselect, children, isDisabled, onChange, size, ...moreGroupProps } = props;
  const defaultCheckedIndex = React.Children.toArray(children).findIndex(child => child.props.defaultIsChecked);
  const selectedIndex = React.Children.toArray(children).findIndex(child => child.props.isChecked);
  const [generatedName] = React.useState(() => `radio-group_${uuidv4()}`);

  const [checkedIndex, setCheckedIndex] = React.useState(defaultCheckedIndex);
  if (selectedIndex !== -1 && selectedIndex !== checkedIndex) {
    setCheckedIndex(selectedIndex);
  }

  const getDeselectableIndex = index => (checkedIndex === index ? null : index);
  const handleRadioClick = index => {
    onChange(index);
    setCheckedIndex(canDeselect ? getDeselectableIndex(index) : index);
  };

  return (
    <div data-pka-anchor="radio.group" {...moreGroupProps}>
      {React.Children.map(children, (child, index) => {
        if (child && child.type && child.type.displayName === "Radio") {
          return React.cloneElement(child, {
            onClick: () => handleRadioClick(index),
            isChecked: checkedIndex === index,
            isDisabled: isDisabled || child.props.isDisabled,
            canDeselect,
            size,
            name: child.props.name || generatedName,
            key: child.props.name || generatedName,
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
