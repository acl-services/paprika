import React from "react";
import Input from "../../src";

export default function OldRef() {
  let $input;
  const setRef = node => {
    $input = node;
  };
  setTimeout(() => {
    $input.focus();
  }, 1000);

  return (
    <>
      <Input ref={setRef} />
      <p>
        This <code>{`<Input>`}</code> will become focused after 1 second.
      </p>
    </>
  );
}
