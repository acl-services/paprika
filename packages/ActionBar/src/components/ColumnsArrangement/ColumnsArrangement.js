import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Sortable from "@paprika/sortable";
import useI18n from "@paprika/l10n/lib/useI18n";
import ColumnManagingItem from "./ColumnsArrangementItem";
import * as sc from "./ColumnsArrangement.styles";

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      isDisabled: PropTypes.bool,
      isHidden: PropTypes.bool,
    })
  ).isRequired,
  onChangeOrder: PropTypes.func.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
  onHideAll: PropTypes.func.isRequired,
  onShowAll: PropTypes.func.isRequired,
};

function getLabelText(numberOfHiddenColumn, I18n) {
  switch (numberOfHiddenColumn) {
    case 0:
      return I18n.t("actionBar.columns_arrangement.label");
    case 1:
      return I18n.t("actionBar.columns_arrangement.singular_label");
    default:
      return I18n.t("actionBar.columns_arrangement.plural_label", { numberOfHiddenColumn });
  }
}

export default function ColumnsArrangement(props) {
  const { onChangeOrder, onChangeVisibility, columns, onHideAll, onShowAll } = props;
  const I18n = useI18n();
  const [searchTerm, setSearchTerm] = React.useState("");
  const hiddenColumns = columns.filter(column => column.isHidden);

  const filteredColumns = searchTerm.length
    ? columns.filter(column => column.label.match(new RegExp(searchTerm, "i")))
    : columns;

  const handleChangeOrder = ({ source, destination }) => {
    if (destination === null || source === destination) return;

    const actualSource = columns.indexOf(columns.find(column => column.id === filteredColumns[source].id));
    const actualDestination = columns.indexOf(columns.find(column => column.id === filteredColumns[destination].id));

    onChangeOrder({ source: actualSource, destination: actualDestination });
  };

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Popover align="bottom" edge="left" minWidth={230}>
      <Popover.Trigger>
        {(handler, attributes, isOpen) => (
          <sc.Trigger {...attributes} onClick={handler} hasColumnsHidden={hiddenColumns.length > 0} isOpen={isOpen}>
            <sc.Icon />
            {getLabelText(hiddenColumns.length, I18n)}
          </sc.Trigger>
        )}
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Card>
          <Input
            defaultValue=""
            onChange={handleSearch}
            placeholder={I18n.t("actionBar.search_placeholder")}
            hasClearButton
          />
          {filteredColumns.length === 0 ? (
            I18n.t("actionBar.no_results")
          ) : (
            <sc.Sortable onChange={handleChangeOrder} hasNumbers={false}>
              {filteredColumns.map(column => (
                <Sortable.Item key={column.id} sortId={column.id}>
                  <ColumnManagingItem
                    key={column.id}
                    id={column.id}
                    label={column.label}
                    isDisabled={column.isDisabled}
                    isHidden={column.isHidden}
                    onChangeVisibility={onChangeVisibility}
                  />
                </Sortable.Item>
              ))}
            </sc.Sortable>
          )}
          {searchTerm.length ? null : (
            <sc.Footer>
              <Button kind="minor" onClick={onHideAll}>
                {I18n.t("actionBar.columns_arrangement.hide_all")}
              </Button>
              <Button kind="minor" onClick={onShowAll}>
                {I18n.t("actionBar.columns_arrangement.show_all")}
              </Button>
            </sc.Footer>
          )}
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}

ColumnsArrangement.propTypes = propTypes;
ColumnsArrangement.displayName = "ActionBar.ColumnsArrangement";
