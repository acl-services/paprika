import React from "react";
import { Theme, gridTypes } from "../../types";

const ThemeContext = React.createContext<Theme>({
  borderType: gridTypes.HORIZONTAL,
  hasZebraStripes: false,
  isHeaderSticky: true,
});

function useThemeContext(): Theme {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be within ThemeContext.Provider");
  }

  return context;
}

export { ThemeContext, useThemeContext };
