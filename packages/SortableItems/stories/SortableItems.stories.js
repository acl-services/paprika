import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Sortable from "../src";

// const initData = [
//   { id: 0, value: "Zero" },
//   { id: 1, value: "One" },
//   { id: 2, value: "Two" },
//   { id: 3, value: "Three" },
// ];

// let initChildren;

// const initChildren = [];

// const initChildren = "Hello";

// const initChildren = ["Lemme", "Holla", "Atcha"];

// const initChildren = [
//   <div key="0">Zero</div>,
//   <div key="1">One</div>,
//   <div key="2">Two</div>,
//   <div key="3">Three</div>,
// ];

const initChildren = [
  <Input key="0" value="Zero" />,
  <Input key="1" value="One" />,
  <Input key="2" value="Two" />,
  <Input key="3" value="Three" />,
];

function formattedChildren(children) {
  return children.map(child => child.props.children).toString();
  // return children.toString();
}

const Example = () => {
  let apiFaker;

  React.useEffect(
    () => () => {
      clearTimeout(apiFaker);
    },
    []
  );

  const [sortedChildren, setSortedChildren] = React.useState(initChildren);
  const [failure, setFailure] = React.useState(false);

  const handleChange = result => {
    action("Item dropped")(JSON.stringify(result));

    setFailure(false);
    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const fallbackChildren = [...sortedChildren];
    const resortedChildren = [...sortedChildren];

    const movedChild = resortedChildren.splice(source, 1);
    resortedChildren.splice(destination, 0, ...movedChild);
    setSortedChildren(resortedChildren);
    action("Items resorted")(formattedChildren(resortedChildren));

    apiFaker = setTimeout(() => {
      if (Math.random() > 0.8) {
        setSortedChildren(fallbackChildren);
        setFailure(true);
        action("Items reverted")(formattedChildren(fallbackChildren));
      }
    }, 1000);
  };

  const handleRemove = index => {
    action("Remove item")(index);

    const prunedChildren = [...sortedChildren];
    prunedChildren.splice(index, 1);
    setSortedChildren(prunedChildren);
  };

  return (
    <Story>
      <Sortable onChange={handleChange} xonRemove={handleRemove}>
        {sortedChildren}
      </Sortable>
      {failure && (
        <p>
          <span aria-hidden>⚠️</span> Fake server error, please try again.
        </p>
      )}
    </Story>
  );
};

storiesOf("Sortable", module)
  // .addDecorator(withKnobs)
  .add("Basic", () => <Example />);
