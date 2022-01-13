import React from "react";
import PropTypes from "prop-types";
import "@paprika/helpers/lib/polyfills/elementScroll";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as constants from "@paprika/constants/lib/Constants";
import Box from "./components/Box";
import Content from "./components/Content";
import List from "./components/List";
import NoResults from "./components/NoResults";
import Options from "./components/Options";
import Popover from "./components/Popover";
import Trigger from "./components/Trigger";
import useListBox from "./useListBox";
import { OnChangeContext } from "./store/OnChangeProvider";
import { PropsContext } from "./store/PropsProvider";
import handleImperative from "./imperative";
import { useAdjustWidth, useChildrenChange, useHasFooter, useIsPopOverOpen, useOptionSelected } from "./hooks";

export function ListBox(props) {
  const {
    children,
    hasImplicitAll,
    height,
    isOpen,

    // exclude from moreProps
    hasError,
    hasTag,
    isDisabled,
    isInline: excludedIsInline,
    isMulti,
    isReadOnly: excludedIsReadOnly,
    onChange,
    placeholder,
    size,
    contentOffsetX,
    contentOffsetY,

    /* eslint-disable react/prop-types */
    data,
    box,
    filter,
    footer,
    trigger: _trigger,
    content,
    /* eslint-enable react/prop-types */

    ...moreProps
  } = props;

  const I18n = useI18n();
  const [{ noResultsFound, refFooterContainer }] = useListBox();
  const { isInline, isReadOnly } = React.useContext(PropsContext);

  /* eslint-disable react/prop-types */
  const onClickFooterAccept = footer ? footer.props.onClickAccept : null;
  const onCancelFooter = footer ? footer.props.onClickCancel : null;
  const noResultsMessage = filter ? filter.props.noResultsMessage || I18n.t("listBox.filter.no_results_message") : null;
  const boxProps = box ? box.props : null;
  const contentProps = content ? { ...content.props, onCancelFooter } : { onCancelFooter };
  /* eslint-enable react/prop-types */

  const propsForTrigger = {
    hasClearButton: true,
    hasImplicitAll,
    onClickClear: null,
    onClickFooterAccept,
  };

  const listProps = {
    height,
    hasOptions: !noResultsFound,
  };

  const trigger = _trigger ? React.cloneElement(_trigger, { ..._trigger.props }) : <Trigger {...propsForTrigger} />;

  const listBox = (
    <>
      {trigger}
      {isInline || !isReadOnly ? (
        <Content {...contentProps}>
          <Box {...boxProps}>
            {isReadOnly ? null : filter}
            <List {...listProps}>
              <Options isPopoverOpen={isOpen}>{children}</Options>
            </List>
            {filter ? <NoResults label={noResultsMessage} /> : null}
            {footer && !isReadOnly ? React.cloneElement(footer, { ref: refFooterContainer }) : null}
          </Box>
        </Content>
      ) : null}
    </>
  );

  return isInline ? (
    <div data-pka-anchor="list-box" {...moreProps}>
      {listBox}
    </div>
  ) : (
    listBox
  );
}

const ListBoxContainer = React.forwardRef((props, ref) => {
  const {
    children,
    hasImplicitAll,
    height,
    isMulti,
    onChange,
    isOpen,

    // exclude from moreProps
    hasError,
    hasTag,
    isDisabled,
    isInline,
    isReadOnly,
    placeholder,
    size,
    contentOffsetX,
    contentOffsetY,

    /* eslint-disable react/prop-types */
    box,
    filter,
    footer,
    popover,
    trigger,
    content,
    /* eslint-enable react/prop-types */

    ...moreProps
  } = props;

  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const providedProps = React.useContext(PropsContext);

  /* eslint-disable react/prop-types */
  const shouldTriggerKeepFocus = popover && popover.props.shouldKeepFocus;
  const popoverProps = popover && popover.props;
  /* eslint-enable react/prop-types */

  // IMPERATIVE API
  const imperativeHandle = handleImperative({
    state,
    dispatch,
    onChangeContext,
  });
  React.useImperativeHandle(ref, imperativeHandle);

  // HOOKS
  useAdjustWidth();
  useChildrenChange(children);
  useIsPopOverOpen(shouldTriggerKeepFocus);
  useOptionSelected();
  useHasFooter(footer);

  const propsForListBox = {
    hasImplicitAll,
    height,
    isOpen,

    box,
    filter,
    footer,
    trigger,
    content,

    ...(providedProps.isInline ? moreProps : {}),
  };

  const listBox = <ListBox {...propsForListBox}>{children}</ListBox>;

  if (providedProps.isInline) {
    return listBox;
  }

  if (popover) {
    const PopoverClone = React.cloneElement(popover, {
      ...popoverProps,
      children: listBox,
    });
    return PopoverClone;
  }

  delete moreProps.selectedKeys;
  delete moreProps.setSelectedKeys;
  delete moreProps.snapshotSelectedKeys;

  return (
    <div data-pka-anchor="list-box" {...moreProps}>
      <Popover>{listBox}</Popover>
    </div>
  );
});

ListBoxContainer.types = {
  size: constants.defaultSize,
};

export const propTypes = {
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: PropTypes.arrayOf(PropTypes.node),

  /** If ListBox is in an error state  */
  hasError: PropTypes.bool,

  /** If there is a tag */
  hasTag: PropTypes.bool,

  /** Has implicit "All items selected" value when no item is selected */
  hasImplicitAll: PropTypes.bool,

  /** The maximum height for the options container. Using a number implies px units. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Disables the ListBox if true */
  isDisabled: PropTypes.bool,

  /** This options will display the list-box without the Popover */
  isInline: PropTypes.bool,

  /** Let the user to select multiple options at same time */
  isMulti: PropTypes.bool,

  /** Indicates if the popover is visible */
  isOpen: PropTypes.bool,

  /** The ListBox will not allow value to be changed */
  isReadOnly: PropTypes.bool,

  /** Callback returning the current selection on the ListBox */
  onChange: PropTypes.func,

  /** Default label for trigger when the ListBox has no option selected */
  placeholder: PropTypes.string,

  /** Size of the trigger and options (font size, height, padding, etc). */
  size: PropTypes.oneOf([
    ListBoxContainer.types.size.SMALL,
    ListBoxContainer.types.size.MEDIUM,
    ListBoxContainer.types.size.LARGE,
  ]),

  /** Lets the user control the X-axis offset for the ListBox content */
  contentOffsetX: PropTypes.number,

  /** Lets the user control the Y-axis offset for the ListBox content */
  contentOffsetY: PropTypes.number,
};

export const defaultProps = {
  children: null,
  hasError: false,
  hasTag: false,
  hasImplicitAll: false,
  height: 200,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: false,
  isReadOnly: false,
  onChange: () => {},
  placeholder: null,
  size: ListBoxContainer.types.size.MEDIUM,
  contentOffsetX: 0,
  contentOffsetY: 0,
};

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;

ListBoxContainer.propTypes = propTypes;
ListBoxContainer.defaultProps = defaultProps;

export default ListBoxContainer;
