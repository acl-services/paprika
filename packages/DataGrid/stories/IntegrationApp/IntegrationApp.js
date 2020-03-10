import React from "react";
import ReactDOM from "react-dom";
import SidePanel from "@paprika/sidepanel";
import Spinner from "@paprika/spinner";
import worker from "workerize-loader!../helpers/data.integration.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import ActionBar from "./components/ActionBar";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../../src";

export default function App({ size }) {
  // DataGrid
  const [data, setData] = React.useState([]);
  const [subset, setSubset] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [checked, setChecked] = React.useState([]);
  const [isAllChecked, setIsAllChecked] = React.useState(false);
  const [row, setRow] = React.useState(null);
  const refDataGrid = React.useRef(null);
  const refPage = React.useRef([0]);

  // ActionBar
  const [columns, setColumns] = React.useState([]);
  const [orderedColumns, setOrderedColumns] = React.useState([]);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker({ page: 0 });
      const initialColumns = await w.getColumnsFromWorker();

      setTimeout(() => {
        ReactDOM.unstable_batchedUpdates(() => {
          setData(() => data);
          setSubset(() => data);
          setColumns(() => initialColumns);
          setOrderedColumns(() => initialColumns.map(column => ({ ...column, isHidden: false, isDisabled: false })));
          setIsIdle(() => false);
        });
      }, 0);
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
    async function loadData() {
      const w = worker();
      const nextData = await w.getDataFromWorker({ page });
      setData(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [page]);

  async function getSubset({ sortedFields, filters, operator }) {
    const w = worker();
    const newSubset = await w.getSubsetFromWorker({ sortedFields, filters, columns, operator });
    setSubset(() => newSubset);
  }

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

  console.log(data, subset, orderedColumns);

  if (isIdle || subset.length === 0) return <Spinner />;

  console.log(orderedColumns);

  return (
    <React.Fragment>
      {row && renderSidepanel({ row })}
      <ActionBar
        columns={columns}
        orderedColumns={orderedColumns}
        setOrderedColumns={setOrderedColumns}
        getSubset={getSubset}
      />
      <DataGrid
        ref={refDataGrid}
        data={subset}
        isIdle={isIdle}
        keygen="id"
        width={size.width}
        height={size.height}
        onClick={handleOpenSidepanel}
        onEnter={handleOpenSidepanel}
        onSpaceBar={handleOpenSidepanel}
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
        {/* {subset.length
          ? orderedColumns.map(column =>
              column.isHidden ? null : (
                <DataGrid.ColumnDefinition key={column.id} header={column.label} cell={column.id} />
              )
            )
          : null} */}

        {orderedColumns.map(column =>
          column.isHidden ? null : <DataGrid.ColumnDefinition key={column.id} header={column.label} cell={column.id} />
        )}

        <DataGrid.InfiniteScroll rowsOffset={50} onReached={handleInfinityScrollReached} />
      </DataGrid>
    </React.Fragment>
  );
}
