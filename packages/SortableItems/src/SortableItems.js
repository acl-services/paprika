import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import Icon from "@paprika/icon/lib/DragHandle";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import sortableItemsStyles, {
  draggableStyles,
  draggableIndexStyles,
  draggableHandleStyles,
  draggableBodyStyles,
} from "./SortableItems.styles";

const propTypes = {
  children: PropTypes.node,
  hasIndexes: PropTypes.bool,
  onChange: PropTypes.func,
};

const defaultProps = {
  children: null,
  hasIndexes: true,
  onChange: () => {},
};

function augmentChildren(children) {
  return React.Children.toArray(children).map((child, index) => {
    return React.cloneElement(child, { ...child.props, "data-drag-id": index });
  });
}

const SortableItems = React.forwardRef((props, ref) => {
  const [sortedChildren, setSortedChildren] = React.useState(augmentChildren(props.children));

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const moved = sortedChildren.splice(source.index, 1);
    sortedChildren.splice(destination.index, 0, ...moved);
    props.onChange(sortedChildren);
  };

  React.useImperativeHandle(ref, () => ({
    update: sortedItems => {
      setSortedChildren(augmentChildren(sortedItems));
    },
  }));

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={`droppable-${uuidv4()}`}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            css={sortableItemsStyles}
          >
            {sortedChildren &&
              sortedChildren.length &&
              sortedChildren.map((child, index) => {
                //
                // <Sortable.Item>
                //
                return (
                  <Draggable
                    draggableId={`draggable-${child.props["data-drag-id"]}`}
                    key={child.props["data-drag-id"]}
                    index={index}
                  >
                    {(_provided, _snapshot) => {
                      return (
                        <div
                          {..._provided.draggableProps}
                          ref={_provided.innerRef}
                          isDragging={_snapshot.isDragging}
                          css={draggableStyles}
                        >
                          {props.hasIndexes && <div css={draggableIndexStyles}>{index}</div>}
                          <div {..._provided.dragHandleProps} css={draggableHandleStyles}>
                            <Icon />
                          </div>
                          <div css={draggableBodyStyles}>{child}</div>
                        </div>
                      );
                    }}
                  </Draggable>
                );
                //
                // </Sortable.Item>
                //
              })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

SortableItems.displayName = "SortableItems";
SortableItems.propTypes = propTypes;
SortableItems.defaultProps = defaultProps;

export default SortableItems;
