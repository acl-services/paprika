import React from "react";
import Button from "@paprika/button";
import ListBox from "../../../src";

export default function CustomOnClick() {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <React.Fragment>
      <Button onClick={() => setIsDisabled(state => !state)}>Toggle isDisabled</Button>
      <ListBox isDisabled={isDisabled} isInline>
        <ListBox.Option>Hulk</ListBox.Option>
        <ListBox.Option>Captain Marvel</ListBox.Option>
        <ListBox.Option>Black Widow</ListBox.Option>
      </ListBox>
    </React.Fragment>
  );
}
