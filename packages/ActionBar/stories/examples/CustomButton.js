import React from "react";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import ActionBar, {
  ColumnsArrangement,
  Filter,
  SearchInput,
  Sort,
  useColumnsArrangement,
  useFilter,
  useSort,
} from "../../src";
import data from "../ShowcaseApp/data";
import CustomSingleSelectFilter from "../ShowcaseApp/CustomSingleSelectFilter";

const columnsSettings = [
  {
    id: "goals",
    type: ActionBar.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: ActionBar.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: ActionBar.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: ActionBar.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: ActionBar.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level",
  },
  {
    id: "position",
    type: ActionBar.types.columnTypes.SINGLE_SELECT,
    label: "Position",
  },
];

const customRulesByType = {
  ...Filter.defaultRulesByType,
  CUSTOM_SELECT: [Filter.rules.IS, Filter.rules.IS_NOT, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

export default function CustomButton() {
  const [searchTerm, setSearchTerm] = React.useState("");

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

  const [rowColor, setRowColor] = React.useState("");

  const changeRowColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r}, ${g}, ${b})`;
    setRowColor(color);
  };

  const subset = React.useMemo(() => {
    return sortedData.filter(
      item =>
        !!filteredData.find(filteredItem => filteredItem.id === item.id) &&
        (searchTerm
          ? !!Object.values(item).find(value => {
              return new RegExp(`${searchTerm}`, "i").test(`${value}`);
            })
          : true)
    );
  }, [filteredData, searchTerm, sortedData]);

  const renderLevelFilter = () => <CustomSingleSelectFilter />;

  return (
    <Story>
      <Heading level={2}>ActionBar with Custom Button</Heading>
      <Tagline>
        If a user needs any functionality or feature that the Actionbar does not offer, the user has the ability to add
        their own buttons to the ActionBar component to meet those specific needs.
      </Tagline>
      <br />
      <ActionBar>
        <SearchInput
          onChange={term => {
            setSearchTerm(term);
          }}
        />
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
        <Button
          style={{ marginRight: "8px" }}
          kind={Button.types.kind.FLAT}
          onClick={() => {
            changeRowColor();
          }}
        >
          Change Color!
        </Button>
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
            <tr key={item.id} style={{ backgroundColor: rowColor }}>
              <td>{item.id}</td>
              {orderedColumnIds.map(id => (isColumnHidden(id) ? null : <td key={id}>{`${item[id]}`}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </Story>
  );
}
