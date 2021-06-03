import React from "react";
import Select from "../../src";

export default function Ref() {
  const refSelect = React.useRef();

  setTimeout(() => {
    refSelect.current.focus();
  }, 1000);

  return (
    <>
      <Select ref={refSelect}>
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <p>
        This <code>{`<Select>`}</code> will become focused after 1 second.
      </p>
    </>
  );
}
