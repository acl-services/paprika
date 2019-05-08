import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import { Frame } from "../../stories.styles";
import ListBox from "../../../src";

function Signature(props) {
  const [state, setState] = React.useState();

  const handleChange = (...args) => {
    setState(args);
  };

  return (
    <Frame>
      <div>{JSON.stringify(state)}</div>
      <br />
      <ListBox onChange={handleChange}>
        <ListBox.Option>Iron Man</ListBox.Option>
        <ListBox.Option>Hulk</ListBox.Option>
        <ListBox.Option>Groot</ListBox.Option>
        <ListBox.Option>Gamora</ListBox.Option>
      </ListBox>
    </Frame>
  );
}

storiesOf("ListBox / more examples", module).add("Single select onChange() signature", () => <Signature />);

// storiesOf("ListBox / more examples", module).add("Multi select onChange() signature", () => (
//   <Frame>
//     <Signature />
//     <ListBox>
//       <ListBox.Option>Iron Man</ListBox.Option>
//       <ListBox.Option>Hulk</ListBox.Option>
//       <ListBox.Option>Groot</ListBox.Option>
//       <ListBox.Option>Gamora</ListBox.Option>
//     </ListBox>
//   </Frame>
// ));
