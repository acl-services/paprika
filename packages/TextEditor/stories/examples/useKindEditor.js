import React from "react";

export function Switch({ isChecked, onChange }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="checkbox">
          <input id="checkbox" type="checkbox" onChange={onChange} isChecked={isChecked} />
          <span style={{ display: "inline-block", paddingLeft: "4px" }}>
            Editor kind: {isChecked ? "advanced" : "simple"}
          </span>
        </label>
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
