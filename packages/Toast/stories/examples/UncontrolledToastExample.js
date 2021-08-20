import React from "react";

import L10n from "@paprika/l10n";
import Button from "@paprika/button";
import Toast from "../../src";

export default function UncontrolledToast() {
  const [accumulator, setAccumulator] = React.useState(0);

  function handleItem() {
    setAccumulator(prev => prev + 1);
  }

  return (
    <L10n locale="en">
      <Toast>Uncontrolled toast component</Toast>
      <Toast canAutoClose>Uncontrolled toast component with auto close</Toast>
      <Toast key={accumulator} canAutoClose>
        Uncontrolled toast with auto close and ability to re-open upon button click
      </Toast>
      <Button onClick={handleItem}>Show toast again</Button>
    </L10n>
  );
}
