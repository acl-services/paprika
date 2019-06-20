import React from "react";
import PropTypes from "prop-types";
import HandleIcon from "@paprika/icon/lib/DragHandle";
import { Draggable } from "react-beautiful-dnd";
import Button from "@paprika/button";
import SortableContext from "../../SortableContext";
import { itemStyles, itemIndexStyles, itemHandleStyles, itemBodyStyles, itemCloseStyles } from "./Item.styles";

const propTypes = {
  child: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

const Item = ({ child, index }) => {
  const { hasIndexes, onRemove } = React.useContext(SortableContext);

  function handleRemove() {
    onRemove(index);
  }

  return (
    <Draggable draggableId={`draggable-${child.props["data-drag-id"]}`} index={index}>
      {(provided, snapshot) => {
        return (
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            css={itemStyles}
            data-is-dragging={snapshot.isDragging ? true : undefined}
            isDragging={snapshot.isDragging}
            ref={provided.innerRef}
          >
            <div css={itemHandleStyles} {...{}}>
              <HandleIcon />
            </div>
            {hasIndexes && <div css={itemIndexStyles}>{index + 1}</div>}
            <div css={itemBodyStyles} {...{}}>
              {child}
            </div>
            {onRemove && (
              <div css={itemCloseStyles} {...{}}>
                <Button.Close onClick={handleRemove} size="small" />
              </div>
            )}
          </li>
        );
      }}
    </Draggable>
  );
};

Item.displayName = "Item";
Item.propTypes = propTypes;

export default Item;
