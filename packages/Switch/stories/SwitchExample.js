import React from "react";
import L10n from "@paprika/l10n";
import Switch from "../src/Switch";

function Example(props) {
  const [value, setValue] = React.useState(true);

  function handleChange() {
    setValue(!value);
  }

  return (
    <L10n>
      <Switch value={value} onChange={handleChange} {...props} />
    </L10n>
  );
}

export default Example;
