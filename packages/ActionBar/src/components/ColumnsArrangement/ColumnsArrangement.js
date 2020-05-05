import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Sortable from "@paprika/sortable";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import ColumnManagingItem from "./ColumnsArrangementItem";
import ColumnDefinition from "./ColumnDefinition";
import * as sc from "./ColumnsArrangement.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  orderedColumnIds: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  const { children, onChangeOrder, onChangeVisibility, orderedColumnIds, onHideAll, onShowAll } = props;
  const I18n = useI18n();
  const [searchTerm, setSearchTerm] = React.useState("");
  const { "ColumnsArrangement.ColumnDefinition": extractedColumnDefinitions } = extractChildren(children, [
    "ColumnsArrangement.ColumnDefinition",
  ]);
  const columns = extractedColumnDefinitions.reduce((columns, columnDefinition) => {
    return {
      ...columns,
      [columnDefinition.props.id]: {
        label: columnDefinition.props.label,
        isHidden: columnDefinition.props.isHidden,
        isDisabled: columnDefinition.props.isDisabled,
      },
    };
  }, {});

  const hiddenColumns = Object.keys(columns).filter(columnId => columns[columnId].isHidden);

  const filteredColumnIds = searchTerm.length
    ? orderedColumnIds.filter(id => columns[id].label.match(new RegExp(searchTerm, "i")))
    : orderedColumnIds;

  const handleChangeOrder = ({ source, destination }) => {
    if (destination === null || source === destination) return;

    const actualSource = orderedColumnIds.indexOf(orderedColumnIds.find(id => id === filteredColumnIds[source]));
    const actualDestination = orderedColumnIds.indexOf(
      orderedColumnIds.find(id => id === filteredColumnIds[destination])
    );

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
          {filteredColumnIds.length === 0 ? (
            I18n.t("actionBar.no_results")
          ) : (
            <sc.Sortable onChange={handleChangeOrder} hasNumbers={false}>
              {filteredColumnIds.map(id => (
                <Sortable.Item key={id} sortId={id}>
                  <ColumnManagingItem
                    key={id}
                    id={id}
                    label={columns[id].label}
                    isDisabled={columns[id].isDisabled}
                    isHidden={columns[id].isHidden}
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
ColumnsArrangement.ColumnDefinition = ColumnDefinition;
