import React from "react";
import { isEqual } from "lodash";
import Spinner from "@paprika/spinner";
import ActionBar, { Sort, Filter } from "@paprika/action-bar";
import SidePanel from "@paprika/sidepanel";
import tokens from "@paprika/tokens";
import ColumnsArrangement from "./components/ColumnsArrangement";
import DataGrid from "../../src";
import useData from "./hooks/useData";
import useColumnsArragment from "./hooks/useColumnsArragment";
import useSort from "./hooks/useSort";
import useFilters from "./hooks/useFilters";
import sc from "./AAA.styles";

export default function AAA() {
  const { data, columns } = useData();
  const [next, setNext] = React.useState(0);

  const {
    orderedColumns,
    handleChangeVisibility,
    handleShowAll,
    handleHideAll,
    handleChangeOrder,
  } = useColumnsArragment({ columns, setNext });

  const {
    sortedData,
    sortedFields,
    appliedNumber,
    handleAddItem,
    handleDeleteItem,
    handleChangeItem,
    handleApply,
  } = useSort({
    columns,
    data,
    setNext,
  });

  const {
    appliedNumberOfFilters,
    filters,
    onAddFilter,
    onChangeOperator,
    onDeleteFilter,
    onFilterChange,
    operator,
    onApply,
    filteredData,
  } = useFilters({
    columns,
    data,
    setNext,
  });

  const refMain = React.createRef(null);
  const refCurrentRow = React.useRef(null);
  const [size, setSize] = React.useState({ width: null, height: null });
  const [activeRow, setActiveRow] = React.useState(null);
  const [isSidepanelOpen, setIsSidepanelOpen] = React.useState(false);

  function handleExpandClick({ row }) {
    if (JSON.stringify(row) === JSON.stringify(refCurrentRow.current)) {
      setIsSidepanelOpen(false);
      setActiveRow(null);
      refCurrentRow.current = null;
      return;
    }

    setActiveRow(() => row);
    setIsSidepanelOpen(true);
    refCurrentRow.current = row;
  }

  React.useEffect(() => {
    if (refMain.current && (size.width === null || size.height === null)) {
      // 40 top purple bar
      // 62 actionbar
      // 25 footer
      setNext(prev => prev + 1);
      setSize({ width: refMain.current.offsetWidth, height: refMain.current.offsetHeight - 40 - 25 - 44 });
    }
  }, [refMain, size]);

  const subset = React.useMemo(() => {
    if (sortedData && filteredData && sortedData.length > 0 && filteredData.length > 0) {
      return sortedData.filter(item => filteredData.find(filteredItem => isEqual(filteredItem, item)));
    }
    return appliedNumberOfFilters > 0 ? filteredData : sortedData;
  }, [appliedNumberOfFilters, filteredData, sortedData]);

  if (!sortedData || !orderedColumns) {
    return <Spinner />;
  }

  return (
    <sc.Container>
      <sc.TopNav />
      <sc.Body>
        <SidePanel
          isOpen={isSidepanelOpen && activeRow}
          onClose={() => {
            setIsSidepanelOpen(false);
            setActiveRow(null);
          }}
        >
          <SidePanel.Header>Attribute type details</SidePanel.Header>
          {activeRow &&
            Object.keys(activeRow).map(key => {
              return (
                <React.Fragment key={key}>
                  <div>
                    <span>{columns.find(column => key === column.key).label}</span>
                    <span>{activeRow[key]}</span>
                  </div>
                  <br />
                </React.Fragment>
              );
            })}
        </SidePanel>
        <sc.SideBar />
        <sc.Main ref={refMain}>
          <ActionBar>
            <Filter
              appliedNumber={appliedNumberOfFilters}
              columns={columns}
              onAddFilter={onAddFilter}
              onApply={onApply}
              onChangeOperator={onChangeOperator}
              operator={operator}
            >
              {filters.map((filter, index) => (
                <Filter.Item
                  key={filter.id}
                  {...filter}
                  onDelete={onDeleteFilter}
                  onChange={onFilterChange}
                  index={index}
                />
              ))}
            </Filter>
            <Sort appliedNumber={appliedNumber} columns={columns} onAddField={handleAddItem} onApply={handleApply}>
              {sortedFields.map((field, index) => (
                <Sort.Field
                  key={field.id}
                  {...field}
                  onDelete={handleDeleteItem}
                  onChange={handleChangeItem}
                  isFirst={index === 0}
                />
              ))}
            </Sort>
            <ColumnsArrangement
              onChangeOrder={handleChangeOrder}
              onHideAll={handleHideAll}
              onShowAll={handleShowAll}
              onChangeVisibility={handleChangeVisibility}
            >
              {orderedColumns.map(column => {
                return (
                  <ColumnsArrangement.ColumnItem
                    id={column.id}
                    isDisabled={column.isDisabled}
                    isHidden={column.isHidden}
                    key={column.id}
                    label={column.label}
                  />
                );
              })}
            </ColumnsArrangement>
          </ActionBar>
          <DataGrid
            rerender={next}
            hasAutofocus={false}
            data={subset}
            width={size.width || 640}
            height={size.height || 400}
          >
            {orderedColumns.map(column => {
              let cellProps = {};
              if (column.key === "ATTTYPE_NAME") {
                cellProps = {
                  style: {
                    color: tokens.color.blue,
                  },
                };
              }

              return column.isHidden ? null : (
                <DataGrid.ColumnDefinition
                  onClick={({ row }) => {
                    handleExpandClick({ row });
                  }}
                  key={column.key}
                  header={column.label}
                  cell={column.key}
                  cellProps={() => cellProps}
                />
              );
            })}
          </DataGrid>
        </sc.Main>
      </sc.Body>
    </sc.Container>
  );
}
