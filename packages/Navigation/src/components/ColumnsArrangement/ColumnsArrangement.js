import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Sortable from "@paprika/sortable";
import useI18n from "@paprika/l10n/lib/useI18n";
import ColumnManagingItem from "./ColumnsArrangementItem";
import * as styled from "./ColumnsArrangement.styles";

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

const defaultProps = {};

export default function ColumnsArrangement(props) {
  const { onChangeOrder, onChangeVisibility, columns, onHideAll, onShowAll } = props;
  const I18n = useI18n();
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredColumns = searchTerm.length
    ? columns.filter(column => column.label.match(new RegExp(searchTerm, "i")))
    : columns;

  function getLabelText(numberOfHiddenColumn) {
    switch (numberOfHiddenColumn) {
      case 0:
        return I18n.t("navigation.columns_arrangement.label");
      case 1:
        return I18n.t("navigation.columns_arrangement.singular_label");
      default:
        return I18n.t("navigation.columns_arrangement.plural_label", { numberOfHiddenColumn });
    }
  }

  const handleChangeOrder = result => {
    const { source, destination } = result;

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
          <styled.Trigger
            {...attributes}
            onClick={handler}
            hasColumnsHidden={columns.filter(column => column.isHidden).length > 0}
            isOpen={isOpen}
          >
            <styled.Icon />
            {getLabelText(columns.filter(column => column.isHidden).length)}
          </styled.Trigger>
        )}
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Card>
          <Input
            defaultValue=""
            onChange={handleSearch}
            placeholder={I18n.t("navigation.search_placeholder")}
            hasClearButton
          />
          {filteredColumns.length === 0 ? (
            I18n.t("navigation.no_results")
          ) : (
            <styled.Sortable onChange={handleChangeOrder} hasNumbers={false}>
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
            </styled.Sortable>
          )}
          {searchTerm.length ? null : (
            <styled.Footer>
              <Button kind="minor" onClick={onHideAll}>
                {I18n.t("navigation.columns_arrangement.hide_all")}
              </Button>
              <Button kind="minor" onClick={onShowAll}>
                {I18n.t("navigation.columns_arrangement.show_all")}
              </Button>
            </styled.Footer>
          )}
        </Popover.Card>
        <Popover.Tip />
      </Popover.Content>
    </Popover>
  );
}

ColumnsArrangement.propTypes = propTypes;
ColumnsArrangement.defaultProps = defaultProps;
ColumnsArrangement.displayName = "Navigation.ColumnsArrangement";
