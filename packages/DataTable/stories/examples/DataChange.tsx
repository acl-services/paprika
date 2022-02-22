import React from "react";
import Input from "@paprika/input";
import Button from "@paprika/button";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const DataChangeStory: () => JSX.Element = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 100,
      },
      {
        Header: "Description",
        width: 100,
        accessor: "desc",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 100,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 60,
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const [items, setItems] = React.useState(() => makeData(5).map(item => ({ ...item, desc: "a custom description" })));

  const handleSave = () => {
    setItems(prevItems => {
      const newItemCopy = { ...prevItems[2] };
      const inputValue = inputRef && inputRef.current ? inputRef.current.value : "";
      newItemCopy.desc = inputValue;
      const newItems = [...prevItems];
      newItems[0] = newItemCopy;
      newItems[2] = newItemCopy;
      return newItems;
    });
  };

  const handleAddItem = () => {
    setItems(prevItems => {
      const newItemCopy = { ...prevItems[0] };
      const newItems = [...prevItems];
      newItems.push(newItemCopy);
      return newItems;
    });
  };

  return (
    <>
      <Input
        ref={inputRef}
        defaultValue="This will be the description that will be set in the data on the first and third row. Click save to update the table data"
      />
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={handleAddItem}>Add item</Button>
      <DataTable a11yText="A simple data table." columns={columns} data={items}>
        <DataTable.InfiniteLoader
          itemCount={items.length}
          isItemLoaded={index => items[index] !== undefined}
          loadMoreItems={async () => {
            console.log("callign loadmore items");
            // do nothing
          }}
        />
      </DataTable>
    </>
  );
};

export default DataChangeStory;
