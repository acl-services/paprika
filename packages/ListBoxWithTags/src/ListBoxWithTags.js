/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import useI18n from "@paprika/l10n/lib/useI18n";
import ListBox from "@paprika/list-box";
import { filter } from "@paprika/list-box/lib/helpers/filter";
import Tag, { Tags } from "@paprika/tag";
/* eslint-disable no-restricted-syntax */
import * as triggerSc from "@paprika/list-box/lib/components/Trigger/Trigger.styles";
/* eslint-enable no-restricted-syntax */
import * as sc from "./ListBoxWithTags.styles";

const propTypes = {
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter  */
  filter: PropTypes.func,
  /** String message to be display when there are not results  */
  noResultsMessage: PropTypes.node,
  /** Callback whenever the user change a selection on the ListBoxWithTags  */
  onChange: PropTypes.func,
  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onAddCustomOption: PropTypes.func,
  /** Callback once a tag is remove from the Trigger */
  onRemove: PropTypes.func,
  /** Regex that match the input of the user and reports to onAddCustomOption. The default is a basic email regex */
  customOptionRegex: PropTypes.instanceOf(RegExp),
  /** Render prop to override the default Tag style, see example for it's uses.  */
  renderTag: PropTypes.func,
  /** An array of id that helps the ListBoxWithTags to known what elements are selected  */
  selectedOptions: PropTypes.arrayOf(PropTypes.shape({})),
  /** Provides an alternative for rendering the Tag label instead of using the default [{label:value}] coming from the og data */
  tagLabelKey: PropTypes.string,
  /** When this is true, it will display a message indicating all options are selected on the popover */
  allOptionsAreSelected: PropTypes.bool,
  /** Message to display when all options have been selected */
  allOptionsAreSelectedMessage: PropTypes.string,
};

const defaultProps = {
  customOptionRegex: /^.+@.+\..+$/,
  filter: undefined,
  noResultsMessage: null,
  onAddCustomOption: null,
  onChange: () => {},
  onRemove: () => {},
  renderTag: null,
  tagLabelKey: null,
  selectedOptions: null,
  allOptionsAreSelected: false,
  allOptionsAreSelectedMessage: "",
};

const renderTrigger = ({
  t,
  size,
  selectedOptions,
  onRemove,
  listBoxId,
  renderTag,
  tagLabelKey,
  allOptionsAreSelected,
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

  function renderCaret() {
    return isOpen ? <triggerSc.UpIcon /> : <triggerSc.DownIcon />;
  }

  const a11yTextOptions = selectedOptions.map(item => {
    return tagLabelKey === null ? item.label : item[tagLabelKey];
  });

  const a11yText = selectedOptions.length === 0 ? t("listBoxWithTags.placeholder") : a11yTextOptions.join(", ");

  return (
    <sc.Trigger
      a11yText={t("listBoxWithTags.a11y_text_trigger", { options: a11yText })}
      aria-controls={listBoxId}
      aria-expanded={isOpen}
      aria-haspopup
      ref={refTrigger}
      {...propsForTrigger()}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      size={size}
      allOptionsAreSelected={allOptionsAreSelected}
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
          <sc.PlaceHolder>
            <sc.PlaceHolderText>{t("listBoxWithTags.placeholder")}</sc.PlaceHolderText>
          </sc.PlaceHolder>
        )}
      </Tags>
      {allOptionsAreSelected ? null : renderCaret()}
    </sc.Trigger>
  );
};

export default function ListBoxWithTags(props) {
  const {
    allOptionsAreSelected,
    allOptionsAreSelectedMessage,
    children,
    customOptionRegex,
    filter,
    noResultsMessage,
    onAddCustomOption,
    onChange,
    onRemove,
    tagLabelKey,
    renderTag,
    selectedOptions,
    ...moreProps
  } = props;
  const { t } = useI18n();

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  const refFilter = React.useRef(null);
  const [listBoxId] = React.useState(() => `listbox-content_${uuidv4()}`);

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
      <ListBox isMulti size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Trigger>
          {renderTrigger({
            allOptionsAreSelected,
            onRemove,
            listBoxId,
            tagLabelKey,
            renderTag,
            selectedOptions,
            size,
            t,
          })}
        </ListBox.Trigger>
        <ListBox.Box id={listBoxId} />
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

ListBoxWithTags.propTypes = propTypes;
ListBoxWithTags.defaultProps = defaultProps;

ListBoxWithTags.Box = ListBox.Box;
ListBoxWithTags.Divider = ListBox.Divider;
ListBoxWithTags.Footer = ListBox.Footer;
ListBoxWithTags.Option = ListBox.Option;
ListBoxWithTags.Popover = ListBox.Popover;
ListBoxWithTags.RawItem = ListBox.RawItem;
ListBoxWithTags.filter = filter;
