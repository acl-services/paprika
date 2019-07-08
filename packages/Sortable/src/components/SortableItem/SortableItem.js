import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import HandleIcon from "@paprika/icon/lib/DragHandle";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import { itemStyles, itemIndexStyles, itemHandleStyles, itemBodyStyles, itemCloseStyles } from "./SortableItem.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasNumbers: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
};

const defaultProps = {
  onRemove: null,
};

const SortableItem = ({ children, index, hasNumbers, onRemove }) => {
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
          aria-roledescription={I18n.t("sortable.aria_description")}
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
              <Button.Close onClick={handleRemove} size="small" isSemantic={false} />
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
