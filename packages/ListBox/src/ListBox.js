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
import {
  useAdjustWidth,
  useChildrenChange,
  useHasFooter,
  useHasError,
  useIsDisabled,
  useIsPopOverOpen,
  useOnScrolled,
  useOptionSelected,
} from "./hooks";

export function ListBox(props) {
  const {
    children,
    hasImplicitAll,
    height,
    isOpen,
    placeholder,

    box = { props: {} },
    filter,
    footer,
    trigger: _trigger,

    ...moreProps
  } = props;

  const I18n = useI18n();
  const [state] = useListBox();
  const providedProps = React.useContext(PropsContext);

  const propsForTrigger = {
    hasClearButton: true,
    hasImplicitAll,
    onClickClear: null,
    onClickFooterAccept: footer ? footer.props.onClickAccept : null,
    placeholder: placeholder || I18n.t("listBox.trigger.placeholder"),
    morePropsForTrigger: moreProps,
  };

  const trigger = _trigger ? (
    React.cloneElement(_trigger, { ...propsForTrigger, ..._trigger.props })
  ) : (
    <Trigger {...propsForTrigger} />
  );

  const hasOptions = Boolean(React.Children.count(children));
  const listProps = {
    height,
    hasOptions,
    ...(state.isInline ? moreProps : {}),
  };

  console.log("listProps", listProps);

  return (
    <React.Fragment>
      {trigger}
      <Content onCancelFooter={footer ? footer.props.onClickCancel : null} hasOptions={hasOptions}>
        <Box {...box.props}>
          {providedProps.isReadOnly ? null : filter}
          <List {...listProps}>
            <Options isPopoverOpen={isOpen}>{children}</Options>
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

const ListBoxContainer = React.forwardRef((props, ref) => {
  const [state, dispatch] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const I18n = useI18n();

  const {
    children,
    hasError,
    hasImplicitAll,
    height,
    isDisabled,
    isInline,
    isMulti,
    onChange,
    placeholder,
    isOpen,
    size,

    // exclude from moreProps
    id,
    isReadOnly,

    box, // eslint-disable-line
    filter, // eslint-disable-line
    footer, // eslint-disable-line
    popover, // eslint-disable-line
    trigger, // eslint-disable-line

    ...moreProps
  } = props;

  // IMPERATIVE API
  const imperativeHandle = handleImperative({ state, dispatch, onChangeContext });
  React.useImperativeHandle(ref, imperativeHandle);

  // HOOKS
  // eslint-disable-next-line react/prop-types
  const shouldTriggerKeepFocus = popover && popover.props.shouldKeepFocus;

  useAdjustWidth();
  useChildrenChange(children);
  useHasError(hasError);
  useIsDisabled(isDisabled);
  useIsPopOverOpen(shouldTriggerKeepFocus);
  useOnScrolled();
  useOptionSelected();
  useHasFooter(footer);

  const propsForListBox = {
    hasImplicitAll,
    height,
    placeholder: placeholder || I18n.t("listBox.trigger.placeholder"),
    isOpen,

    box,
    filter,
    footer,
    trigger,

    ...moreProps,
  };

  const listBox = <ListBox {...propsForListBox}>{children}</ListBox>;

  if (isInline) {
    return listBox;
  }

  if (popover) {
    const PopoverClone = React.cloneElement(popover, {
      ...popover.props, // eslint-disable-line react/prop-types
      children: listBox,
    });
    return PopoverClone;
  }

  return <Popover>{listBox}</Popover>;
});

ListBoxContainer.types = {
  size: constants.defaultSize,
};

export const propTypes = {
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: PropTypes.arrayOf(PropTypes.node),

  /** If ListBox is in an error state  */
  hasError: PropTypes.bool,

  /** Has implicit "All items selected" value when no item is selected */
  hasImplicitAll: PropTypes.bool,

  /** Indicate which is the height for the options container */
  height: PropTypes.number,

  /** DOM id attribute for focussable control (trigger element or ul element if isInline=true) */
  id: PropTypes.string,

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

  /** Defaults label to display when the ListBox has not option selected */
  placeholder: PropTypes.string,

  /** Size of the trigger and options (font size, height, padding, etc). */
  size: PropTypes.oneOf([
    ListBoxContainer.types.size.SMALL,
    ListBoxContainer.types.size.MEDIUM,
    ListBoxContainer.types.size.LARGE,
  ]),
};

ListBox.propTypes = {
  ...propTypes,
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export const defaultProps = {
  children: null,
  filter: null, // eslint-disable-line
  footer: null, // eslint-disable-line
  hasError: false,
  hasImplicitAll: false,
  height: 200,
  id: null,
  isDisabled: false,
  isInline: false,
  isMulti: false,
  isOpen: null,
  isReadOnly: false,
  onChange: () => {},
  placeholder: null,
  size: ListBoxContainer.types.size.MEDIUM,
  trigger: null, // eslint-disable-line
};

ListBoxContainer.propTypes = propTypes;
ListBoxContainer.defaultProps = defaultProps;

export default ListBoxContainer;
