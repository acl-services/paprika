import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import HandleIcon from "@paprika/icon/lib/DragHandle";
import Button from "@paprika/button";
import TrashbinIcon from "@paprika/icon/lib/Trashbin";
import useI18n from "@paprika/l10n/lib/useI18n";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/enums";
import { itemStyles, itemIndexStyles, itemHandleStyles, itemBodyStyles, itemCloseStyles } from "./SortableItem.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  /** Indicator to identify the number sequence  */
  hasNumbers: PropTypes.bool.isRequired,
  /** Numerical representation of an item */
  index: PropTypes.number.isRequired,
  /** Callback when deleting an item */
  onRemove: PropTypes.func,
};

const defaultProps = {
  onRemove: null,
};

const SortableItem = ({ children, index, hasNumbers, onRemove, ...moreProps }) => {
  const I18n = useI18n();

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <Draggable draggableId={`draggable-${children.props.sortId}`} index={index}>
      {(provided, snapshot) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          css={itemStyles}
          data-pka-anchor="sortable.item"
          data-is-dragging={snapshot.isDragging ? true : undefined}
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...moreProps}
        >
          <div css={itemHandleStyles} data-pka-anchor="sortable.item.handle">
            <HandleIcon />
          </div>
          {hasNumbers && (
            <div css={itemIndexStyles} data-pka-anchor="sortable.item.number">
              {index + 1}
            </div>
          )}
          <div css={itemBodyStyles} data-pka-anchor="sortable.item.body">
            {children}
          </div>
          {onRemove && (
            <div css={itemCloseStyles} data-pka-anchor="sortable.item.remove">
              <Button.Icon
                onClick={handleRemove}
                kind={Button.Kinds.MINOR}
                size={ShirtSizes.MEDIUM}
                a11yText={I18n.t("sortable.aria_remove")}
              >
                <TrashbinIcon color={tokens.color.blackLighten20} />
              </Button.Icon>
            </div>
          )}
        </li>
      )}
    </Draggable>
  );
};

SortableItem.displayName = "SortableItem";
SortableItem.propTypes = propTypes;
SortableItem.defaultProps = defaultProps;

export default SortableItem;
