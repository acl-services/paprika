import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@paprika/checkbox";
import PlusIcon from "@paprika/icon/lib/Add";
import { PropsContext } from "../../store/PropsProvider";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import * as sc from "./Option.styles";

const Option = props => {
  const {
    index,
    groupId,
    label,
    id,
    internalHandleOnClick,
    isSelected,
    isAvatar,
    isMulti,
    hasTag,
    ...moreProps
  } = props; // eslint-disable-line
  const providedProps = React.useContext(PropsContext);
  const { isReadOnly, size } = providedProps;
  const isDisabled = providedProps.isDisabled || props.isDisabled || isReadOnly;
  const { CHECKED, UNCHECKED } = Checkbox.types.state;
  const [checkedState, setCheckedState] = React.useState(UNCHECKED);
  const handleChange = () => setCheckedState(checkedState === CHECKED ? UNCHECKED : CHECKED);
  const checkIcon =
    isMulti &&
    (!hasTag ? (
      <Checkbox
        checkedState={isSelected ? CHECKED : checkedState}
        onChange={handleChange}
        style={{ paddingRight: "8px" }}
      />
    ) : (
      <PlusIcon style={{ paddingRight: "8px" }} />
    ));
  return (
    <sc.Option
      {...moreProps}
      {...getA11yAttributesForOption(isSelected)}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      isDisabled={isDisabled}
      isSelected={isSelected}
      isMulti={isMulti}
      isAvatar={isAvatar}
      hasTag={hasTag}
      size={size}
      key={index}
      onClick={event => internalHandleOnClick({ event, isDisabled, onClick: props.onClick, index })}
      data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
      data-pka-prevent-default-on-select={props.preventDefaultOnSelect}
      tabIndex={-1}
    >
      {isAvatar ? null : checkIcon}
      {typeof props.children === "function" ? props.children({ isSelected, isDisabled, id }) : props.children}
    </sc.Option>
  );
};

Option.displayName = "ListBox.Option";

Option.propTypes = {
  /** String, number or JSX content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /* Controls if the option is selected or not, never combine it with defaultIsSelected */
  isSelected: PropTypes.bool,

  /** Describe if the option started as selected or not */
  defaultIsSelected: PropTypes.bool,

  /** If there is an avatar, no icon is displayed */
  isAvatar: PropTypes.bool,

  /** Describe if the option is enable or not */
  isDisabled: PropTypes.bool,

  /** Describe if the option is hidden or not */
  isHidden: PropTypes.bool,

  /** When the children are not a String, label should need to be add so the filter can work  */
  label: PropTypes.string,

  /** Callback for the clicking event */
  onClick: PropTypes.func,

  /** Value of your option this can be any data structure  */
  value: PropTypes.any, // eslint-disable-line

  /** Internal prop, which shouldn't be documented */
  internalHandleOnClick: PropTypes.func.isRequired,

  /** Internal prop, which shouldn't be documented */
  id: PropTypes.string.isRequired,

  /** Internal prop, which shouldn't be documented */
  preventDefaultOnSelect: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** If there is a tag */
  hasTag: PropTypes.bool,
};

Option.defaultProps = {
  isAvatar: false,
  isDisabled: false,
  isMulti: false,
  hasTag: false,
  isHidden: false,
  preventDefaultOnSelect: false,
  isSelected: null,
  defaultIsSelected: null,
  label: null,
  onClick: null,
  value: null,
};

const OptionMemoized = React.memo(Option);
export default OptionMemoized;
