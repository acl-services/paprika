import React from "react";
import Textarea from "../../src";

function Attributes() {
  return (
    <>
      <Textarea a11yText="custom textarea" className="custom-textarea" data-testid="custom-textarea">
        <Textarea.Container className="custom-container" data-testid="custom-container" />
      </Textarea>
      <p>
        This <code>{`<Textarea>`}</code> demonstrates:
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

export default Attributes;
