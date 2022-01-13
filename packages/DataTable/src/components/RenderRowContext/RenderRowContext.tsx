import React from "react";
import { Row } from "react-table";
import { TableDataItemType } from "../../types";

type RenderRowFunction = ((row: Row<TableDataItemType>) => unknown) | null;

const RenderRowContext = React.createContext<RenderRowFunction>(null);

function useRenderRowContext(): RenderRowFunction {
  const context = React.useContext(RenderRowContext);

  if (context === undefined) {
    throw new Error("useRenderRowContext must be within RenderRowContext.Provider");
  }

  return context;
}

export { RenderRowContext, useRenderRowContext };
