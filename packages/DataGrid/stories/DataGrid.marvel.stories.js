import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import SidePanel from "@paprika/sidepanel";
import styled from "styled-components";
import Button from "@paprika/button";
import DataGrid from "../src";

const ImgWrapper = styled.div`
  height: 28px;
  overflow: hidden;
  width: 40px;
  img {
    width: 100%;
  }
`;

export async function fetchMarvelAPI(term, offset = null, limit = 20) {
  const url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
  const offsetParameter = offset ? `&offset=${offset * limit}` : "";
  // low risk to share api key for now, I can invalidate it later and extracted it to an env variable
  const apiKey = "&apikey=ac7726775d7f6e56add4f57ed5cd9a6b";
  const stream = await fetch(`${url}${term}${offsetParameter}${apiKey}`);
  const data = await stream.json();

  return data;
}

export function App() {
  const [offsetLetter, setOffsetLetter] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [letters, setLetters] = React.useState({});
  const [data, setData] = React.useState([]);
  const [row /* setRow */] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isPending, setIsPending] = React.useState(false);

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
        const _stateArray = state === null ? [] : state;
        return _stateArray.concat(data.data.results);
      });
    }

    getData();
  }, [offset, offsetLetter, setLetters]);
  // ^ we don't want to track data dependency

  function renderSeries({ row }) {
    return row.series.items.map((item, index) => <span key={index /* eslint-disable-line */}>{item.name}</span>);
  }

  function renderThumbnail({ row }) {
    return (
      <ImgWrapper>
        <img src={`${row.thumbnail.path}.${row.thumbnail.extension}`} alt={row.name} />
      </ImgWrapper>
    );
  }

  // function handleExpandedRow({ row }) {
  //   setRow({ row });
  //   setIsOpen(() => true);
  // }

  function handleSidePanelClose() {
    setIsOpen(() => false);
  }

  function handleLoadMore() {
    setIsPending(() => true);
    const currentLetter = String.fromCharCode(97 + offsetLetter);
    const { offset: currentOffset, total, count } = letters[currentLetter];
    if (currentOffset + count <= total) {
      setOffset(off => off + 1);
      return;
    }
    setOffset(() => 0);
    setOffsetLetter(off => off + 1);
  }

  // function handleKeyDownArrow({ row }) {
  //   setRow(() => row);
  // }
  //
  // function handleClickCell({ row }) {
  //   setRow(() => row);
  // }

  // onClickCell={handleClickCell}
  // onExpandedRow={handleExpandedRow}
  // onKeyDownArrow={handleKeyDownArrow}

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
    setIsPending(() => false);
  }, [data.length]);

  return (
    <Sbook.Story>
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
      <input type="text" />
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <DataGrid data={data} isIdle={isIdle} keygen="id" width={900}>
        <DataGrid.ColumnDefinition isSticky id="0" header="Key" cell="id" />
        <DataGrid.ColumnDefinition
          isSticky
          width={50}
          id="6"
          header="Img"
          cell={renderThumbnail}
          cellProps={() => ({ style: { padding: "4px" } })}
        />
        <DataGrid.ColumnDefinition isSticky width={160} id="1" header="Name" cell="name" />
        <DataGrid.ColumnDefinition width={320} id="2" header="Description" cell="description" />
        <DataGrid.ColumnDefinition width={180} id="3" header="Modified" cell="modified" />
        <DataGrid.ColumnDefinition width={120} id="4" header="URI" cell="resourceURI" />
        <DataGrid.ColumnDefinition width={420} id="5" header="Series" cell={renderSeries} />
        <DataGrid.EndOFScrollingFooter>
          <Button isPending={isPending} onClick={handleLoadMore}>
            Load more
          </Button>
        </DataGrid.EndOFScrollingFooter>
      </DataGrid>
      <a href="http://marvel.com" style={{ fontSize: "12px", color: "#777" }}>
        Data provided by Marvel. © 2019 MARVEL
      </a>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Marvel Api interaction", () => <App />);
