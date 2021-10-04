import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";
import Tag, { Tags } from "@paprika/tag";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "../../ListBoxWithTags.styles";

export default function TriggerWithTags(props) {
  const {
    allOptionsAreSelected,
    hasError,
    idListBoxContent,
    isDisabled,
    isReadOnly,
    onRemove,
    placeholder,
    renderTag,
    selectedOptions,
    size,
    tagLabelKey,
    // attributes
    dispatch,
    handleKeyDown,
    handleKeyUp,
    isOpen,
    propsForTrigger,
    refTrigger,
    types,
  } = props;

  const { t } = useI18n();

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
  const bestPlaceholder = placeholder || t("listBoxWithTags.placeholder");
  const a11yTextOptions = selectedOptions.map(item => (tagLabelKey === null ? item.label : item[tagLabelKey]));
  const a11yText = selectedOptions.length === 0 ? bestPlaceholder : a11yTextOptions.join(", ");

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
            <sc.Placeholder isDisabled={isDisabled} size={size}>
              {bestPlaceholder}
            </sc.Placeholder>
          )}
        </Tags>
        {allOptionsAreSelected ? null : renderCaret(isDisabled)}
      </sc.Trigger>
      <sc.TriggerLabel id={`${triggerProps.id}__label`}>
        {t("listBoxWithTags.a11y_text_trigger", { options: a11yText })}
      </sc.TriggerLabel>
    </>
  );
}

TriggerWithTags.displayName = "ListBoxWithTags.TriggerWithTags";

TriggerWithTags.propTypes = {
  allOptionsAreSelected: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  idListBoxContent: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderTag: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.string.isRequired,
  tagLabelKey: PropTypes.string,
  // attributes
  dispatch: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  propsForTrigger: PropTypes.func.isRequired,
  refTrigger: RefOf().isRequired,
  types: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

TriggerWithTags.defaultProps = {
  placeholder: null,
  renderTag: null,
  selectedOptions: null,
  tagLabelKey: null,
  // attributes
  isOpen: false,
};
