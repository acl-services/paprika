import React from "react";
import PropTypes from "prop-types";
// import useListBox from "../../useListBox";
// import { OnChangeContext } from "../../store/OnChangeProvider";
// import { PropsContext } from "../../store/PropsProvider";
// import { getA11yAttributesForOption } from "../../helpers/DOMAttributes";
// import { isOptionVisible, isOptionSelected, handleClickOption } from "../Options/helpers/options";
// import useIsSelectedOption from "./useIsSelectedOption";
import * as sc from "./Option.styles";

function Option(props) {
  const { index, groupId, label, id, isSelectedValue, handleOnClick, ...moreProps } = props; // eslint-disable-line
  // const [state, dispatch] = useListBox();
  // const providedProps = React.useContext(PropsContext);
  // const { isReadOnly, size } = providedProps;
  // const onChangeContext = React.useContext(OnChangeContext);

  // useIsSelectedOption({ index, props });

  // if (typeof state.options[index] === "undefined" || !isOptionVisible(state, index)) {
  //   return null;
  // }

  // const isSelected = isOptionSelected(state, index);
  // const isDisabled = providedProps.isDisabled || props.isDisabled || isReadOnly;
  // const id = state.options[index].id;

  console.log(props);

  return (
    <sc.Option
      {...moreProps}
      // {...getA11yAttributesForOption(isSelected)}
      hasPreventDefaultOnSelect={props.preventDefaultOnSelect}
      id={id}
      // isDisabled={isDisabled}
      isSelected={isSelectedValue}
      // size={size}
      key={index}
      onClick={() => handleOnClick({ onClick: props.onClick, index })} // also need to pass isDisabled
      // data-pka-anchor={isSelected ? "list-option--is-selected" : "list-option"}
      data-pka-prevent-default-on-select={props.preventDefaultOnSelect}
      tabIndex={-1}
    >
      {typeof props.children === "function"
        ? props.children({ isSelected: isSelectedValue, isDisabled: props.isDisabled, id })
        : props.children}
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

  handleOnClick: PropTypes.func.isRequired,

  id: PropTypes.string,

  isSelectedValue: PropTypes.bool.isRequired,

  /** Value of your option this can be any data structure  */
  value: PropTypes.any, // eslint-disable-line

  /** Internal prop, which shouldn't be documented */
  preventDefaultOnSelect: PropTypes.bool,
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
  id: null,
};

Option = React.memo(Option);
export default Option;
