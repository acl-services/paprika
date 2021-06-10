import React from "react";

import CodeViewer from "storybook/components/CodeViewer";
import L10n from "@paprika/l10n";
import Toast from "../../src";

export default function UncontrolledToast() {
  const [accumulator, setAccumulator] = React.useState(0);

  function handleItem() {
    setAccumulator(prev => prev + 1);
  }

  return (
    <L10n locale="en">
      <Toast hasCloseButton>Uncontrolled toast component</Toast>
      <Toast canAutoClose autoCloseDelay={5000} hasCloseButton>
        Uncontrolled toast component with auto close
      </Toast>
      <CodeViewer>
        <Toast key={accumulator} canAutoClose autoCloseDelay={5000}>
          Uncontrolled toast with auto close and ability to re-open upon button click
        </Toast>
        <button type="button" onClick={handleItem}>
          Show toast again
        </button>
      </CodeViewer>
    </L10n>
  );
}
