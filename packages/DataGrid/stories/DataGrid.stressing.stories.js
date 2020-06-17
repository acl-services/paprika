import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import Spinner from "@paprika/spinner";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

const storyName = getStoryName("DataGrid");

export function App(props) {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [isAllChecked, setIsAllChecked] = React.useState(false);
  const { overrideWidth = null, numberOfColumns = 500, rowsOffset = 80 } = props;
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
      const data = await w.getDataFromWorker(300, numberOfColumns);
      setData(() => data);
      setIsIdle(() => false);
    }

    setIsIdle(() => true);
    loadData();
  }, [numberOfColumns]);

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
  }, [data.length]);

  React.useEffect(() => {
    if (refSBookStory.current && !overrideWidth) {
      setSize(() => {
        const padding = getComputedStyle(refSBookStory.current).padding;
        const space = Number.parseInt(padding, 10) * 2;

        return {
          width: refSBookStory.current.offsetWidth - space,
          height: refSBookStory.current.offsetHeight - space,
        };
      });
    }
  }, [overrideWidth, refSBookStory]);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const nextData = await w.getDataFromWorker(300, numberOfColumns);
      setData(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [numberOfColumns, page]);

  function handleInfiniteScrollReached({ nextPage }) {
    if (!refPage.current.includes(nextPage)) {
      refPage.current = refPage.current.concat(nextPage);
      setPage(() => nextPage);
    }
  }

  function handleCheck({ rowIndex, isHeader }) {
    if (isHeader) {
      setIsAllChecked(prev => !prev);
      return;
    }
    if (checkedItems.includes(rowIndex)) {
      setCheckedItems(list => {
        const cloneList = list.slice(0);
        return cloneList.filter(item => item !== rowIndex);
      });
      return;
    }

    setCheckedItems(list => [...new Set([...list, rowIndex])]);
  }

  return (
    <Sbook.Story
      ref={refSBookStory}
      css={`
        ${overrideWidth ? "" : "height: calc(100% - 120px);"}
      `}
    >
      {isIdle ? (
        <Spinner />
      ) : (
        <DataGrid ref={refDataGrid} data={data} width={size.width} height={overrideWidth || size.height}>
          {renderColumnIndicator({
            onCheck: handleCheck,
            checkedItems,
            hasNumber: false,
            isAllChecked,
          })}
          {renderColumnExpand()}
          {data.length
            ? Object.keys(data[0]).map(key => {
                return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
              })
            : null}
          <DataGrid.InfiniteScroll rowsOffset={rowsOffset} onReachedOffset={handleInfiniteScrollReached} />
        </DataGrid>
      )}
    </Sbook.Story>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Stress Test", () => <App />);
