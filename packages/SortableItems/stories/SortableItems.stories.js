import React from "react";
import { storiesOf } from "@storybook/react";
// import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import SortableItems from "../src";

const initChildren = [
  <div key="0">Zero</div>,
  <div key="1">One</div>,
  <div key="2">Two</div>,
  <div key="3">Three</div>,
];
// const initChildren = "hello";

const Example = () => {
  let apiFaker;

  React.useEffect(() => () => {
    clearTimeout(apiFaker);
  });

  const [failure, setFailure] = React.useState(false);

  const sortableRef = React.createRef();

  const handleChange = sortedItems => {
    console.log("CHANGE:", sortedItems);
    setFailure(false);

    apiFaker = setTimeout(() => {
      if (Math.random() > 0.75) {
        sortableRef.current.update(initChildren);
        setFailure(true);
      }
    }, 1000);
  };

  return (
    <Story>
      <SortableItems onChange={handleChange} ref={sortableRef}>
        {initChildren}
      </SortableItems>
      {failure && (
        <p>
          <span aria-hidden>⚠️</span> Fake server error, please try again.
        </p>
      )}
    </Story>
  );
};

storiesOf("SortableItems", module)
  // .addDecorator(withKnobs)
  .add("Basic", () => <Example />);
