import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { OnChangeContext } from "../../store/OnChangeProvider";
import { PropsContext } from "../../store/PropsProvider";
import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers/options";
import useIsSelectedOption from "./useIsSelectedOption";
import * as sc from "./Option.styles";

export default function Option(props) {
  const {
    /* eslint-disable react/prop-types */
    id: idProp,
    index,
    isOptionSelected: isOptionSelectedVirtualized,
    /* eslint- react/prop-types */
    label,
    hasVirtualization,
    ...moreProps
  } = props;
  const [state, dispatch] = useListBox();
  const providedProps = React.useContext(PropsContext);
  const { isReadOnly, size } = providedProps;
  const onChangeContext = React.useContext(OnChangeContext);

  useIsSelectedOption({ index, props });

  if ((typeof state.options[index] === "undefined" || !isOptionVisible(state, index)) && !hasVirtualization) {
    return null;
  }

  const isSelected = hasVirtualization ? isOptionSelectedVirtualized(index) : isOptionSelected(state, index);
  const isDisabled = providedProps.isDisabled || props.isDisabled || isReadOnly;
  const id = hasVirtualization ? idProp : state.options[index].id;

  return (
    <sc.Option
      {...getA11yAttributesForOption(isSelected)}
      {...moreProps}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      isDisabled={isDisabled}
      isSelected={isSelected}
      size={size}
      key={index}
      onClick={handleClickOption({ props, isDisabled, state, dispatch, onChangeContext })}
      data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
      data-pka-prevent-default-on-select={props.preventDefaultOnSelect}
      tabIndex={-1}
    >
      {typeof props.children === "function" ? props.children({ isSelected, isDisabled, id }) : props.children}
    </sc.Option>
  );
}

Option.displayName = "ListBox.Option";

Option.propTypes = {
  /** String, number or JSX content */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /* Controls if the option is selected or not, never combine it with defaultIsSelected */
  isSelected: PropTypes.bool,

  /** Describe if the option started as selected or not */
  defaultIsSelected: PropTypes.bool,

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
  preventDefaultOnSelect: PropTypes.bool,

  /** indicates if the option is under a virtualized component */
  hasVirtualization: PropTypes.bool,
};

Option.defaultProps = {
  isDisabled: false,
  isHidden: false,
  preventDefaultOnSelect: false,
  isSelected: null,
  defaultIsSelected: null,
  label: null,
  onClick: null,
  value: null,
  hasVirtualization: false,
};
