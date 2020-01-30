import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import SidePanel from "@paprika/sidepanel";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax
import DataGrid, { renderColumnIndicator, renderColumnExpand } from "../src";

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
  const [data, setData] = React.useState([]);
  const [row, setRow] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(true);
  const [size, setSize] = React.useState({ width: 740, height: 500 });
  const refDataGrid = React.useRef(null);
  const refSBookStory = React.useRef(null);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker();
      setData(() => data);
      setIsIdle(() => false);
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
    if (data.length > 0) {
      setIsIdle(() => false);
    }
  }, [data.length]);

  React.useEffect(() => {
    if (refSBookStory.current) {
      setSize(() => {
        const padding = getComputedStyle(refSBookStory.current).padding;
        const space = Number.parseInt(padding, 10) * 2;

        return {
          width: refSBookStory.current.offsetWidth - space,
          height: refSBookStory.current.offsetHeight - space,
        };
      });
    }
  }, [refSBookStory]);

  function handleOnSelect() {
    console.log("handleOnSelect");
  }

  function isChecked() {
    return "unchecked";
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
    <Sbook.Story ref={refSBookStory} css="height: calc(100% - 120px);">
      {row && renderSidepanel({ row })}
      <DataGrid
        ref={refDataGrid}
        data={data}
        isIdle={isIdle}
        keygen="id"
        width={size.width}
        height={size.height}
        onClick={handleOpenSidepanel}
        onEnter={handleOpenSidepanel}
        onSpaceBar={handleOpenSidepanel}
      >
        {renderColumnIndicator({ onSelect: handleOnSelect, isChecked })}
        {renderColumnExpand()}
        {data.length
          ? Object.keys(data[0]).map(key => {
              return <DataGrid.ColumnDefinition header={key} cell={key} />;
            })
          : null}
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Stressing", () => <App />);
