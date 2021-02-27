/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import * as constants from "@paprika/constants/lib/Constants";
import useI18n from "@paprika/l10n/lib/useI18n";
import ListBox from "@paprika/list-box";
import { filter } from "@paprika/list-box/lib/helpers/filter";
import Tag, { Tags } from "@paprika/tag";
import * as sc from "./ListBoxWithTags.styles";

const renderTrigger = ({
  allOptionsAreSelected,
  hasError,
  idListBoxContent,
  isDisabled,
  isReadOnly,
  onRemove,
  renderTag,
  selectedOptions,
  size,
  tagLabelKey,
  t,
}) => (...args) => {
  const [, , , attributes] = args;
  const { propsForTrigger, refTrigger, dispatch, types, handleKeyDown, handleKeyUp, isOpen } = attributes;

  function handleClick(event) {
    event.stopPropagation();

    if (event.key === "Enter" || event.key === " ") return;
    dispatch({ type: types.togglePopover });
  }

  const handleRemove = option => () => {
    onRemove(option);
  };

  function renderCaret(isDisabled) {
    return isOpen ? <sc.UpIcon isDisabled={isDisabled} /> : <sc.DownIcon isDisabled={isDisabled} />;
  }

  const triggerProps = propsForTrigger();
  const a11yTextOptions = selectedOptions.map(item => {
    return tagLabelKey === null ? item.label : item[tagLabelKey];
  });
  const a11yText = selectedOptions.length === 0 ? t("listBoxWithTags.placeholder") : a11yTextOptions.join(", ");

  return (
    <>
      <sc.Trigger
        {...triggerProps}
        aria-controls={idListBoxContent}
        allOptionsAreSelected={allOptionsAreSelected}
        hasError={hasError}
        isDisabled={isDisabled || isReadOnly}
        isReadOnly={isReadOnly}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        ref={refTrigger}
        size={size}
      >
        <Tags>
          {selectedOptions.map(item => {
            if (typeof renderTag === "function") {
              return renderTag({ option: item, Tag, onRemove: handleRemove(item) });
            }

            const label = tagLabelKey === null ? item.label : item[tagLabelKey];

            if (typeof label !== "string") {
              throw Error(
                `Your item ${JSON.stringify(
                  item
                )} must include the attribute "label", or you must indicate which attribute should be rendered as the label via the "tagLabelKey" prop.`
              );
            }

            return (
              <Tag as="li" key={label} onRemove={handleRemove(item)} size={size}>
                {label}
              </Tag>
            );
          })}
          {selectedOptions.length ? null : (
            <sc.PlaceHolder isDisabled={isDisabled} size={size}>
              {t("listBoxWithTags.placeholder")}
            </sc.PlaceHolder>
          )}
        </Tags>
        {allOptionsAreSelected ? null : renderCaret(isDisabled)}
      </sc.Trigger>
      <sc.TriggerLabel id={`${triggerProps.id}__label`}>
        {t("listBoxWithTags.a11y_text_trigger", { options: a11yText })}
      </sc.TriggerLabel>
    </>
  );
};

export default function ListBoxWithTags(props) {
  const {
    allOptionsAreSelected,
    allOptionsAreSelectedMessage,
    children,
    customOptionRegex,
    filter,
    hasError,
    isDisabled,
    isReadOnly,
    noResultsMessage,
    onAddCustomOption,
    onChange,
    onRemove,
    tagLabelKey,
    renderTag,
    selectedOptions,
    size,
    ...moreProps
  } = props;
  const { t } = useI18n();

  const refDivRoot = React.useRef(null);
  const refFilter = React.useRef(null);
  const [idListBoxContent] = React.useState(() => `list-box_${uuidv4()}__content`);

  const validSize = Object.values(ListBox.types.size).includes(size) ? size : ListBox.types.size.MEDIUM;

  function handleKeyDown(event) {
    const label = event.target.value;
    if (
      onAddCustomOption !== null &&
      typeof onAddCustomOption === "function" &&
      event.key === "Enter" &&
      customOptionRegex.test(label)
    ) {
      event.stopPropagation();
      onAddCustomOption(label);
      refFilter.current.reset();
    }
  }

  function handleChange(...args) {
    if (selectedOptions !== null && "length" in selectedOptions) {
      refFilter.current.reset();
    }

    onChange(...args);
  }

  const noResultMessageProp = noResultsMessage === null ? {} : { noResultsMessage };

  return (
    <div ref={refDivRoot}>
      <ListBox isMulti size={validSize} onChange={handleChange} {...moreProps}>
        <ListBox.Trigger>
          {renderTrigger({
            allOptionsAreSelected,
            hasError,
            idListBoxContent,
            isDisabled,
            isReadOnly,
            onRemove,
            renderTag,
            selectedOptions,
            size: validSize,
            tagLabelKey,
            t,
          })}
        </ListBox.Trigger>
        <ListBox.Box id={idListBoxContent} />
        {allOptionsAreSelected ? null : (
          <ListBox.Filter filter={filter} ref={refFilter} onKeyDown={handleKeyDown} {...noResultMessageProp} />
        )}
        {allOptionsAreSelected ? null : React.Children.count(children) > 0 ? (
          children
        ) : (
          <ListBox.RawItem>{noResultsMessage}</ListBox.RawItem>
        )}
        {allOptionsAreSelected && (
          <ListBox.RawItem>
            {allOptionsAreSelectedMessage || t("listBoxWithTags.all_items_have_been_selected")}
          </ListBox.RawItem>
        )}
      </ListBox>
    </div>
  );
}

ListBoxWithTags.displayName = "ListBoxWithTags";

ListBoxWithTags.A11y = ListBox.A11y;
ListBoxWithTags.Box = ListBox.Box;
ListBoxWithTags.Divider = ListBox.Divider;
ListBoxWithTags.Footer = ListBox.Footer;
ListBoxWithTags.Option = ListBox.Option;
ListBoxWithTags.Popover = ListBox.Popover;
ListBoxWithTags.RawItem = ListBox.RawItem;
ListBoxWithTags.filter = filter;

ListBoxWithTags.types = {
  size: {
    MEDIUM: [constants.size.MEDIUM],
    LARGE: [constants.size.LARGE],
  },
};

ListBoxWithTags.propTypes = {
  /** When this is true, it will display a message indicating all options are selected on the popover */
  allOptionsAreSelected: PropTypes.bool,

  /** Message to display when all options have been selected */
  allOptionsAreSelectedMessage: PropTypes.string,

  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,

  /** Regex that match the input of the user and reports to onAddCustomOption. The default is a basic email regex */
  customOptionRegex: PropTypes.instanceOf(RegExp),

  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter  */
  filter: PropTypes.func,

  /** If ListBox is in an error state  */
  hasError: PropTypes.bool,

  /** Disables the ListBox if true */
  isDisabled: PropTypes.bool,

  /** The ListBox will not allow value to be changed */
  isReadOnly: PropTypes.bool,

  /** String message to be display when there are not results  */
  noResultsMessage: PropTypes.node,

  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onAddCustomOption: PropTypes.func,

  /** Callback whenever the user change a selection on the ListBoxWithTags  */
  onChange: PropTypes.func,

  /** Callback once a tag is remove from the Trigger */
  onRemove: PropTypes.func,

  /** Render prop to override the default Tag style, see example for it's uses.  */
  renderTag: PropTypes.func,

  /** An array of id that helps the ListBoxWithTags to known what elements are selected  */
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({})),

  /** Size of the trigger and options (font size, height, padding, etc). */
  size: PropTypes.oneOf([ListBoxWithTags.types.size.MEDIUM, ListBoxWithTags.types.size.LARGE]),

  /** Provides an alternative for rendering the Tag label instead of using the default [{label:value}] coming from the og data */
  tagLabelKey: PropTypes.string,
};

ListBoxWithTags.defaultProps = {
  allOptionsAreSelected: false,
  allOptionsAreSelectedMessage: "",
  customOptionRegex: /^.+@.+\..+$/,
  filter: undefined,
  hasError: false,
  isDisabled: false,
  isReadOnly: false,
  noResultsMessage: null,
  onAddCustomOption: null,
  onChange: () => {},
  onRemove: () => {},
  renderTag: null,
  selectedOptions: null,
  size: ListBoxWithTags.types.size.MEDIUM,
  tagLabelKey: null,
};
