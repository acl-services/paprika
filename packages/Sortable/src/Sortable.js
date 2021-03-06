import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useI18n from "@paprika/l10n/lib/useI18n";
import SortableItem from "./components/SortableItem/SortableItem";
import Item from "./components/Item/Item";
import * as sc from "./Sortable.styles";

const propTypes = {
  children: PropTypes.node,
  /** Indicator to identify the number sequence  */
  hasNumbers: PropTypes.bool,
  /** Add a background-color to all even rows */
  hasZebraStripes: PropTypes.bool,
  /** Callback when sorting */
  onChange: PropTypes.func.isRequired,
  /** Callback when deleting an item */
  onRemove: PropTypes.func,
};

const defaultProps = {
  children: null,
  hasNumbers: true,
  hasZebraStripes: false,
  onRemove: null,
};

function filterChildren(children) {
  return React.Children.toArray(children).filter(child => child.type.displayName === "Sortable.Item");
}

const Sortable = ({ children, onChange, hasNumbers, hasZebraStripes, onRemove, ...moreProps }) => {
  const I18n = useI18n();
  const [dropId] = React.useState(() => `droppable_${uuidv4()}`);

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
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
      liftInstruction={I18n.t("sortable.aria_description")}
    >
      <Droppable droppableId={dropId}>
        {(provided, snapshot) => (
          <sc.Sortable
            {...provided.droppableProps}
            {...moreProps}
            hasZebraStripes={hasZebraStripes}
            data-pka-anchor="sortable"
            data-is-dragging-over={snapshot.isDraggingOver ? true : undefined}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {validChildren.length > 0 &&
              validChildren.map((child, index) => (
                <SortableItem
                  key={child.props.sortId}
                  index={index}
                  hasNumbers={hasNumbers}
                  onRemove={onRemove}
                  {...child.props}
                >
                  {child}
                </SortableItem>
              ))}
            {provided.placeholder}
          </sc.Sortable>
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
