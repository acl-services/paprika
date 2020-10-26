import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import types from "../../types";

const propTypes = {
  /** aria-labelledby prop on the containing group element */
  a11yText: PropTypes.string,

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
  a11yText: "",
  canDeselect: false,
  children: null,
  isDisabled: false,
  size: types.size.MEDIUM,
};

function Group(props) {
  const { a11yText, canDeselect, children, isDisabled, onChange, ...moreGroupProps } = props;
  const defaultCheckedIndex = React.Children.toArray(children).findIndex(child => child.props.defaultIsChecked);
  const selectedIndex = React.Children.toArray(children).findIndex(child => child.props.isChecked);

  const [checkedIndex, setCheckedIndex] = React.useState(defaultCheckedIndex);
  if (selectedIndex !== -1 && selectedIndex !== checkedIndex) {
    setCheckedIndex(selectedIndex);
  }

  const name = nanoid();
  const getDeselectableIndex = index => (checkedIndex === index ? null : index);
  const handleRadioClick = index => {
    onChange(index);
    setCheckedIndex(canDeselect ? getDeselectableIndex(index) : index);
  };

  return (
    <div role="radiogroup" aria-labelledby={a11yText} data-pka-anchor="radio.group" {...moreGroupProps}>
      {React.Children.map(children, (child, index) => {
        if (child && child.type && child.type.displayName === "Radio") {
          const childKey = { key: `Radio${index}` };
          return React.cloneElement(child, {
            onClick: () => handleRadioClick(index),
            isChecked: checkedIndex === index,
            isDisabled: isDisabled || child.props.isDisabled,
            canDeselect,
            name: child.props.name || name,
            ...childKey,
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
