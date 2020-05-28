import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import Spinner from "@paprika/spinner";
import DataGrid from "../src";

export function App() {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);
  const refDataGrid = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(100, 5);
      setData(() => data);
      setIsIdle(() => false);
    }

    loadData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
  }, [data.length]);

  return (
    <Sbook.Story>
      {isIdle ? (
        <Spinner />
      ) : (
        <DataGrid ref={refDataGrid} data={data} keygen="id" hasZebraStripes>
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

storiesOf("DataGrid / regular", module).add("With zebra stripes", () => <App />);
