import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import SidePanel from "@paprika/sidepanel";
import worker from "workerize-loader!./helpers/data.integration.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import Spinner from "@paprika/spinner";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

export function App() {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [checked, setChecked] = React.useState([]);
  const [isAllChecked, setIsAllChecked] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const [size, setSize] = React.useState({ width: 740, height: 500 });
  const refDataGrid = React.useRef(null);
  const refPage = React.useRef([0]);
  const refSBookStory = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker({ page: 0 });
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
      const nextData = await w.getDataFromWorker({ page });
      setData(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [page]);

  function handleRowChecked({ rowIndex }) {
    if (checked.includes(data[rowIndex].key)) {
      setChecked(checked => {
        return checked.filter(key => key !== data[rowIndex].key);
      });

      return;
    }

    setChecked(checked => {
      return [...new Set([...checked, data[rowIndex].key])];
    });
  }

  function isChecked({ rowIndex }) {
    if (data.length === 0) return "unchecked";

    return rowIndex !== null && checked.includes(data[rowIndex].key) ? "checked" : "unchecked";
  }

  function handleCheckAll() {
    setIsAllChecked(isChecked => (isChecked ? "unchecked" : "checked"));
  }

  function handleInfinityScrollReached({ nextPage }) {
    if (!refPage.current.includes(nextPage)) {
      refPage.current = refPage.current.concat(nextPage);
      setPage(() => nextPage);
    }
  }

  function renderSidepanel({ row }) {
    return (
      <SidePanel onClose={handleSidePanelClose} isOpen={isOpen} width={450}>
        <SidePanel.FocusLock
          onDeactivation={() => {
            // https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
            setTimeout(() => {
              refDataGrid.current.focus();
            }, 0);
          }}
        />
        <SidePanel.Header>{row.name}</SidePanel.Header>
        {Object.keys(row).map(key => {
          return (
            <p>
              {key} : {row[key]}
            </p>
          );
        })}
      </SidePanel>
    );
  }

  return (
    <Sbook.Story ref={refSBookStory} css="height: calc(100% - 120px);">
      {isIdle ? (
        <Spinner />
      ) : (
        <>
          {row && renderSidepanel({ row })}
          <DataGrid
            ref={refDataGrid}
            data={data}
            keygen="id"
            width={size.width}
            height={size.height}
            onClick={handleOpenSidepanel}
            onPressEnter={handleOpenSidepanel}
            onPressSpaceBar={handleOpenSidepanel}
            onRowChecked={handleRowChecked}
          >
            {renderColumnIndicator({
              onCheck: handleRowChecked,
              onCheckAll: handleCheckAll,
              isAllChecked,
              isChecked,
              hasNumber: false,
            })}
            {renderColumnExpand()}
            {data.length
              ? Object.keys(data[0]).map(key => {
                  if (key === "key") return null;
                  return <DataGrid.ColumnDefinition key={key} header={key} cell={key} />;
                })
              : null}
            <DataGrid.InfinityScroll rowsOffset={50} onReached={handleInfinityScrollReached} />
          </DataGrid>
        </>
      )}
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Integration", () => <App />);
