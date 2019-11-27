import React from "react";
import DataTable from "../../../src";
import { fetchMarvelAPI } from "./helpers";

export default function App() {
  const [offsetLetter] = React.useState(0);
  const [offset] = React.useState(0);
  const [, setLetters] = React.useState({});
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      // will search by "a" then by "b" .... "z" try String.fromCharCode(97 + 0) on devtools
      const letter = String.fromCharCode(97 + offsetLetter);
      const data = await fetchMarvelAPI(letter, offset);
      setLetters(letters => {
        return { ...letters, [letter]: { total: data.total } };
      });

      setData(state => {
        return state.concat(data.data.results);
      });
    }
    getData();
  }, [offset, offsetLetter]);

  function renderSeries(cell) {
    return cell.series.items.map(item => <span key={item.name}>{item.name}</span>);
  }

  function renderThumbnail(cell) {
    return `${cell.thumbnail.path}.${cell.thumbnail.extension}`;
  }

  return (
    <>
      <DataTable data={data} keygen="id">
        <DataTable.ColumnDefinition id="0" header="Key" cell="id" />
        <DataTable.ColumnDefinition id="1" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="2" header="Description" cell="description" />
        <DataTable.ColumnDefinition id="3" header="Modified" cell="modified" />
        <DataTable.ColumnDefinition id="4" header="URI" cell="resourceURI" />
        <DataTable.ColumnDefinition id="5" header="Series" cell={renderSeries} />
        <DataTable.ColumnDefinition id="6" header="thumbnail" cell={renderThumbnail} />
      </DataTable>
      <a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>
    </>
  );
}
