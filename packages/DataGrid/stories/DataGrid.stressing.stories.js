import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

export function App() {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [size, setSize] = React.useState({ width: 740, height: 500 });
  const refDataGrid = React.useRef(null);
  const refPage = React.useRef([0]);
  const refSBookStory = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(300, 500);
      setData(() => data);
      setIsIdle(() => false);
    }

    setIsIdle(() => true);
    loadData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
  }, [data.length]);

  React.useEffect(() => {
    if (refSBookStory.current) {
      setSize(() => {
        const padding = getComputedStyle(refSBookStory.current).padding;
        const space = Number.parseInt(padding, 10) * 2;

        return {
          width: refSBookStory.current.offsetWidth - space,
          height: refSBookStory.current.offsetHeight - space,
        };
      });
    }
  }, [refSBookStory]);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const nextData = await w.getDataFromWorker(300, 500);
      setData(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [page]);

  function isChecked() {
    return "unchecked";
  }

  function handleInfinityScrollReached({ nextPage }) {
    if (!refPage.current.includes(nextPage)) {
      refPage.current = refPage.current.concat(nextPage);
      setPage(() => nextPage);
    }
  }

  function handleSelect() {}

  return (
    <Sbook.Story ref={refSBookStory} css="height: calc(100% - 120px);">
      <DataGrid ref={refDataGrid} data={data} isIdle={isIdle} keygen="id" width={size.width} height={size.height}>
        {renderColumnIndicator({ onSelect: handleSelect, isChecked })}
        {renderColumnExpand()}
        {data.length
          ? Object.keys(data[0]).map(key => {
              return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
            })
          : null}
        <DataGrid.InfinityScroll rowsOffset={80} onReached={handleInfinityScrollReached} />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Stressing", () => <App />);
