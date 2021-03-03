import React from "react";
import Tag, { Tags } from "@paprika/tag";
import * as sc from "./ListBoxWithTags.styles";

const renderTrigger = ({
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
  t,
}) => (...args) => {
  const [, , , { dispatch, handleKeyDown, handleKeyUp, isOpen, propsForTrigger, refTrigger, types }] = args;

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
            <sc.Placeholder isDisabled={isDisabled} size={size}>
              {placeholder || t("listBoxWithTags.placeholder")}
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
};

export default renderTrigger;
