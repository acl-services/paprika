import React from "react";
import CollapsibleCard from "@paprika/collapsible-card";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import DataTable, { DataTableRef } from "../../src";
import makeData from "../helpers/makeData";

export const WithCollapsibleStory: () => JSX.Element = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 100,
        isSticky: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 100,
        isSticky: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 60,
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const [items] = React.useState(() => makeData(5));
  const tableRef = React.useRef<DataTableRef>(null);

  return (
    <DataTable a11yText="Data table for showcase." columns={columns} height="400px" data={items} ref={tableRef}>
      <DataTable.InfiniteLoader
        itemCount={items.length}
        isItemLoaded={(index: number) => items[index] !== undefined}
        isNextPageLoading={false}
        loadMoreItems={async () => {
          // null
        }}
      />
    </DataTable>
  );
};

export default () => {
  const [isCollapsed, setCollapsed] = React.useState(true);

  return (
    <Story>
      <StoryHeading level={1}>DataTable</StoryHeading>
      <Tagline>
        with <code>CollapsibleCard</code>
      </Tagline>
      <CollapsibleCard
        onToggleIsCollapsed={isCollapsed => {
          setCollapsed(isCollapsed);
        }}
        isCollapsed={isCollapsed}
      >
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Collapsed Table</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>{!isCollapsed && <WithCollapsibleStory />}</CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};
