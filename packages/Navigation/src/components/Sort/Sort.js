import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";

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
  const I18n = useI18n();
  const fieldsRef = React.useRef(null);

  function getLabelText(numberOfFields) {
    switch (numberOfFields) {
      case 0:
        return I18n.t("navigation.sort.label");
      case 1:
        return I18n.t("navigation.sort.singular_label");
      default:
        return I18n.t("navigation.sort.plural_label", { numberOfFields });
    }
  }

  return (
    <Popover align="bottom" edge="left" maxWidth={1200}>
      <Popover.Trigger kind="flat">
        {(handler, attributes) => (
          <styled.Trigger {...attributes} isSemantic={false} onClick={handler} hasField={fields.length > 0}>
            <styled.Icon />
            {getLabelText(fields.length)}
          </styled.Trigger>
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
          <Button
            onClick={() => {
              fieldsRef.current.focus();
              onAddField();
            }}
            kind="minor"
          >
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
