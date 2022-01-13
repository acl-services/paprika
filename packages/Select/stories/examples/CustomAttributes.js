import React from "react";
import Select from "../../src";

const Attributes = () => (
  <>
    <Select a11yText="custom select" className="custom-select" data-testid="custom-select">
      <Select.Container className="custom-container" data-testid="custom-container" />
      <option value="Coke">Coke</option>
      <option value="Pepsi">Pepsi</option>
    </Select>
    <p>
      This <code>{`<Select>`}</code> demonstrates:
    </p>
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
  </>
);

export default Attributes;
