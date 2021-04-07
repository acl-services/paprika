import React from "react";
import SwitchPaprika from "../../../Switch/src";

export function Switch({ isChecked, onChange }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SwitchPaprika size="small" onChange={onChange} isChecked={isChecked} />
        <span style={{ display: "inline-block", paddingLeft: "4px" }}>
          Editor kind: {isChecked ? "advanced" : "simple"}
        </span>
      </div>
      <hr />
    </>
  );
}

export default function useKindEditor() {
  const [isChecked, setIsChecked] = React.useState(false);

  function handleChange() {
    setIsChecked(prev => !prev);
  }

  return {
    isChecked,
    setIsChecked,
    onChange: handleChange,
  };
}
