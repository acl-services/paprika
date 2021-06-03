import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Panel from "@paprika/panel";
import styled from "styled-components";
import Button from "@paprika/button";
import Spinner from "@paprika/spinner";
import { useMockEndpoints } from "../../MockEndpoints/src";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";
import endpoints from "./helpers/mock-endpoints.json";

const storyName = getStoryName("DataGrid");

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
  const stream = await fetch(`${url}${term}${offsetParameter}`);
  const data = await stream.json();

  return data;
}

export function App() {
  const [offsetLetter, setOffsetLetter] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [letters, setLetters] = React.useState({});
  const [data, setData] = React.useState([]);
  const [row, setRow] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isPending, setIsPending] = React.useState(false);
  const refDataGrid = React.useRef(null);

  const { endpointsAreMocked } = useMockEndpoints(endpoints);

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

  function handleOpenPanel({ row }) {
    setRow(() => row);
    setIsOpen(() => true);
  }

  function handleclosePanel() {
    setIsOpen(() => false);
  }

  function handleLoadMore() {
    setIsPending(() => true);
    const currentLetter = String.fromCharCode(97 + offsetLetter);
    const { offset: currentOffset, total, count } = letters[currentLetter];
    if (currentOffset + count < total) {
      setOffset(off => off + 1);
      return;
    }
    setOffset(() => 0);
    setOffsetLetter(off => off + 1);
  }

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
    setIsPending(() => false);
  }, [data.length]);

  function handleOnSelect() {
    console.log("handleOnSelect");
  }

  function renderPanel({ row }) {
    return (
      <Panel onClose={handleclosePanel} isOpen={isOpen}>
        <Panel.FocusLock
          onDeactivation={() => {
            // https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
            setTimeout(() => {
              refDataGrid.current.focus();
            }, 0);
          }}
        />
        <Panel.Header>{row.name}</Panel.Header>
        <div
          css={`
            width: 300px;
            overflow: hidden;
          `}
        >
          <img src={`${row.thumbnail.path}.${row.thumbnail.extension}`} width="100%" alt={row.name} />
        </div>
        <div>{row.description}</div>
      </Panel>
    );
  }

  if (!endpointsAreMocked) return null;

  return (
    <Sbook.Story>
      {isIdle ? (
        <Spinner />
      ) : (
        <>
          <p>Note: the Marvel API is mocked and only the first 5 pages can be retrieved.</p>
          {row && renderPanel({ row })}
          <DataGrid
            ref={refDataGrid}
            data={data}
            keygen="id"
            width={680}
            onClick={handleOpenPanel}
            onPressEnter={handleOpenPanel}
            onPressSpaceBar={handleOpenPanel}
          >
            {renderColumnIndicator({ onCheck: handleOnSelect })}
            {renderColumnExpand()}
            <DataGrid.ColumnDefinition
              isSticky
              width={50}
              header="Img"
              cell={renderThumbnail}
              cellProps={() => ({ style: { padding: "4px" } })}
            />
            <DataGrid.ColumnDefinition width={90} header="Name" cell="name" />
            <DataGrid.ColumnDefinition header="Key" cell="id" />
            <DataGrid.ColumnDefinition width={240} header="Description" cell="description" />
            <DataGrid.ColumnDefinition width={180} header="Modified" cell="modified" />
            <DataGrid.ColumnDefinition width={120} header="URI" cell="resourceURI" />
            <DataGrid.ColumnDefinition width={220} header="Series" cell={renderSeries} />
            <DataGrid.Basement>
              <div css="text-align: center; padding: 16px;">
                <Button isPending={isPending} onClick={handleLoadMore}>
                  Load more
                </Button>
              </div>
            </DataGrid.Basement>
          </DataGrid>
          <a href="http://marvel.com" style={{ fontSize: "12px", color: "#777" }}>
            Data provided by Marvel. © 2019 MARVEL
          </a>
        </>
      )}
    </Sbook.Story>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Lazy", () => <App />);
