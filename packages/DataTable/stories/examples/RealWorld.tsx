import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import DataHeader from "@paprika/data-header";
import OverflowMenu from "@paprika/overflow-menu";
import EllipsisVertical from "@paprika/icon/lib/EllipsisVertical";
import Filter, { useFilter } from "@paprika/filter";
import { ColumnsArrangement, useColumnsArrangement } from "@paprika/action-bar";
import ResizeDetector, { useDimensions } from "@paprika/resize-detector";
import Link from "@paprika/link";
import { Column } from "react-table";
import * as DataTable from "../../src";
import makeData from "../helpers/makeData";

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

function Table({ columns, data, onLoadMore }: any) {
  const { width = 1200, height = 500 } = useDimensions();

  return (
    <DataTable.Table
      a11yText="Data table for a real world example."
      height={height}
      width={width}
      columns={columns}
      data={data}
      borderType="grid"
    >
      <DataTable.InfiniteLoader
        itemCount={data.length + 1}
        isItemLoaded={index => data[index] !== undefined}
        isNextPageLoading={false}
        loadMoreItems={onLoadMore}
      />
    </DataTable.Table>
  );
}

export const RealWorldStory: () => JSX.Element = () => {
  function NameLink({ value }: { value: string }) {
    return <Link href="wegalvanize.com">{value}</Link>;
  }

  const [data, setData] = React.useState(() => makeData(5));

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
    const newItems = await new Promise<Record<string, unknown>[]>(res => setTimeout(() => res(makeData(40)), 5000));

    setData(data.concat(newItems));
  };

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
      </div>

      <ResizeDetector isFullHeight style={{ height: "calc(100vh - 200px)" }}>
        <Table columns={columns} data={data} onLoadMore={handleLoadMore} />
      </ResizeDetector>
    </>
  );
};

export default (): JSX.Element => (
  <Story>
    <StoryHeading level={1}>DataTable in real world example</StoryHeading>
    <Tagline>
      <code>DataTable</code> component with <code>DataHeader</code>, <code>Link</code>, <code>Filter</code> and
      <code>ColumnsArrangement</code>
    </Tagline>
    <RealWorldStory />
  </Story>
);
