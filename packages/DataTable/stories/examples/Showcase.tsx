import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const ShowcaseStory: () => JSX.Element = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        // sticky: "left",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            width: 100,
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            width: 100,
          },
        ],
      },
      {
        Header: "Info",
        columns: [
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
      },
      {
        Header: " ",
        columns: [
          {
            Header: "Description",
            accessor: "desc",
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "More description",
            accessor: "desc_more",
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "Background",
            accessor: "background",
            width: 300,
          },
        ],
      },
      {
        Header: " ",
        // sticky: "right",
        columns: [
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  return (
    <Story>
      <StoryHeading level={1}>CollapsibleCard</StoryHeading>
      <Tagline>
        Styled collapsible card component. Check the &quot;Knobs&quot; and &quot;Actions&quot; tabs in the Storybook
        sidepanel.
      </Tagline>
      <br />
      <DataTable columns={columns} data={makeData(40)} loadMoreItems={() => makeData(40)} />
    </Story>
  );
};

export default ShowcaseStory;
