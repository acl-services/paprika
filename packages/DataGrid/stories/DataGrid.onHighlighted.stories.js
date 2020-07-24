import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import tokens from "@paprika/tokens";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import Spinner from "@paprika/spinner";
import DataGrid from "../src";

const storyName = getStoryName("DataGrid");

export function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const refDataGrid = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(100, 4);
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

  function handleHighlighted(event) {
    if (event.next.ref) event.next.ref.setHighlight(true);
    if (event.prev.ref) event.prev.ref.setHighlight(false);
  }

  return (
    <Sbook.Story>
      {isLoading ? (
        <Spinner />
      ) : (
        <DataGrid ref={refDataGrid} data={data} keygen="id" onHighlighted={handleHighlighted}>
          {data.length
            ? Object.keys(data[0]).map((key, index) => {
                if (index === 3) {
                  return (
                    <DataGrid.ColumnDefinition
                      key={key}
                      header={key}
                      cellPropsResetCSS
                      width={260}
                      cellProps={() => ({
                        style: {
                          background: tokens.color.yellowLighten20,
                        },
                      })}
                      cell={({ row, defaultCssCellStyle, isHighlighted }) => {
                        const cssStyle = isHighlighted
                          ? {
                              overflow: "hidden",
                              background: "white",
                              maxHeight: "88px",
                              position: "absolute",
                              top: "-2px",
                              padding: "8px",
                              lineHeight: "1.3",
                              borderRadius: "4px",
                              boxShadow: `0 0 0 2px ${tokens.color.blue}`,
                            }
                          : { ...defaultCssCellStyle };

                        return <div style={cssStyle}>{row[key]}</div>;
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

storiesOf(`${storyName}/Examples`, module).add("With onHighlighted", () => <App />);
