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

  /** Turn on/off the clear button at the right side of the Trigger */
  hasClearButton: PropTypes.bool,

  /** Indicate which is the height for the options container */
  height: PropTypes.number,

  /** [Advance] instead of marking the option as checked/unchecked will toggle the option between visible and hidden */
  hideOptionOnSelected: PropTypes.bool,

  /** Disable the entire ListBox */
  isDisabled: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** This options will display the listbox without the Popover */
  isInline: PropTypes.bool,

  /** Indicates if the popover is visible */
  isOpen: PropTypes.bool,

  /** Message to be display once the filtering process doesn't find a match */
  hasNotResultsMessage: PropTypes.node,

  /** Callback returning the current selection on the ListBox */
  onChange: PropTypes.func,

  /** Callback ocurring after the user click the [x] clear button on the Trigger area */
  onClickClear: PropTypes.func,

  /** Defaults label to display when the ListBox has not option selected */
  placeholder: PropTypes.string,

  /** [Advance] When composing the component will prevent to close the ListBox when
      the user interact with the Trigger container */
  preventOnBlurForTriggerListBox: PropTypes.bool,

  /** [Advance] Allows to take over the render method for the label inside of the Trigger Component */
  renderTrigger: PropTypes.func,

  /** [Advance] Allows to take over the render method for the Checker.
      When `isMulti` prop is active, the default type of checker is a checkbox, in case you don't
      want to render a checkbox you can return null ex. renderCheckbox={() =>  null} */
  renderCheckbox: PropTypes.func,
};

export const defaultProps = {
  children: null,
  hasClearButton: true,
  hasNotResultsMessage: "Your search did not match any options.",
  height: 200,
  hideOptionOnSelected: false,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: null,
  onChange: () => {},
  onClickClear: null,
  placeholder: "Select one of the options",
  preventOnBlurForTriggerListBox: false,
  renderCheckbox: undefined,
  renderTrigger: null,
};

export function ListBox(props) {
  const [state, dispatch] = useListBox();
  const { children, hasNotResultsMessage, height, onClickClear, placeholder, renderTrigger } = props;
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

  return (
    <React.Fragment>
      <Trigger
        hasClearButton={props.hasClearButton}
        onClickClear={onClickClear}
        renderTrigger={renderTrigger}
        placeholder={placeholder}
        onFooterClickAccept={footer ? footer.props.onClickAccept : null}
      />
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
  hasClearButton: PropTypes.bool,
  hasNotResultsMessage: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  onClickClear: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  renderTrigger: PropTypes.func,
};

ListBox.defaultProps = {
  onClickClear: null,
  renderTrigger: null,
  hasClearButton: true,
};

const ListBoxContainer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  // IMPERATIVE API
  const imperativeHandle = handleImperative(state, dispatch);
  React.useImperativeHandle(ref, imperativeHandle);

  // EFFECTS
  const handleEffectChildren = effects.handleEffectChildren(props, state, dispatch);
  const handleEffectHeightChange = effects.handleEffectHeightChange(props, state, dispatch);
  const handleEffectIsDisabledChange = effects.handleEffectIsDisabledChange(props, dispatch);
  const handleEffectIsPopOverOpen = effects.handleEffectIsPopOverOpen(state, dispatch);
  const handleEffectListBoxScrolled = effects.handleEffectListBoxScrolled(state);
  const handleEffectListBoxWidth = effects.handleEffectListBoxWidth(state, dispatch);
  const handleEffectOptionSelected = effects.handleEffectOptionSelected(state, dispatch);

  React.useEffect(handleEffectHeightChange, [props.height]);
  React.useEffect(handleEffectIsDisabledChange, [props.isDisabled]);
  React.useEffect(handleEffectListBoxWidth, [state.refTriggerContainer.current]);
  React.useEffect(handleEffectOptionSelected, [state.selectedOptions]);
  React.useLayoutEffect(handleEffectChildren, [props.children]);
  React.useLayoutEffect(handleEffectIsPopOverOpen, [state.isOpen]);
  React.useLayoutEffect(handleEffectListBoxScrolled, [state.activeOption]);

  const {
    children,
    hasClearButton,
    hasNotResultsMessage,
    height,
    isInline,
    onClickClear,
    placeholder,
    renderTrigger,
    Filter, // eslint-disable-line
    Popover: PopoverWithProps, // eslint-disable-line
  } = props;

  const ListBoxProps = {
    children,
    hasClearButton,
    hasNotResultsMessage,
    height,
    onClickClear,
    placeholder,
    renderTrigger,
    Filter,
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
