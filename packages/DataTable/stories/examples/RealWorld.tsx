import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import DataHeader from "@paprika/data-header";
import OverflowMenu from "@paprika/overflow-menu";
import EllipsisVertical from "@paprika/icon/lib/EllipsisVertical";
import Filter, { useFilter } from "@paprika/filter";
import { ColumnsArrangement, useColumnsArrangement } from "@paprika/action-bar";
import Link from "@paprika/link";
import { Column } from "react-table";
import DataTable from "../../src";
import makeData from "../helpers/makeData";
import makeFixedData from "../helpers/makeFixedData";

const headerLabels: Record<ColumnId, string> = {
  firstName: "First name",
  lastName: "Last name",
  age: "Age",
  visits: "Visits",
  status: "Status",
  desc: "Description",
  desc_more: "More description",
  background: "Background",
  progress: "Progress",
};

enum ColumnId {
  firstName = "firstName",
  lastName = "lastName",
  age = "age",
  visits = "visits",
  status = "status",
  desc = "desc",
  desc_more = "desc_more",
  background = "background",
  progress = "progress",
}

const columnsSettings = [
  {
    id: ColumnId.firstName,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.firstName],
  },
  {
    id: ColumnId.lastName,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.lastName],
  },
  {
    id: ColumnId.age,
    type: Filter.types.columnTypes.NUMBER,
    label: headerLabels[ColumnId.age],
  },
  {
    id: ColumnId.visits,
    type: Filter.types.columnTypes.NUMBER,
    label: headerLabels[ColumnId.visits],
  },
  {
    id: ColumnId.status,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.status],
  },
  {
    id: ColumnId.desc,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.desc],
  },
  {
    id: ColumnId.desc_more,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.desc_more],
  },
  {
    id: ColumnId.background,
    type: Filter.types.columnTypes.TEXT,
    label: headerLabels[ColumnId.background],
  },
  {
    id: ColumnId.progress,
    type: Filter.types.columnTypes.NUMBER,
    label: headerLabels[ColumnId.progress],
  },
];

function HeaderMenu() {
  const handleClick = (value: string) => () => console.log(`clicked ${value}`);

  return (
    <OverflowMenu>
      <OverflowMenu.Trigger buttonType="raw">
        <EllipsisVertical />
      </OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={handleClick("one")}>One</OverflowMenu.Item>
      <OverflowMenu.Item onClick={handleClick("two")}>Two</OverflowMenu.Item>
      <OverflowMenu.Item onClick={handleClick("three")}>Three</OverflowMenu.Item>
    </OverflowMenu>
  );
}

function Header({ column }: { column: Column }) {
  return <DataHeader label={headerLabels[column.id as ColumnId]} renderActions={() => <HeaderMenu />} />;
}

function isFixedColumn(columnId: ColumnId) {
  return columnId === ColumnId.firstName || columnId === ColumnId.lastName;
}

export const RealWorldStory: (props: { isForTesting?: boolean }) => JSX.Element = ({ isForTesting = false }) => {
  function NameLink({ value }: { value: string }) {
    return <Link href="wegalvanize.com">{value}</Link>;
  }

  const [data, setData] = React.useState(() => (isForTesting ? makeFixedData(40) : makeData(40)));
  const [borderType, setBorderType] = React.useState(DataTable.types.borderType.GRID);
  const [hasZebraStripes, setHasZebraStripes] = React.useState(false);

  const { filters, filteredData, getFilterProps, getFilterItemProps } = useFilter({
    columns: columnsSettings,
    data,
    initialState: {
      filteredData: data,
      numberApplied: 0,
      filters: [],
    },
  });
  const filterProps = getFilterProps();
  const filterItemProps = getFilterItemProps();
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement({
    defaultOrderedColumnIds: Object.values(ColumnId),
  });

  const columns = React.useMemo(() => {
    return orderedColumnIds
      .map((columnId: ColumnId) =>
        isColumnHidden(columnId)
          ? null
          : {
              Header,
              accessor: columnId,
              width: 200,
              isSticky: isFixedColumn(columnId),
              Cell: columnId === ColumnId.firstName ? NameLink : ({ value }: { value: string | number }) => value,
            }
      )
      .filter(Boolean);
  }, [orderedColumnIds, isColumnHidden]);

  const handleLoadMore = async () => {
    const newItems = await new Promise<Record<string, unknown>[]>(res =>
      setTimeout(() => res(isForTesting ? makeFixedData(40) : makeData(40)), 5000)
    );
    setData(data.concat(newItems));
  };

  function handleToggleBorderType() {
    setBorderType((prev: string) => {
      const allValues = Object.values(DataTable.types.borderType);
      const index = allValues.indexOf(prev);
      if (index >= 0 && index < allValues.length - 1) return allValues[index + 1];
      return allValues[0];
    });
  }

  function handleRowBackgroundPattern() {
    setHasZebraStripes(prev => !prev);
  }

  return (
    <>
      <div style={{ display: "flex", margin: "12px 0" }}>
        <div style={{ marginRight: "8px" }}>
          <Filter {...filterProps} columns={columnsSettings}>
            {filters.map((filter: Record<string, unknown>, index: number) => (
              <Filter.Item
                {...filterItemProps}
                columnId={filter.columnId}
                id={filter.id}
                index={index}
                key={filter.id}
                rule={filter.rule}
                type={filter.type}
                value={filter.value}
              />
            ))}
          </Filter>
        </div>

        <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
          {columnsSettings.map(column => (
            <ColumnsArrangement.ColumnDefinition
              id={column.id}
              label={column.label}
              isHidden={isColumnHidden(column.id)}
              isDisabled={isFixedColumn(column.id)}
            />
          ))}
        </ColumnsArrangement>

        {isForTesting ? (
          <>
            <Button data-pka-anchor="dataTable.toggleBorder" onClick={handleToggleBorderType}>
              Toggle border type
            </Button>
            <Button data-pka-anchor="dataTable.toggleBackground" onClick={handleRowBackgroundPattern}>
              Toggle row background pattern
            </Button>
          </>
        ) : null}
      </div>

      <DataTable
        a11yText="Data table for a real world example."
        columns={columns}
        data={data}
        borderType={borderType}
        hasZebraStripes={hasZebraStripes}
      >
        <DataTable.InfiniteLoader
          itemCount={data.length + 1}
          isItemLoaded={index => data[index] !== undefined}
          isNextPageLoading={false}
          loadMoreItems={handleLoadMore}
        />
        <DataTable.ResizeContainer style={{ height: "calc(100vh - 200px)", width: "100%" }} />
      </DataTable>
    </>
  );
};

export default (): JSX.Element => (
  <Story>
    <StoryHeading level={1}>DataTable in real world example</StoryHeading>
    <Tagline>
      <code>DataTable</code> component with <code>ResizeDetector</code>, <code>DataHeader</code>, <code>Link</code>,
      <code>Filter</code> and
      <code>ColumnsArrangement</code>
    </Tagline>
    <RealWorldStory />
  </Story>
);
