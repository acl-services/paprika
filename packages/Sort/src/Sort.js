import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@paprika/icon/lib/Add";
import Button from "@paprika/button";
import SortIcon from "@paprika/icon/lib/Sort";
import Panel from "@paprika/panel";
import useI18n from "@paprika/l10n/lib/useI18n";
import Sortable from "@paprika/sortable";
import Field from "./components/Field";
import SortContext from "./context";
import columnShape from "./columnShape";
import * as types from "./types";

import * as sc from "./Sort.styles";

function getLabelText(numberOfSortItems, I18n) {
  return numberOfSortItems ? I18n.t("sort.label_with_count", { count: numberOfSortItems }) : I18n.t("sort.label");
}

export default function Sort(props) {
  const {
    numberApplied,
    children,
    columns,
    data,
    onAddSort,
    isAddSortDisabled,
    onApply,
    onCancel,
    onReset,
    zIndex,
  } = props;
  const I18n = useI18n();
  const sortRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClickTrigger() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  function handleApply() {
    onApply();
    setIsOpen(false);
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

  function handleReset() {
    onReset();
  }

  return (
    <SortContext.Provider value={{ sortRef, columns, data }}>
      <Panel
        a11yText={I18n.t("sort.label")}
        data-pka-anchor="sort.panel"
        isCompact
        isOpen={isOpen}
        onClose={handleCancel}
        zIndex={zIndex}
      >
        <Panel.Header>
          <sc.PanelHeaderWrapper>
            <SortIcon aria-hidden="true" />
            {I18n.t("sort.label")}
          </sc.PanelHeaderWrapper>
        </Panel.Header>

        <Panel.Trigger
          icon={<SortIcon />}
          isSemantic={false}
          kind={Button.types.kind.FLAT}
          onClick={handleClickTrigger}
        >
          {getLabelText(numberApplied, I18n)}
        </Panel.Trigger>
        <sc.SortPanel ref={sortRef}>
          <Sortable data-pka-anchor="sort.sortableWrapper" onChange={() => {}} onRemove={() => {}}>
            {children}
          </Sortable>
          <Button
            data-pka-anchor="sort.addFilterButton"
            icon={<AddIcon />}
            onClick={onAddSort}
            isDisabled={isAddSortDisabled}
          >
            {I18n.t("sort.actions.add")}
          </Button>
        </sc.SortPanel>
        <Panel.Footer isSticky>
          <sc.Footer>
            <Button data-pka-anchor="sort.applyButton" onClick={handleApply} kind="primary">
              {I18n.t("actions.apply")}
            </Button>
            <Button data-pka-anchor="sort.cancelButton" onClick={handleCancel} kind="minor">
              {I18n.t("actions.cancel")}
            </Button>
            <Button data-pka-anchor="sort.clearButton" onClick={handleReset} kind="minor">
              {I18n.t("sort.actions.reset")}
            </Button>
          </sc.Footer>
        </Panel.Footer>
      </Panel>
    </SortContext.Provider>
  );
}

Sort.displayName = "Sort";

Sort.Field = Field;
Sort.types = types;

const propTypes = {
  numberApplied: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.shape(columnShape)).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onAddSort: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onReset: PropTypes.func,
  zIndex: PropTypes.number,
  isAddSortDisabled: PropTypes.bool,
};

const defaultProps = {
  numberApplied: 0,
  children: null,
  data: null,
  onCancel: () => {},
  onReset: () => {},
  zIndex: undefined,
  isAddSortDisabled: false,
};

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
