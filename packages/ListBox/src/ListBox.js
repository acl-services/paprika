import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Box from "./components/Box";
import Content from "./components/Content";
import List from "./components/List";
import NoResults from "./components/NoResults";
import Options from "./components/Options";
import Popover from "./components/Popover";
import Trigger from "./components/Trigger";
import useListBox from "./useListBox";
import { OnChangeContext } from "./store/OnChangeProvider";
import handleImperative from "./imperative";
import "@paprika/helpers/lib/dom/elementScrollToPolyfill";

import {
  useAdjustWidth,
  useChildrenChange,
  useHasFooter,
  useIsDisabled,
  useIsPopOverOpen,
  useOnScrolled,
  useOptionSelected,
} from "./hooks";

export const propTypes = {
  /** Child of type <ListBox.Option /> */
  children: PropTypes.node,

  /** Has implicit "All items selected" value when no item is selected */
  hasImplicitAll: PropTypes.bool,

  /** Indicate which is the height for the options container */
  height: PropTypes.number,

  /** Disables the ListBox if true */
  isDisabled: PropTypes.bool,

  /** This options will display the listbox without the Popover */
  isInline: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** Indicates if the popover is visible */
  isOpen: PropTypes.bool,

  /** Callback returning the current selection on the ListBox */
  onChange: PropTypes.func,

  /** Defaults label to display when the ListBox has not option selected */
  placeholder: PropTypes.string,

  /** Size of the trigger and options (font size, height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

export const defaultProps = {
  children: null,
  filter: null, // eslint-disable-line
  footer: null, // eslint-disable-line
  hasImplicitAll: false,
  height: 200,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: null,
  onChange: () => {},
  placeholder: null,
  size: ShirtSizes.MEDIUM,
  trigger: null, // eslint-disable-line
};

export function ListBox(props) {
  const [state] = useListBox();
  const {
    children,
    hasImplicitAll,
    height,
    placeholder,
    trigger: _trigger,
    footer,
    filter,
    box = { props: {} },
  } = props;
  const I18n = useI18n();
  const propsForTrigger = {
    hasClearButton: true,
    hasImplicitAll,
    onClickClear: null,
    placeholder: placeholder || I18n.t("listBox.trigger.placeholder"),
    onFooterClickAccept: footer ? footer.props.onClickAccept : null,
  };

  const trigger = _trigger ? (
    React.cloneElement(_trigger, { ...propsForTrigger, ..._trigger.props })
  ) : (
    <Trigger {...propsForTrigger} />
  );

  return (
    <React.Fragment>
      {trigger}
      <Content onCancelFooter={footer ? footer.props.onClickCancel : null}>
        <Box {...box.props}>
          {filter}
          <List height={height}>
            <Options isPopoverOpen={props.isOpen}>{children}</Options>
          </List>
          {filter ? (
            <NoResults label={filter.props.noResultsMessage || I18n.t("listBox.filter.no_results_message")} />
          ) : null}
          {footer ? React.cloneElement(footer, { ref: state.refFooterContainer }) : null}
        </Box>
      </Content>
    </React.Fragment>
  );
}

ListBox.propTypes = {
  ...propTypes,
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const ListBoxContainer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const I18n = useI18n();

  const {
    box, // eslint-disable-line
    children,
    filter, // eslint-disable-line
    footer, // eslint-disable-line
    hasImplicitAll,
    height,
    isInline,
    placeholder,
    popover, // eslint-disable-line
    isOpen,
    trigger, // eslint-disable-line
  } = props;

  // IMPERATIVE API
  const imperativeHandle = handleImperative({ state, dispatch, onChangeContext });
  React.useImperativeHandle(ref, imperativeHandle);

  // HOOKS
  // eslint-disable-next-line react/prop-types
  const shouldTriggerKeepFocus = popover && popover.props.shouldKeepFocus;

  useAdjustWidth();
  useChildrenChange(children);
  useIsDisabled(props.isDisabled);
  useIsPopOverOpen(shouldTriggerKeepFocus);
  useOnScrolled();
  useOptionSelected();
  useHasFooter(footer);

  const propsForListBox = {
    children,
    filter,
    footer,
    hasImplicitAll,
    height,
    placeholder: placeholder || I18n.t("listBox.trigger.placeholder"),
    trigger,
    isOpen,
    box,
  };

  const listBox = <ListBox {...propsForListBox}>{children}</ListBox>;

  if (isInline) {
    return listBox;
  }

  if (popover) {
    const PopoverClone = React.cloneElement(popover, {
      // eslint-disable-next-line react/prop-types
      ...popover.props,
      children: listBox,
    });
    return PopoverClone;
  }

  return <Popover>{listBox}</Popover>;
});

ListBoxContainer.propTypes = propTypes;
ListBoxContainer.defaultProps = defaultProps;

export default ListBoxContainer;
