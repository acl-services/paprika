import React from "react";
import PropTypes from "prop-types";
import Box from "./components/Box";
import Content from "./components/Content";
import Filter from "./components/Filter";
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

  /** Turn on the input filter for the options */
  hasFilter: PropTypes.bool,

  /** Turn the clear button at the right side of the Trigger */
  hasClearButton: PropTypes.bool,

  /** Activate a list of options which allow the user to select the entire group click a checkbox */
  hasGroupSelection: PropTypes.bool,

  /** Indicate which is the height for the options container */
  height: PropTypes.number,

  /** [Advance] instead of marking the option as checked/unchecked will toggle the option between visible and hidden
      this is monstly useful at the moment of composing the listbox into a more complex component, see ListBoxWithTags
      as example
  */
  hideOptionOnSelected: PropTypes.bool,

  /** Disable the entire ListBox */
  isDisabled: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** This options will display the listbox without the Popover */
  isInlineDisplay: PropTypes.bool,

  /** When true the ListBox will try to focus to the options container asap the
  popover is open */
  isPopoverEager: PropTypes.bool,

  /** Indicates if the popover is visible */
  isPopoverOpen: PropTypes.bool,

  /** Message to be display once the filtering process doesn't find a match */
  hasNotResultsMessage: PropTypes.node,

  /** Callback returning the current selected index on the ListBox and more arguments */
  onChange: PropTypes.func,

  /** Callback ocurring after the user click the [x] clear button on the Trigger area */
  onClickClear: PropTypes.func,

  /** Callback announcing which option has been marked as selected */
  onSelected: PropTypes.func,

  /** Callback announcing which option has been marked as deselected */
  onDeselected: PropTypes.func,

  /** Callback happening once the Popover has close */
  onClose: PropTypes.func,

  /** Defaults label to display when the ListBox has not option selected */
  placeholder: PropTypes.string,

  /** [Advance] Override the 'scroll' target element for popover default is document.body  */
  getScrollContainer: PropTypes.func,

  /** [Advance] When composing the component will prevent to close the ListBox when
      the user interact with the Trigger container */
  preventOnBlurOnTrigger: PropTypes.bool,

  /** [Advance] Allows to take over the render method for the label inside of the Trigger Component */
  renderTrigger: PropTypes.func,

  /** [Advance] Allows to take over the render method for the Checker.
      When `isMulti` prop is active, the default type of checker is a checkbox, in case you don't
      want to render a checkbox you can return null ex. renderCheckbox={() =>  null} */
  renderCheckbox: PropTypes.func,

  /** Overrides the filter function and delegate the responsibility to the developer */
  filter: PropTypes.func,

  /** z-index for the popover */
  zIndex: PropTypes.number,
};

export const defaultProps = {
  children: null,
  filter: null,
  getScrollContainer: null,
  hasClearButton: false,
  hasFilter: false,
  hasGroupSelection: false,
  hasNotResultsMessage: "Your search did not match any options.",
  height: 200,
  hideOptionOnSelected: false,
  isDisabled: false,
  isInlineDisplay: false,
  isMulti: false,
  isPopoverEager: true,
  isPopoverOpen: false,
  onChange: () => {},
  onClickClear: null,
  onClose: () => {},
  onDeselected: () => {},
  onSelected: () => {},
  placeholder: "Select one of the options",
  preventOnBlurOnTrigger: false,
  renderCheckbox: undefined,
  renderTrigger: null,
  zIndex: 1,
};

export function ListBox(props) {
  const [state, dispatch] = useListBox();
  const { children, hasNotResultsMessage, height, onClickClear, placeholder, renderTrigger } = props;
  const [Footer, setFooter] = React.useState(null);

  const handleFooterFound = Footer => {
    if (!state.hasFooter) {
      dispatch({
        type: useListBox.types.setHasFooter,
        payload: true,
      });
    }

    setFooter(Footer);
  };

  return (
    <React.Fragment>
      <Trigger onClickClear={onClickClear} renderTrigger={renderTrigger} placeholder={placeholder} />
      <Content>
        <Box>
          <Filter filter={props.filter} />
          <List height={height}>
            <Options onFooterFound={handleFooterFound}>{children}</Options>
          </List>
          <NoResults label={hasNotResultsMessage} />
          {Footer || null}
        </Box>
      </Content>
    </React.Fragment>
  );
}

ListBox.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.func,
  hasNotResultsMessage: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  onClickClear: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  renderTrigger: PropTypes.func,
};

ListBox.defaultProps = {
  filter: null,
  onClickClear: null,
  renderTrigger: null,
};

const ListBoxContainer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  // IMPERATIVE API
  const imperativeHandle = handleImperative(state, dispatch);
  React.useImperativeHandle(ref, imperativeHandle);

  // EFFECTS
  const handleEffectHeightChange = effects.handleEffectHeightChange(props, state, dispatch);
  const handleEffectIsDisabledChange = effects.handleEffectIsDisabledChange(props, dispatch);
  const handleEffectIsPopOverOpen = effects.handleEffectIsPopOverOpen(state, dispatch);
  const handleEffectListBoxScrolled = effects.handleEffectListBoxScrolled(state);
  const handleEffectListBoxWidth = effects.handleEffectListBoxWidth(state, dispatch);
  const handleEffectChildrenLength = effects.handleEffectChildrenLength(props, state, dispatch);

  React.useEffect(handleEffectHeightChange, [props.height]);
  React.useEffect(handleEffectIsDisabledChange, [props.isDisabled]);
  React.useLayoutEffect(handleEffectIsPopOverOpen, [state.isPopoverOpen]);
  React.useEffect(handleEffectListBoxWidth, [state.refTriggerContainer.current]);
  React.useLayoutEffect(handleEffectListBoxScrolled, [state.activeOption]);
  React.useLayoutEffect(handleEffectChildrenLength, [props.children]);

  const {
    children,
    filter,
    hasFilter,
    hasNotResultsMessage,
    height,
    isInlineDisplay,
    isMulti,
    isPopoverEager,
    isPopoverOpen,
    onChange,
    onClickClear,
    onDeselected,
    onSelected,
    placeholder,
    renderCheckbox,
    renderTrigger,
    ...moreProps
  } = props;

  const ListBoxProps = {
    children,
    filter,
    hasNotResultsMessage,
    height,
    onClickClear,
    onDeselected,
    onSelected,
    placeholder,
    renderTrigger,
  };

  if (isInlineDisplay) {
    return <ListBox {...ListBoxProps}>{children}</ListBox>;
  }

  return (
    <Popover {...moreProps} isEager={isPopoverEager}>
      <ListBox {...ListBoxProps}>{children}</ListBox>
    </Popover>
  );
});

export default ListBoxContainer;

ListBoxContainer.propTypes = propTypes;
ListBoxContainer.defaultProps = defaultProps;
