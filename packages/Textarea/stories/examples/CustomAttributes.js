import React from "react";
import Textarea from "../../src";

function Attributes() {
  return (
    <>
      <Textarea a11yText="custom textarea" className="custom-textarea" data-testid="custom-textarea" />
      <p>
        This <code>{`<Textarea>`}</code> demonstrates:
      </p>
      <ul>
        <li>
          Custom <code>className</code>
        </li>
        <li>
          <code>data-testid</code> attribute
        </li>
        <li>
          <code>a11yText</code> prop
        </li>
      </ul>
    </>
  );
}

export default Attributes;
