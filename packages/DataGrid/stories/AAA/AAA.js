import React from "react";
import { isEqual } from "lodash";
import Spinner from "@paprika/spinner";
import ActionBar, { Sort, Filter } from "@paprika/action-bar";
import SidePanel from "@paprika/sidepanel";
import ColumnsArrangement from "./components/ColumnsArrangement";
import DataGrid, { renderColumnExpand } from "../../src";
import useData from "./hooks/useData";
import useColumnsArragment from "./hooks/useColumnsArragment";
import useSort from "./hooks/useSort";
import useFilters from "./hooks/useFilters";
import sc from "./AAA.styles";

export default function AAA() {
  const { data, columns } = useData();

  const {
    orderedColumns,
    handleChangeVisibility,
    handleShowAll,
    handleHideAll,
    handleChangeOrder,
  } = useColumnsArragment(columns);

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
      setSize({ width: refMain.current.offsetWidth, height: refMain.current.offsetHeight - 40 - 25 - 44 });
    }
  }, [refMain, size]);

  function getSubset() {
    if (sortedData && filteredData && sortedData.length > 0 && filteredData.length > 0) {
      return sortedData.filter(item => filteredData.find(filteredItem => isEqual(filteredItem, item)));
    }

    return appliedNumberOfFilters > 0 ? filteredData : sortedData;
  }

  if (!sortedData || !orderedColumns) {
    return <Spinner />;
  }

  return (
    <sc.Container>
      <sc.TopNav />
      <sc.Body>
        <sc.SideBar />
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
          <DataGrid hasAutofocus={false} data={getSubset()} width={size.width || 640} height={size.height || 400}>
            {renderColumnExpand({ onClick: handleExpandClick })}
            {orderedColumns.map(column => {
              return column.isHidden ? null : (
                <DataGrid.ColumnDefinition key={column.key} header={column.label} cell={column.key} />
              );
            })}
          </DataGrid>
        </sc.Main>
      </sc.Body>
    </sc.Container>
  );
}
