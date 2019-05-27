import React from "react";
import PropTypes from "prop-types";
import Box from "./components/Box";
import Content from "./components/Content";
import List from "./components/List";
import NoResults from "./components/NoResults";
import Options from "./components/Options";
import Popover from "./components/Popover";
import Trigger from "./components/Trigger";
import useListBox from "./useListBox";
import handleImperative from "./imperative";
import * as effects from "./effects";

export const propTypes = {
  /** Child of type <ListBox.Option /> */
  children: PropTypes.node,

  /** Disable the entire ListBox */
  isDisabled: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** This options will display the listbox without the Popover */
  isInline: PropTypes.bool,

  /** Indicates if the popover is visible */
  isOpen: PropTypes.bool,

  /** Callback returning the current selection on the ListBox */
  onChange: PropTypes.func,

  /** Defaults label to display when the ListBox has not option selected */
  placeholder: PropTypes.string,

  /** Indicate which is the height for the options container */
  height: PropTypes.number,

  /** Message to be display once the filtering process doesn't find a match */
  hasNotResultsMessage: PropTypes.node,

  /** [Advance] Allows to take over the render method for the Checker.
  When `isMulti` prop is active, the default type of checker is a checkbox, in case you don't
  want to render a checkbox you can return null ex. renderCheckbox={() =>  null} */
  renderCheckbox: PropTypes.func,

  /** [Advance] instead of marking the option as checked/unchecked will toggle the option between visible and hidden */
  hideOptionOnSelected: PropTypes.bool,

  /** [Advance] When composing the component will prevent to close the ListBox when
      the user interact with the Trigger container */
  preventOnBlurForTriggerListBox: PropTypes.bool,
};

export const defaultProps = {
  children: null,
  hasNotResultsMessage: "Your search did not match any options.",
  height: 200,
  hideOptionOnSelected: false,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: null,
  onChange: () => {},
  placeholder: "Select...",
  preventOnBlurForTriggerListBox: false,
  renderCheckbox: undefined,
};

export function ListBox(props) {
  const [state, dispatch] = useListBox();
  const { children, hasNotResultsMessage, height, placeholder, Trigger: TriggerProps } = props;
  const [footer, setFooter] = React.useState(null);

  const handleFooterFound = footer => {
    if (!state.hasFooter) {
      dispatch({
        type: useListBox.types.setHasFooter,
        payload: true,
      });
    }

    setFooter(footer);
  };

  const triggerProps = {
    hasClearButton: true,
    onClickClear: () => {},
    placeholder,
    onFooterClickAccept: footer ? footer.props.onClickAccept : null,
  };

  const trigger = TriggerProps ? (
    React.cloneElement(TriggerProps, { ...triggerProps, ...TriggerProps.props })
  ) : (
    <Trigger {...triggerProps} />
  );

  return (
    <React.Fragment>
      {trigger}
      <Content>
        <Box>
          {props.Filter || null}
          <List height={height}>
            <Options onFooterFound={handleFooterFound}>{children}</Options>
          </List>
          <NoResults label={hasNotResultsMessage} />
          {<div ref={state.refFooterContainer}>{footer}</div> || null}
        </Box>
      </Content>
    </React.Fragment>
  );
}

ListBox.propTypes = {
  ...propTypes,
  children: PropTypes.node.isRequired,
  hasNotResultsMessage: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

ListBox.defaultProps = {};

const ListBoxContainer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  // IMPERATIVE API
  const imperativeHandle = handleImperative(state, dispatch);
  React.useImperativeHandle(ref, imperativeHandle);

  // EFFECTS
  const handleEffectChildren = effects.handleEffectChildren(props, state, dispatch);
  const handleEffectIsDisabledChange = effects.handleEffectIsDisabledChange(props, dispatch);
  const handleEffectIsPopOverOpen = effects.handleEffectIsPopOverOpen(state, dispatch);
  const handleEffectListBoxScrolled = effects.handleEffectListBoxScrolled(state);
  const handleEffectListBoxWidth = effects.handleEffectListBoxWidth(state, dispatch);
  const handleEffectOptionSelected = effects.handleEffectOptionSelected(state, dispatch);

  React.useEffect(handleEffectIsDisabledChange, [props.isDisabled]);
  React.useEffect(handleEffectListBoxWidth, [state.refTriggerContainer.current]);
  React.useEffect(handleEffectOptionSelected, [state.selectedOptions]);
  React.useLayoutEffect(handleEffectChildren, [props.children]);
  React.useLayoutEffect(handleEffectIsPopOverOpen, [state.isOpen]);
  React.useLayoutEffect(handleEffectListBoxScrolled, [state.activeOption]);

  const {
    children,
    hasNotResultsMessage,
    height,
    isInline,
    placeholder,
    Filter, // eslint-disable-line
    Trigger, // eslint-disable-line
    Popover: PopoverWithProps, // eslint-disable-line
  } = props;

  const ListBoxProps = {
    children,
    hasNotResultsMessage,
    height,
    placeholder,
    Filter,
    Trigger,
  };

  const listBox = <ListBox {...ListBoxProps}>{children}</ListBox>;

  if (isInline) {
    return listBox;
  }

  if (PopoverWithProps) {
    const PopoverClone = React.cloneElement(PopoverWithProps, {
      ...PopoverWithProps.props,
      children: listBox,
    });
    return PopoverClone;
  }

  return <Popover>{listBox}</Popover>;
});

ListBoxContainer.propTypes = propTypes;
ListBoxContainer.defaultProps = defaultProps;

export default ListBoxContainer;
