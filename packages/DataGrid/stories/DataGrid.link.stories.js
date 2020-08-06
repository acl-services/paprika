import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import Spinner from "@paprika/spinner";
import SidePanel from "@paprika/sidepanel";
import DataGrid, { LinkAction } from "../src";

const storyName = getStoryName("DataGrid");

export function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const refDataGrid = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(100, 5);
      setData(() => data);
      setIsLoading(() => false);
    }

    loadData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      setIsLoading(() => false);
    }
  }, [data.length]);

  return (
    <Sbook.Story>
      <SidePanel
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <SidePanel.Overlay />
        <SidePanel.Header>Test</SidePanel.Header>
        <SidePanel.Content>Test links content</SidePanel.Content>
      </SidePanel>
      {isLoading ? (
        <Spinner />
      ) : (
        <DataGrid ref={refDataGrid} data={data} keygen="id" hasZebraStripes>
          {data.length
            ? Object.keys(data[0]).map((key, index) => {
                if (index === 1) {
                  return (
                    <DataGrid.ColumnDefinition
                      key={key}
                      header="Link with onClick"
                      cell={({ row }) => (
                        <LinkAction
                          onClick={() => {
                            setIsOpen(true);
                          }}
                        >
                          {row[key]}
                        </LinkAction>
                      )}
                      onPressEnter={() => setIsOpen(true)}
                    />
                  );
                }

                if (index === 2) {
                  return (
                    <DataGrid.ColumnDefinition
                      key={key}
                      header="Link default"
                      cell={({ row }) => <LinkAction href="http://design.wegalvanize.com">{row[key]}</LinkAction>}
                      onPressEnter={() => {
                        LinkAction.href("http://design.wegalvanize.com");
                      }}
                    />
                  );
                }

                if (index === 3) {
                  return (
                    <DataGrid.ColumnDefinition
                      key={key}
                      header="Link with _blank"
                      cell={({ row }) => (
                        <LinkAction href="http://design.wegalvanize.com" target="_blank">
                          {row[key]}
                        </LinkAction>
                      )}
                      onPressEnter={() => {
                        LinkAction.href("http://design.wegalvanize.com", "_blank");
                      }}
                    />
                  );
                }

                return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
              })
            : null}
        </DataGrid>
      )}
    </Sbook.Story>
  );
}

storiesOf(`${storyName}/Examples`, module).add("With link cell", () => <App />);
