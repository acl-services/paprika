import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Airtable from "airtable";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Board from "@lourenci/react-kanban";
import DataTable from "../../DataTable/src";
import ListBox from "../../ListBox/src";
import SidePanel from "../../SidePanel/src";
import Button from "../../Button/src";
import FormElement from "../../FormElement/src";
import Heading from "../../Heading/src";

// import Kanban from "../src";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keynmLwW573DeXD3B",
});

const ViewsContainer = styled.div`
  width: 320px;
`;

function createKanBanStructure({ data, keys, columnPivot }) {
  const kanbanColumns = [...new Set([...data.map(record => record[columnPivot])])].filter(chunk => chunk);

  const board = { lanes: [] };
  const lanes = {};
  let noStatus = [];
  kanbanColumns.forEach(key => {
    data.forEach(record => {
      if (record[columnPivot] === key) {
        lanes[key] = lanes[key] || [];
        lanes[key] = [...lanes[key], record];
      } else {
        noStatus = [...noStatus, record];
      }
    });
  });

  Object.keys(lanes).forEach(key => {
    board.lanes.push({
      id: key,
      title: lanes[key][0][columnPivot],
      description: "",
      cards: lanes[key].map(card => {
        return {
          id: card["Complaint ID"],
          title: card.Description,
          description: card.Complaint,
          content: { ...card },
        };
      }),
    });
  });

  return board;
}

function App() {
  const refDataArray = React.useRef([]);
  const refFieldKeys = React.useRef({});
  const [data, setData] = React.useState([]);
  const [views, setViews] = React.useState([]);
  const [isSidePanelVisible, setIsSidePanelVisible] = React.useState(false);
  const refListBoxKanbandField = React.useRef();
  const [kanbanBoard, setKanbanBoard] = React.useState({ key: null, board: null, boards: {} });
  const [isTableVisible, setIsTableVisible] = React.useState(true);
  const [isBoardVisible, setIsBoardVisible] = React.useState(false);
  const [recordActive, setRecordActive] = React.useState(null);

  React.useEffect(() => {
    const base = Airtable.base("app3VXQT24V5H63Yw");
    base("Reviewed Media Complaints")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 100,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          refFieldKeys.current = Object.keys(records[0].fields);
          records.forEach(record => {
            const _record = {};
            refFieldKeys.current.forEach(key => {
              _record[key] = record.get(key);
            });
            refDataArray.current.push(_record);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
          }

          setData(data => data.concat(refDataArray.current));
        }
      );
  }, []);

  function toggleSidePanel() {
    if (isSidePanelVisible) {
      setIsSidePanelVisible(() => false);
      return;
    }
    setIsSidePanelVisible(() => true);
  }

  function handleClickCreateKanban() {
    const key = refListBoxKanbandField.current.options[refListBoxKanbandField.current.selected].value;
    refListBoxKanbandField.current.reset();

    const _kanbanBoard = createKanBanStructure({ data, keys: refFieldKeys, columnPivot: key });
    setKanbanBoard(({ boards }) => ({
      key,
      board: _kanbanBoard,
      boards: { ...boards, [key]: _kanbanBoard },
    }));
    setIsSidePanelVisible(() => false);
    setIsTableVisible(() => false);
    setIsBoardVisible(() => true);
    setRecordActive(() => null);
    setViews(l => {
      return [...new Set([...l, key])];
    });
  }

  function handleChangeView(key, options) {
    if (options[key].value === "table") {
      setIsTableVisible(() => true);
      setIsBoardVisible(() => false);
      return;
    }

    setKanbanBoard(({ boards }) => {
      const board = boards[options[key].value];
      return { key: options[key].value, board, boards: { ...boards } };
    });
    setIsBoardVisible(() => true);
    setIsTableVisible(() => false);
    setRecordActive(() => null);
  }

  function handleClickExpand(row, rowIndex) {
    setRecordActive(() => ({ record: row, rowIndex }));
  }

  function handleKeyDownArrow(row, rowIndex) {
    setRecordActive(() => ({ record: row, rowIndex }));
  }

  return (
    <>
      <SidePanel isOpen={recordActive}>
        <>
          {recordActive ? (
            <>
              <Heading level="3">Record</Heading>
              {Object.keys(recordActive.record).map(key => {
                return (
                  <FormElement label={key}>
                    <input type="text" value={recordActive.record[key]} />
                  </FormElement>
                );
              })}
            </>
          ) : null}
        </>
      </SidePanel>
      <SidePanel isOpen={isSidePanelVisible} onClose={() => setIsSidePanelVisible(() => false)}>
        <Heading level="3">Kanban field</Heading>
        <FormElement>
          <FormElement.Instructions>
            Which field would you like to use for this kanban view? Your records will be stacked based on this field
          </FormElement.Instructions>
          <ListBox ref={refListBoxKanbandField}>
            {refFieldKeys.current.length ? (
              <>
                {refFieldKeys.current
                  .map(key => {
                    if (views.includes(key)) return null;
                    return <ListBox.Option value={key}>{key}</ListBox.Option>;
                  })
                  .filter(chunk => chunk)}
              </>
            ) : null}
          </ListBox>
        </FormElement>
        <Button kind="primary" onClick={handleClickCreateKanban}>
          create kanban view
        </Button>
      </SidePanel>
      <>
        <Button onClick={() => toggleSidePanel()}>Create kanban</Button>
        <hr />
      </>
      {views.length ? (
        <ViewsContainer>
          <FormElement label="Pick a view">
            <ListBox onChange={handleChangeView}>
              <ListBox.Trigger hasClearButton={false} />
              <ListBox.Option value="table" defaultIsSelected={isTableVisible}>
                Table view
              </ListBox.Option>
              {views.map(key => {
                return (
                  <ListBox.Option
                    defaultIsSelected={key === kanbanBoard.key}
                    value={key}
                  >{`Kanban ${key} view`}</ListBox.Option>
                );
              })}
            </ListBox>
          </FormElement>
        </ViewsContainer>
      ) : null}
      {refDataArray.current && refFieldKeys.current.length > 0 ? (
        <>
          {isTableVisible ? (
            <DataTable
              onKeyDownArrow={handleKeyDownArrow}
              onClickCell={handleClickExpand}
              width={1024}
              keygen="id"
              data={data}
              height={527}
            >
              {refDataArray.current.map(record => {
                return refFieldKeys.current.map(key => {
                  return <DataTable.ColumnDefinition id={key} width="180" header={key} cell={key} />;
                });
              })}
            </DataTable>
          ) : null}
        </>
      ) : null}
      {kanbanBoard.board && isBoardVisible ? <Board key={kanbanBoard.key} initialBoard={kanbanBoard.board} /> : null}
    </>
  );
}

storiesOf("Kanban", module).add("Showcase", () => (
  <Story>
    <App />
  </Story>
));
