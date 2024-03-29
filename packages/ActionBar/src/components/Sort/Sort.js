import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { extractChildrenProps } from "@paprika/helpers";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";
import tokens from "@paprika/tokens";

import SortField from "./SortField";
import SortContext from "./context";
import columnShape from "../../columnShape";
import PopoverContentPropsCollector from "./PopoverContentPropsCollector";

import * as sc from "./Sort.styles";
import { GenericNoAppliedPlaceholder } from "../../ActionBar.styles";

const propTypes = {
  appliedNumber: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.shape(columnShape)).isRequired,
  isAddSortDisabled: PropTypes.bool,
  onAddSort: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

const defaultProps = {
  appliedNumber: 0,
  children: null,
  isAddSortDisabled: false,
  onCancel: () => {},
  onClose: () => {},
  onOpen: () => {},
};

function getLabelText(numberOfFields, I18n) {
  switch (numberOfFields) {
    case 0:
      return I18n.t("actionBar.sort.label");
    case 1:
      return I18n.t("actionBar.sort.singular_label");
    default:
      return I18n.t("actionBar.sort.plural_label", { numberOfFields });
  }
}

export default function Sort(props) {
  const { appliedNumber, children, columns, isAddSortDisabled, onAddSort, onApply, onCancel, onClose, onOpen } = props;
  const I18n = useI18n();
  const fieldsRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const popoverContentProps = extractChildrenProps(children, PopoverContentPropsCollector);

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

  function handleAddSort() {
    if (fieldsRef.current) {
      fieldsRef.current.focus();
    }
    onAddSort();
  }

  return (
    <SortContext.Provider value={{ columns, fieldsRef }}>
      <Popover
        align="bottom"
        edge="left"
        maxWidth={600}
        offset={parseInt(tokens.spaceSm, 10)}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <sc.Trigger
          data-pka-anchor="actionBar.sort.trigger"
          isSemantic={false}
          kind={Button.types.kind.FLAT}
          onClick={handleClickTrigger}
          hasField={appliedNumber > 0}
          isOpen={isOpen}
        >
          <sc.Icon />
          {getLabelText(appliedNumber, I18n)}
        </sc.Trigger>
        <Popover.Content {...popoverContentProps}>
          <Popover.Card>
            <sc.FieldsPanel ref={fieldsRef} tabIndex={-1}>
              {React.Children.count(children) === 0 ? (
                <GenericNoAppliedPlaceholder>{I18n.t("actionBar.sort.no_sorts_applied")}</GenericNoAppliedPlaceholder>
              ) : (
                children
              )}
            </sc.FieldsPanel>
            <sc.Footer>
              <Button
                data-pka-anchor="actionBar.sort.addSort"
                isDisabled={isAddSortDisabled}
                onClick={handleAddSort}
                kind="minor"
              >
                {I18n.t(`actionBar.sort.add_field`)}
              </Button>
              <Button onClick={handleApply} kind="flat" icon={<CheckIcon />}>
                {I18n.t("actions.apply")}
              </Button>
              <Button onClick={handleCancel} kind="minor">
                {I18n.t("actions.cancel")}
              </Button>
            </sc.Footer>
          </Popover.Card>
        </Popover.Content>
      </Popover>
    </SortContext.Provider>
  );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = "ActionBar.Sort";
Sort.Field = SortField;
Sort.PopoverContent = PopoverContentPropsCollector;
