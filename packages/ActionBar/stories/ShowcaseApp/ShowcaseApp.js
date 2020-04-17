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
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArragment([
    "goals",
    "name",
    "status",
    "country",
    "joined",
    "shareable",
    "level",
  ]);

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

        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          <ColumnsArrangement.ColumnDefinition
            id="goals"
            label="Goals"
            isDisabled={false}
            isHidden={isColumnHidden("goals")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="name"
            label="Name"
            isDisabled={false}
            isHidden={isColumnHidden("name")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="status"
            label="Status"
            isDisabled={false}
            isHidden={isColumnHidden("status")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="country"
            label="Country"
            isDisabled={false}
            isHidden={isColumnHidden("country")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="joined"
            label="Joined"
            isDisabled={false}
            isHidden={isColumnHidden("joined")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="shareable"
            label="Shareable"
            isDisabled={false}
            isHidden={isColumnHidden("shareable")}
          />
          <ColumnsArrangement.ColumnDefinition
            id="level"
            label="Level"
            isDisabled={false}
            isHidden={isColumnHidden("level")}
          />
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
            <tr>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{item[id]}</td>))}
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
