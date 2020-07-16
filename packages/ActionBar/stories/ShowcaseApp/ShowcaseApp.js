import React from "react";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement, useFilter, Filter, Sort, useSort } from "../../src";
import data from "./data";
import CustomSingleSelectFilter from "./CustomSingleSelectFilter";

const columnsSettings = [
  {
    id: "goals",
    type: ActionBar.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: ActionBar.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: ActionBar.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: ActionBar.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: ActionBar.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level",
  },
  {
    id: "position",
    type: ActionBar.columnTypes.SINGLE_SELECT,
    label: "Position",
  },
];

const customRulesByType = {
  ...Filter.defaultRulesByType,
  CUSTOM_SELECT: [Filter.rules.IS, Filter.rules.IS_NOT, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

export default function App() {
  const { filters, filteredData, onDeleteFilter, onChangeFilter, ...filterProps } = useFilter({
    columns: columnsSettings,
    rulesByType: customRulesByType,
    data,
  });
  const { sortedFields, sortedData, onDeleteSort, onChangeSort, ...sortProps } = useSort({
    columns: columnsSettings,
    data,
  });
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement([
    "goals",
    "name",
    "status",
    "country",
    "joined",
    "shareable",
    "level",
    "position",
  ]);

  const subset = React.useMemo(() => {
    return sortedData.filter(item => !!filteredData.find(filteredItem => filteredItem.id === item.id));
  }, [filteredData, sortedData]);

  const renderLevelFilter = () => <CustomSingleSelectFilter />;

  return (
    <React.Fragment>
      <Heading level={2}>ActionBar showcase</Heading>

      <ActionBar>
        <Filter {...filterProps} columns={columnsSettings} rulesByType={customRulesByType}>
          {filters.map((filter, index) => (
            <Filter.Item
              columnId={filter.columnId}
              id={filter.id}
              index={index}
              key={filter.id}
              label={filter.label}
              onChange={onChangeFilter}
              onDelete={onDeleteFilter}
              renderValueField={filter.columnId === "level" ? renderLevelFilter : null}
              type={filter.type}
              rule={filter.rule}
              value={filter.value}
              data={filter.data}
            />
          ))}
        </Filter>

        <Sort {...sortProps} columns={columnsSettings}>
          {sortedFields.map((field, index) => {
            return (
              <Sort.Field
                columnId={field.columnId}
                direction={field.direction}
                id={field.id}
                isFirst={index === 0}
                key={field.id}
                onChange={onChangeSort}
                onDelete={onDeleteSort}
              />
            );
          })}
        </Sort>

        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              id={column.id}
              label={column.label}
              isHidden={isColumnHidden(column.id)}
            />
          ))}
        </ColumnsArrangement>
      </ActionBar>

      <table>
        <thead>
          <tr>
            <th>id</th>
            {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <th key={id}>{id}</th>))}
          </tr>
        </thead>
        <tbody>
          {subset.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{`${item[id]}`}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
