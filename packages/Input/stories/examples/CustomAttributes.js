import React from "react";
import Input from "../../src";

export default function Attributes() {
  return (
    <>
      <Input a11yText="custom input" className="custom-input" data-testid="custom-input">
        <Input.Container className="custom-container" data-testid="custom-container" />
      </Input>
      <p>
        This <code>{`<Input>`}</code> demonstrates:
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
}
