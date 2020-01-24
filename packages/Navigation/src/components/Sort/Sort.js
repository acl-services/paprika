import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Popover from "@paprika/popover";

import SortItem from "./SortItem";
import { sortDirections } from "../../constants";

import * as styled from "./Sort.styles";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onDeleteField: PropTypes.func.isRequired,
  onAddField: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      columnId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      direction: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]),
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const defaultProps = {};

export default function Sort(props) {
  const { fields, onDeleteField, onChange, columns, onAddField } = props;
  const fieldsRef = React.useRef(null);

  return (
    <Popover align="bottom" edge="left" maxWidth={1200}>
      <Popover.Trigger kind="flat">
        {handler => (
          <Button kind="flat" onClick={handler}>
            Sort
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <styled.FieldsPanel ref={fieldsRef} tabIndex={-1}>
            {fields.map(field => (
              <SortItem
                key={field.fieldId}
                field={field}
                columns={columns}
                onDeleteField={onDeleteField}
                onChange={onChange}
                fieldsRef={fieldsRef}
              />
            ))}
          </styled.FieldsPanel>
          <Button onClick={onAddField} kind="minor" isDisabled={fields.length === columns.length}>
            Add a field to sort by
          </Button>
        </Popover.Card>
        <Popover.Tip />
      </Popover.Content>
    </Popover>
  );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = "Navigation.Sort";
