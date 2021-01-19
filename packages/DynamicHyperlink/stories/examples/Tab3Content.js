import React from "react";
import { createPortal } from "react-dom";

export default function Tab3Content() {
  const [contentRef, setContentRef] = React.useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  const iframeContents = (
    <>
      <p>
        Here is a dynamic hyperlink within an iFrame:{" "}
        <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control">
          https://www.wegalvanize.com/
        </a>
      </p>
    </>
  );

  return (
    <>
      <p>
        The iFrame has a dynamic hyperlink injected onmount. That should trigger the script, which should update it.
        Once that is working, add a real ckEditor.
      </p>
      <iframe title="asdf" ref={setContentRef}>
        {mountNode && createPortal(iframeContents, mountNode)}
      </iframe>
    </>
  );
}
