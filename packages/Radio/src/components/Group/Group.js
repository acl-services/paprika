import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import RadioContext from "../../RadioContext";

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
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: "",
  canDeselect: false,
  children: null,
  isDisabled: false,
  size: ShirtSizes.MEDIUM,
};

function Group(props) {
  const { a11yText, canDeselect, children, isDisabled, onChange, ...moreGroupProps } = props;
  const defaultCheckedIndex = React.Children.toArray(children).findIndex(child => child.props.defaultIsChecked);
  const selectedIndex = React.Children.toArray(children).findIndex(child => child.props.isChecked);

  const [checkedIndex, setCheckedIndex] = React.useState(defaultCheckedIndex);
  if (selectedIndex !== -1 && selectedIndex !== checkedIndex) {
    setCheckedIndex(selectedIndex);
  }

  const deSelectableIndex = index => (checkedIndex === index ? null : index);
  const name = nanoid();
  const handleRadioClick = index => {
    onChange(index);
    setCheckedIndex(canDeselect ? deSelectableIndex(index) : index);
  };

  return (
    <div role="radiogroup" aria-labelledby={a11yText} data-pka-anchor="radio.group">
      {React.Children.map(children, (child, index) => (
        <RadioContext.Provider
          value={{
            isGroupDisabled: isDisabled,
            handleRadioClick,
            index,
            checkedIndex,
            canDeselect,
            name,
            ...moreGroupProps,
          }}
        >
          {child}
        </RadioContext.Provider>
      ))}
    </div>
  );
}

Group.displayName = "Radio.Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;

export default Group;
