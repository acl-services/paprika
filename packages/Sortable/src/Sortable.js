import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useI18n from "@paprika/l10n/lib/useI18n";
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

function filterChildren(children) {
  return React.Children.toArray(children).filter(child => child.type.displayName === "Sortable.Item");
}

const Sortable = ({ children, onChange, hasNumbers, onRemove }) => {
  const I18n = useI18n();
  const dropId = React.useRef(uuid());
  const validChildren = filterChildren(children);

  const handleDragStart = (start, provided) => {
    const { source } = start;
    provided.announce(I18n.t("sortable.aria_lift", { source: source.index + 1 }));
  };

  const handleDragUpdate = (update, provided) => {
    const { source, destination } = update;
    if (destination) {
      provided.announce(
        I18n.t("sortable.aria_moving", { source: source.index + 1, destination: destination.index + 1 })
      );
    } else {
      provided.announce(I18n.t("sortable.aria_moving_outside"));
    }
  };

  const handleDragEnd = (result, provided) => {
    const { source, destination } = result;
    onChange({
      source: source.index,
      destination: destination ? destination.index : null,
    });
    if (destination) {
      provided.announce(
        I18n.t("sortable.aria_dropped", { source: source.index + 1, destination: destination.index + 1 })
      );
    } else {
      provided.announce(I18n.t("sortable.aria_dropped_outside", { source: source.index + 1 }));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
      <Droppable droppableId={dropId.current}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            css={sortableStyles}
            data-is-dragging-over={snapshot.isDraggingOver ? true : undefined}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {validChildren.length > 0 &&
              validChildren.map((child, index) => (
                <SortableItem key={child.props.sortId} index={index} hasNumbers={hasNumbers} onRemove={onRemove}>
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
