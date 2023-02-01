import React from "react";
import CopyInput from "../../src/CopyInput";

export default () => (
  <>
    <p>
      This example alters the text before copying it to the clipboard. Click the green button, then paste to see that it
      has changed.
    </p>
    <p>It also demonstrates that you can override the tooltip text.</p>
    Click copy:
    <CopyInput
      value="hello hello"
      clickedText="Now paste to see modified message"
      hoverText="Click to copy [and modify]"
      isReadOnly={false}
      alterCopiedText={copiedText => `(╯°□°）╯ ︵  ${copiedText}`}
    />
    <br />
    <br />
    Then paste here:
    <br />
    <textarea style={{ border: "1px solid #d7d7d7", width: "194px" }} />
  </>
);
