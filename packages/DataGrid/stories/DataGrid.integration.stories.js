import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import IntegrationApp from "./IntegrationApp";

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
      <IntegrationApp size={size} />
    </Sbook.Story>
  );
}

storiesOf("DataGrid / Lazy", module).add("Integration", () => <App />);
