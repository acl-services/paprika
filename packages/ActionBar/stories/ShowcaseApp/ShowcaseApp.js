import React from "react";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArragment, useFilter, Filter, Sort, useSort } from "../../src";
import data from "./data";
import CustomSingleSelectFilter from "./CustomSingleSelectFilter";

const columnsSettingForFilterAndSort = [
  {
    id: "goals",
    type: "NUMBER",
    label: "Goals",
  },
  {
    id: "name",
    type: "TEXT",
    label: "Name",
  },
  {
    id: "status",
    type: "TEXT",
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joinedDate",
    type: "DATE",
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: "BOOLEAN",
    label: "Shareable",
  },
  {
    id: "level",
    type: "SINGLE_SELECT",
    label: "Level",
  },
];

const defaultColumnsForArrangement = [
  { id: "goals", label: "Goals", isHidden: false, isDisabled: false },
  { id: "name", label: "Name", isHidden: false, isDisabled: false },
  { id: "status", label: "Status", isHidden: false, isDisabled: false },
  { id: "country", label: "Country", isHidden: false, isDisabled: false },
];

const customRulesByType = {
  ...Filter.defaultRulesByType,
  SINGLE_SELECT: [Filter.rules.IS, Filter.rules.IS_NOT, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

export default function App() {
  const { filters, filteredData, onDeleteFilter, onFilterChange, ...filterProps } = useFilter({
    columns: columnsSettingForFilterAndSort,
    rulesByType: customRulesByType,
    data,
  });
  const { sortedFields, sortedData, onDeleteField, onChangeField, ...sortProps } = useSort({
    columns: columnsSettingForFilterAndSort,
    data,
  });
  const { orderedColumns, ...handlers } = useColumnsArragment(defaultColumnsForArrangement);

  const subset = React.useMemo(() => {
    return sortedData.filter(item => !!filteredData.find(filteredItem => filteredItem.id === item.id));
  }, [filteredData, sortedData]);

  const handleDeleteFilter = filterId => () => {
    onDeleteFilter(filterId);
  };
  const handleChangeFilter = filterId => params => {
    onFilterChange({ ...params, id: filterId });
  };

  const handleDeleteSortField = fieldId => () => {
    onDeleteField(fieldId);
  };

  const handleChangeSortField = fieldId => params => {
    onChangeField({ ...params, id: fieldId });
  };

  const renderLevelFilter = () => <CustomSingleSelectFilter />;

  return (
    <React.Fragment>
      <Heading level={2}>ActionBar showcase</Heading>

      <ActionBar>
        <Filter {...filterProps} columns={columnsSettingForFilterAndSort} rulesByType={customRulesByType}>
          {filters.map((filter, index) => (
            <Filter.Item
              key={filter.id}
              {...filter}
              index={index}
              onChange={handleChangeFilter(filter.id)}
              onDelete={handleDeleteFilter(filter.id)}
              renderValueField={filter.columnId === "level" ? renderLevelFilter : null}
            />
          ))}
        </Filter>

        <Sort {...sortProps} columns={columnsSettingForFilterAndSort}>
          {sortedFields.map((field, index) => {
            return (
              <Sort.Field
                key={field.id}
                id={field.id}
                columnId={field.columnId}
                direction={field.direction}
                onDelete={handleDeleteSortField(field.id)}
                onChange={handleChangeSortField(field.id)}
                isFirst={index === 0}
              />
            );
          })}
        </Sort>

        <ColumnsArrangement columns={orderedColumns} {...handlers} />
      </ActionBar>

      <table>
        <thead>
          <tr>
            <th>id</th>
            {orderedColumns.map(column => (column.isHidden ? null : <th>{column.label}</th>))}
          </tr>
        </thead>
        <tbody>
          {subset.map(item => (
            <tr>
              <td>{item.id}</td>
              {orderedColumns.map(column => (column.isHidden ? null : <td>{item[column.id]}</td>))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div>
        <pre>{JSON.stringify(subset, null, 2)}</pre>
      </div> */}
    </React.Fragment>
  );
}
