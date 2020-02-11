import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";

import SortItem from "./SortItem";
import { sortDirections } from "../../constants";

import * as styled from "./Sort.styles";
import { GenericPopoverPlaceholder } from "../../Navigation.styles";

const propTypes = {
  appliedNumber: PropTypes.number,
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
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  appliedNumber: 0,
};

export default function Sort(props) {
  const { appliedNumber, fields, onDeleteField, onChange, columns, onAddField, onApply, onCancel } = props;
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
        {(handler, attributes, isOpen) => (
          <styled.Trigger
            {...attributes}
            isSemantic={false}
            onClick={handler}
            hasField={appliedNumber > 0}
            isOpen={isOpen}
          >
            <styled.Icon />
            {getLabelText(appliedNumber)}
          </styled.Trigger>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <styled.FieldsPanel ref={fieldsRef} tabIndex={-1}>
            {fields.length === 0 ? (
              <GenericPopoverPlaceholder>{I18n.t("navigation.sort.no_sorts_applied")}</GenericPopoverPlaceholder>
            ) : null}
            {fields.map((field, index) => (
              <SortItem
                key={field.fieldId}
                field={field}
                columns={columns}
                onDeleteField={onDeleteField}
                onChange={onChange}
                fieldsRef={fieldsRef}
                isFirstField={index === 0}
              />
            ))}
          </styled.FieldsPanel>
          <styled.Footer>
            <Button
              onClick={() => {
                fieldsRef.current.focus();
                onAddField();
              }}
              kind="minor"
            >
              Add a field to sort by
            </Button>
            <Button onClick={onApply} kind="flat" icon={<CheckIcon />}>
              Apply
            </Button>
            <Button onClick={onCancel} kind="minor">
              Cancel
            </Button>
          </styled.Footer>
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = "Navigation.Sort";
