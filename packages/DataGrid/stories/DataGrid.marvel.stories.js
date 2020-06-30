import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import SidePanel from "@paprika/sidepanel";
import styled from "styled-components";
import Button from "@paprika/button";
import Spinner from "@paprika/spinner";
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

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
  const [row, setRow] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(true);
  const [isPending, setIsPending] = React.useState(false);
  const refDataGrid = React.useRef(null);

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

  function handleOpenSidepanel({ row }) {
    setRow(() => row);
    setIsOpen(() => true);
  }

  function handleSidePanelClose() {
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

  function renderSidepanel({ row }) {
    return (
      <SidePanel onClose={handleSidePanelClose} isOpen={isOpen}>
        <SidePanel.FocusLock
          onDeactivation={() => {
            // https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
            setTimeout(() => {
              refDataGrid.current.focus();
            }, 0);
          }}
        />
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
    );
  }

  return (
    <Sbook.Story>
      {isIdle ? (
        <Spinner />
      ) : (
        <>
          {row && renderSidepanel({ row })}
          <DataGrid
            ref={refDataGrid}
            data={data}
            keygen="id"
            width={680}
            onClick={handleOpenSidepanel}
            onPressEnter={handleOpenSidepanel}
            onPressSpaceBar={handleOpenSidepanel}
          >
            {renderColumnIndicator({ onChecked: handleOnSelect })}
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
