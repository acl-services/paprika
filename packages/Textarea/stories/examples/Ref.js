import React from "react";
import Textarea from "../../src";

function Ref() {
  const theRef = React.useRef();

  setTimeout(() => {
    theRef.current.focus();
  }, 1000);

  return (
    <>
      <Textarea ref={theRef} />
      <p>
        This <code>{`<Textarea>`}</code> will become focused after 1 second.
      </p>
    </>
  );
}

export default Ref;
