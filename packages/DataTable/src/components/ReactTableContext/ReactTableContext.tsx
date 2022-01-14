import React from "react";
import { TableInstance } from "react-table";
import { TableDataItemType } from "../../types";

const ReactTableContext = React.createContext<TableInstance<TableDataItemType> | undefined>(undefined);

function useReactTableContext(): TableInstance<TableDataItemType> {
  const context = React.useContext(ReactTableContext);

  if (context === undefined) {
    throw new Error("useReactTableContext must be within ReactTableContext.Provider");
  }

  return context;
}

export { ReactTableContext, useReactTableContext };
