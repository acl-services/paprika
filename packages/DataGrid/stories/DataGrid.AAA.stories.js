import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import AAA from "./AAA";
// <DataGrid data={data}>
//   <DataGrid.ColumnDefinition header="Name" cell="name" />
//   <DataGrid.ColumnDefinition header="Goals" cell="goals" />
//   <DataGrid.ColumnDefinition header="Status" cell="status" />
//   <DataGrid.ColumnDefinition header="Link" cell="link" />
//   <DataGrid.ColumnDefinition header="Description" cell="description" />
// </DataGrid>

export function App() {
  const [size, setSize] = React.useState({ width: 740, height: 500 });
  const refSBookStory = React.useRef(null);

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

  return (
    <Sbook.Story ref={refSBookStory} css="height: calc(100% - 120px);">
      <AAA size={size} />
    </Sbook.Story>
  );
}

storiesOf("DataGrid / lazy", module).add("Assests and attributes", () => <App />);
