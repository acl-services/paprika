import React from "react";
import SidePanel from "@paprika/sidepanel";
import DataTable from "../../../src";
import { fetchMarvelAPI } from "./helpers";

export default function App() {
  const [offsetLetter, setOffsetLetter] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [letters, setLetters] = React.useState({});
  const [data, setData] = React.useState([]);
  const [row, setRow] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      // will search by "a" then by "b" .... "z" try String.fromCharCode(97 + 0) on devtools
      const letter = String.fromCharCode(97 + offsetLetter);
      const data = await fetchMarvelAPI(letter, offset);
      setLetters(letters => {
        const { count, limit, offset, total } = data.data;
        return { ...letters, [letter]: { count, limit, offset, total } };
      });

      setData(state => {
        return state.concat(data.data.results);
      });
      setIsLoading(() => false);
    }

    setIsLoading(() => true);
    getData();
  }, [offset, offsetLetter]);

  function renderSeries(cell) {
    return cell.series.items.map(item => <span>{item.name}</span>);
  }

  function renderThumbnail(row) {
    return `${row.thumbnail.path}.${row.thumbnail.extension}`;
  }

  function handleExpandedRow(row) {
    setRow(row);
    setIsOpen(() => true);
  }

  function handleSidePanelClose() {
    setIsOpen(() => false);
  }

  function handleLoadMore() {
    const currentLetter = String.fromCharCode(97 + offsetLetter);
    const { offset: currentOffset, total, count } = letters[currentLetter];
    if (currentOffset + count <= total) {
      setOffset(off => off + 1);
      return;
    }
    setOffset(() => 0);
    setOffsetLetter(off => off + 1);
  }

  function handleKeyDownArrow(event, row) {
    setRow(() => row);
  }

  function handleClickCell(cell, row) {
    setRow(() => row);
  }

  return (
    <>
      {row && (
        <SidePanel onClose={handleSidePanelClose} isOpen={isOpen}>
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
      )}
      <DataTable
        data={data}
        onKeyDownArrow={handleKeyDownArrow}
        isLoading={isLoading}
        keygen="id"
        onExpandedRow={handleExpandedRow}
        onClickCell={handleClickCell}
      >
        <DataTable.ColumnDefinition id="0" header="Key" cell="id" />
        <DataTable.ColumnDefinition id="1" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="2" header="Description" cell="description" />
        <DataTable.ColumnDefinition id="3" header="Modified" cell="modified" />
        <DataTable.ColumnDefinition id="4" header="URI" cell="resourceURI" />
        <DataTable.ColumnDefinition id="5" header="Series" cell={renderSeries} />
        <DataTable.ColumnDefinition id="6" header="thumbnail" cell={renderThumbnail} />
        <DataTable.LoadMoreButton kind="primary" isDisabled={isLoading} onClick={handleLoadMore} />
      </DataTable>
      <a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>
    </>
  );
}
