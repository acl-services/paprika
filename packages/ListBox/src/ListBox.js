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
};

export const defaultProps = {
  children: null,
  Filter: null, // eslint-disable-line
  Footer: null, // eslint-disable-line
  hasNotResultsMessage: "Your search did not match any options.",
  height: 200,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: null,
  onChange: () => {},
  placeholder: "Select...",
  renderCheckbox: undefined,
  Trigger: null, // eslint-disable-line
};

export function ListBox(props) {
  const [, dispatch] = useListBox();
  const { children, hasNotResultsMessage, height, placeholder, Trigger: TriggerProps, Footer, Filter } = props;

  const handleEffectHasFooter = effects.handleEffectHasFooter(Footer, dispatch);
  React.useEffect(handleEffectHasFooter, []);

  const triggerProps = {
    hasClearButton: true,
    onClickClear: () => {},
    placeholder,
    onFooterClickAccept: Footer ? Footer.props.onClickAccept : null,
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
          {Filter}
          <List height={height}>
            <Options>{children}</Options>
          </List>
          <NoResults label={hasNotResultsMessage} />
          {Footer}
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
  React.useEffect(handleEffectChildren, [props.children]);
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
    Footer, // eslint-disable-line
    Popover: PopoverWithProps, // eslint-disable-line
  } = props;

  const ListBoxProps = {
    children,
    Filter,
    Footer,
    hasNotResultsMessage,
    height,
    placeholder,
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
