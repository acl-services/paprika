import React from "react";
import { storiesOf } from "@storybook/react";
import Spinner from "@paprika/spinner";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import DataGrid from "../src";
import useData from "./useData";

const storyName = getStoryName("DataGrid");

export function App({ borderType }) {
  const { data, isIdle } = useData(15, 4);

  return (
    <Sbook.Story>
      {isIdle ? (
        <Spinner />
      ) : (
        <DataGrid data={data} borderType={borderType}>
          {data.length
            ? Object.keys(data[0]).map(key => {
                return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
              })
            : null}
        </DataGrid>
      )}
    </Sbook.Story>
  );
}

storiesOf(`${storyName} / Borders`, module).add("Grid", () => <App />);
storiesOf(`${storyName} / Borders`, module).add("Empty", () => <App borderType="empty" />);
storiesOf(`${storyName} / Borders`, module).add("Vertical", () => <App borderType="horizontal" />);
storiesOf(`${storyName} / Borders`, module).add("Horizontal", () => <App borderType="vertical" />);
