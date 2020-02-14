import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";

import SortItem from "./SortItem";
import SortContext from "./context";

import * as styled from "./Sort.styles";
import { GenericPopoverPlaceholder } from "../../Navigation.styles";

const propTypes = {
  appliedNumber: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddField: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

const defaultProps = {
  appliedNumber: 0,
  children: null,
  onCancel: () => {},
  onClose: () => {},
  onOpen: () => {},
};

export default function Sort(props) {
  const { appliedNumber, children, columns, onAddField, onApply, onCancel, onClose, onOpen } = props;
  const I18n = useI18n();
  const fieldsRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClickTrigger() {
    setIsOpen(prevIsOpen => {
      if (prevIsOpen) return false;

      onOpen();
      return true;
    });
  }

  function handleClose() {
    setIsOpen(false);
    onClose();
  }

  function handleApply() {
    setIsOpen(false);
    onApply();
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

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
    <SortContext.Provider value={{ columns, fieldsRef }}>
      <Popover align="bottom" edge="left" maxWidth={600} isOpen={isOpen} onClose={handleClose}>
        <styled.Trigger
          isSemantic={false}
          kind="flat"
          onClick={handleClickTrigger}
          hasField={appliedNumber > 0}
          isOpen={isOpen}
        >
          <styled.Icon />
          {getLabelText(appliedNumber)}
        </styled.Trigger>
        <Popover.Content>
          <Popover.Card>
            <styled.FieldsPanel ref={fieldsRef} tabIndex={-1}>
              {React.Children.count(children) === 0 ? (
                <GenericPopoverPlaceholder>{I18n.t("navigation.sort.no_sorts_applied")}</GenericPopoverPlaceholder>
              ) : null}
              {children}
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
              <Button onClick={handleApply} kind="flat" icon={<CheckIcon />}>
                Apply
              </Button>
              <Button onClick={handleCancel} kind="minor">
                Cancel
              </Button>
            </styled.Footer>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </SortContext.Provider>
  );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = "Navigation.Sort";
Sort.Field = SortItem;
