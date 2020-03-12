import React from "react";
import Spinner from "@paprika/spinner";
import ActionBar, { Sort } from "@paprika/action-bar";
import ColumnsArrangement from "./components/ColumnsArrangement";
import DataGrid from "../../src";
import useData from "./hooks/useData";
import useColumnsArragment from "./hooks/useColumnsArragment";
import useSort from "./hooks/useSort";
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

  const { sortedData, sortedFields, handleAddItem, handleDeleteItem, handleChangeItem, handleApply } = useSort({
    columns,
    data,
  });

  const refMain = React.createRef(null);
  const [size, setSize] = React.useState({ width: null, height: null });

  React.useEffect(() => {
    if (refMain.current && (size.width === null || size.height === null)) {
      // 40 top purple bar
      // 62 actionbar
      // 25 footer
      setSize({ width: refMain.current.offsetWidth, height: refMain.current.offsetHeight - 40 - 25 - 44 });
    }
  }, [refMain, size]);

  if (!sortedData || !orderedColumns) {
    return <Spinner />;
  }

  return (
    <sc.Container>
      <sc.TopNav />
      <sc.Body>
        <sc.SideBar />
        <sc.Main ref={refMain}>
          <ActionBar>
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
            <Sort appliedNumber={0} columns={columns} onAddField={handleAddItem} onApply={handleApply}>
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
          </ActionBar>
          <DataGrid hasAutofocus={false} data={sortedData} width={size.width || 640} height={size.height || 400}>
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
