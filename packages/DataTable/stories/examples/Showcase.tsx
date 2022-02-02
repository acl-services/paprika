import React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import CollapsibleCard from "@paprika/collapsible-card";
import { Story } from "storybook/assets/styles/common.styles";
import DataTable from "../../src";
import { DataTableProps } from "../../src/DataTable";
import makeData from "../helpers/makeData";

const dataRows = 3;

const props = () => ({
  borderType: select("borderType", ["grid", "none", "horizontal", "vertical"], "horizontal"),
  hasZebraStripes: boolean("hasZebraStripes", false),
  isHeaderSticky: boolean("isHeaderSticky", true),
});

export const ShowcaseStory: (props: Partial<DataTableProps>) => JSX.Element = props => {
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
        // isSticky: true,
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
      {
        Header: "Description",
        accessor: "desc",
      },
      {
        Header: "More description",
        accessor: "desc_more",
      },
      {
        Header: "Background",
        accessor: "background",
        width: 300,
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );

  const [items] = React.useState(() => makeData(dataRows));

  return (
    <DataTable a11yText="Data table for showcase." columns={columns} data={items} {...props}>
      <DataTable.InfiniteLoader
        itemCount={items.length}
        isItemLoaded={index => items[index] !== undefined}
        isNextPageLoading={false}
        loadMoreItems={async () => {}}
      />
      <DataTable.ResizeContainer style={{ maxHeight: "50vh", width: "auto", maxWidth: "100%", background: "#fdd" }} />
    </DataTable>
  );
};

export default function ShowcaseWrapper() {
  const [isCollapsed, setCollapsed] = React.useState(true);

  return (
    <Story>
      <ShowcaseStory {...props()} />
      <p>———</p>
      <CollapsibleCard
        onToggleIsCollapsed={isCollapsed => {
          setCollapsed(isCollapsed);
        }}
        isCollapsed={isCollapsed}
      >
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Collapsed Table</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>{!isCollapsed && <ShowcaseStory {...props()} />}</CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
}
