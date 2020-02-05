import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import SidePanel from "@paprika/sidepanel";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

export function App() {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [row, setRow] = React.useState(null);
  const [size, setSize] = React.useState({ width: 740, height: 500 });
  const refDataGrid = React.useRef(null);
  const refPage = React.useRef([0]);
  const refSBookStory = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(150, 10);
      setData(() => data);
      setIsIdle(() => false);
    }

    setIsIdle(() => true);
    loadData();
  }, []);

  function handleOpenSidepanel({ row }) {
    setRow(() => row);
    setIsOpen(() => true);
  }

  function handleSidePanelClose() {
    setIsOpen(() => false);
  }

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
      const nextData = await w.getDataFromWorker(150, 10);
      setData(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [page]);

  function handleOnSelect() {
    console.log("handleOnSelect");
  }

  function isChecked() {
    return "unchecked";
  }

  function handleInfinityScrollReached({ nextPage }) {
    if (!refPage.current.includes(nextPage)) {
      refPage.current = refPage.current.concat(nextPage);
      setPage(() => nextPage);
    }
  }

  function renderSidepanel({ row }) {
    return (
      <SidePanel onClose={handleSidePanelClose} isOpen={isOpen}>
        <SidePanel.FocusLock
          onDeactivation={() => {
            // https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
            setTimeout(() => {
              refDataGrid.current.focus();
            }, 0);
          }}
        />
        <SidePanel.Header>{row.name}</SidePanel.Header>
        <div
          css={`
            width: 300px;
            overflow: hidden;
          `}
        >
          <img src={`${row.thumbnail.path}.${row.thumbnail.extension}`} width="100%" alt={row.name} />
        </div>
        <div>{row.description}</div>
      </SidePanel>
    );
  }

  return (
    <Sbook.Story ref={refSBookStory} css="height: calc(100% - 120px);">
      {row && renderSidepanel({ row })}
      <DataGrid
        ref={refDataGrid}
        data={data}
        isIdle={isIdle}
        keygen="id"
        width={size.width}
        height={size.height}
        onClick={handleOpenSidepanel}
        onEnter={handleOpenSidepanel}
        onSpaceBar={handleOpenSidepanel}
      >
        {renderColumnIndicator({ onSelect: handleOnSelect, isChecked })}
        {renderColumnExpand()}
        {data.length
          ? Object.keys(data[0]).map(key => {
              return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
            })
          : null}
        <DataGrid.InfinityScroll rowsOffset={50} onReached={handleInfinityScrollReached} />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Integration", () => <App />);
