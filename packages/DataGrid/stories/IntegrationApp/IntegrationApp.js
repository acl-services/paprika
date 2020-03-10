import React from "react";
import ReactDOM from "react-dom";
import produce from "immer";
import SidePanel from "@paprika/sidepanel";
import Spinner from "@paprika/spinner";
import worker from "workerize-loader!../helpers/data.integration.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import ActionBar from "./components/ActionBar";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../../src";

export default function App({ size }) {
  // DataGrid
  // const [data, setData] = React.useState([]);
  const [filterStates, setFilterStates] = React.useState({
    sortedFields: [],
    filters: [],
    operator: "AND",
  });
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
      const subset = await w.getSubsetFromWorker({ page: 0 });
      const initialColumns = await w.getColumnsFromWorker();

      setTimeout(() => {
        ReactDOM.unstable_batchedUpdates(() => {
          setSubset(() => subset);
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
    if (subset.length > 0) {
      setIsIdle(() => false);
    }
  }, [subset.length]);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const nextData = await w.getSubsetFromWorker({ ...filterStates, page });
      setSubset(data => data.concat(nextData));
    }

    if (page > 0) {
      loadData();
    }
  }, [page]);

  async function getNewSubset({ sortedFields, filters, operator }) {
    const w = worker();
    const newSubset = await w.getSubsetFromWorker({ sortedFields, filters, columns, operator, page: 0 });
    setSubset(() => newSubset);
    setFilterStates(
      produce(() => ({
        sortedFields,
        filters,
        operator,
        columns,
      }))
    );
  }

  function handleRowChecked({ rowIndex }) {
    if (checked.includes(subset[rowIndex].key)) {
      setChecked(checked => {
        return checked.filter(key => key !== subset[rowIndex].key);
      });

      return;
    }

    setChecked(checked => {
      return [...new Set([...checked, subset[rowIndex].key])];
    });
  }

  function isChecked({ rowIndex }) {
    if (subset.length === 0) return "unchecked";

    return rowIndex !== null && checked.includes(subset[rowIndex].key) ? "checked" : "unchecked";
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
    <React.Fragment>
      {row && renderSidepanel({ row })}
      <ActionBar
        columns={columns}
        orderedColumns={orderedColumns}
        setOrderedColumns={setOrderedColumns}
        getSubset={getNewSubset}
      />
      {isIdle ? (
        <Spinner />
      ) : (
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

          {/* throws error if column difinition is an empty array */}
          {/* {subset.length
          ? orderedColumns.map(column =>
              column.isHidden ? null : (
                <DataGrid.ColumnDefinition key={column.id} header={column.label} cell={column.id} />
              )
            )
          : null} */}

          {orderedColumns.map(column =>
            column.isHidden ? null : (
              <DataGrid.ColumnDefinition key={column.id} header={column.label} cell={column.id} />
            )
          )}

          <DataGrid.InfiniteScroll rowsOffset={50} onReachedOffset={handleInfinityScrollReached} />
        </DataGrid>
      )}
    </React.Fragment>
  );
}
