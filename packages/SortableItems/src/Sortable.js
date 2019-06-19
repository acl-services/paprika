import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SortableContext from "./SortableContext";
import Item from "./components/Item/Item";
import sortableStyles from "./Sortable.styles";

const propTypes = {
  children: PropTypes.node,
  hasIndexes: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
};

const defaultProps = {
  children: null,
  hasIndexes: true,
  onRemove: null,
};

function augmentChildren(children) {
  return React.Children.map(children, (child, index) => {
    return child.type
      ? React.cloneElement(child, { ...child.props, "data-drag-id": index })
      : React.createElement("span", { ...child.props, "data-drag-id": index }, child);
  });
}

const Sortable = ({ children, onChange, hasIndexes, onRemove }) => {
  const augmentedChildren = augmentChildren(children);

  const handleDragEnd = result => {
    const { source, destination } = result;
    onChange({
      source: source.index,
      destination: destination ? destination.index : null,
    });
  };

  return (
    <SortableContext.Provider value={{ hasIndexes, onRemove }}>
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
              {augmentedChildren &&
                augmentedChildren.length > 0 &&
                augmentedChildren.map((child, index) => (
                  <Item child={child} key={child.props["data-drag-id"]} index={index} />
                ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </SortableContext.Provider>
  );
};

Sortable.displayName = "Sortable";
Sortable.propTypes = propTypes;
Sortable.defaultProps = defaultProps;

export default Sortable;
