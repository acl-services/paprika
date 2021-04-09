import React from "react";
import Input from "../../src";

const RefStory = () => {
  const refInput = React.useRef();

  setTimeout(() => {
    refInput.current.focus();
  }, 1000);

  return (
    <>
      <>
        <Input ref={refInput} />
        <p>
          This <code>{`<Input>`}</code> will become focused after 1 second.
        </p>
      </>
    </>
  );
};

export default RefStory;
