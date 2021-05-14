import React from "react";
import Select from "../../src";

const AttributesExample = () => {
  return (
    <>
      <Select a11yText="custom select" className="custom-select" data-testid="custom-select">
        <Select.Container className="custom-container" data-testid="custom-container" />
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <p>
        This <code>{`<Select>`}</code> demonstrates:
        <ul>
          <li>
            Custom <code>classNames</code>
          </li>
          <li>
            <code>data-testid</code> attributes
          </li>
          <li>
            <code>a11yText</code> prop
          </li>
        </ul>
      </p>
    </>
  );
};

export default AttributesExample;
