import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SortableItem from "./components/SortableItem/SortableItem";
import Item from "./components/Item/Item";
import sortableStyles from "./Sortable.styles";

const propTypes = {
  children: PropTypes.node,
  hasNumbers: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
};

const defaultProps = {
  children: null,
  hasNumbers: true,
  onRemove: null,
};

function processChildren(children) {
  return (
    React.Children.toArray(children)
      .filter(child => child.type.displayName === "Sortable.Item")
      .map((child, index) => {
        return React.cloneElement(child, { dragId: index });
      }) || []
  );
}

const Sortable = ({ children, onChange, hasNumbers, onRemove }) => {
  const augmentedChildren = processChildren(children);

  const handleDragEnd = result => {
    const { source, destination } = result;
    onChange({
      source: source.index,
      destination: destination ? destination.index : null,
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId={`droppable-${uuidv4()}`}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            css={sortableStyles}
            data-is-dragging-over={snapshot.isDraggingOver ? true : undefined}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {augmentedChildren.length > 0 &&
              augmentedChildren.map((child, index) => (
                <SortableItem key={child.props.dragId} index={index} hasNumbers={hasNumbers} onRemove={onRemove}>
                  {child}
                </SortableItem>
              ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

Sortable.displayName = "Sortable";
Sortable.propTypes = propTypes;
Sortable.defaultProps = defaultProps;
Sortable.Item = Item;

export default Sortable;
