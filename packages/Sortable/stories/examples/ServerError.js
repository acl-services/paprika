import React from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import { storyStyles } from "../Sortable.stories.helpers";
import Sortable from "../../src";

const failStyles = `
  box-sizing: border-box;
  position: absolute;
  left: 0; top: 0; 
  width: 100%;
  background: #fdd;
  padding: 2px 12px;
  font-size: 14px;
`;

const fakeServerLatency = 1300;

const initData = [
  { id: 1, value: "One" },
  { id: 2, value: "Two" },
  { id: 3, value: "Three" },
  { id: 4, value: "Four" },
];

const initChildren = initData.map(item => (
  <Sortable.Item key={item.id} sortId={item.id}>
    {item.value}
  </Sortable.Item>
));

function formattedChildren(children) {
  return children.map(child => child.props.children).toString();
}

const Example = () => {
  let apiFaker;
  React.useEffect(
    () => () => {
      clearTimeout(apiFaker);
    },
    [apiFaker]
  );

  const [children, setChildren] = React.useState(initChildren);
  const [failure, setFailure] = React.useState(false);

  const handleChange = result => {
    setFailure(false);
    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const fallbackChildren = [...children];
    const reorderedChildren = [...children];
    const movedChild = reorderedChildren.splice(source, 1);
    reorderedChildren.splice(destination, 0, ...movedChild);

    setChildren(reorderedChildren);
    action("Items resorted")(formattedChildren(reorderedChildren));

    apiFaker = setTimeout(() => {
      if (Math.random() > 0.5) {
        setFailure(true);
        setChildren(fallbackChildren);
        action("❌ Items reverted")(formattedChildren(fallbackChildren));
      } else {
        action("✅ Items persisted")();
      }
    }, fakeServerLatency);
  };

  return (
    <Story css={storyStyles}>
      {failure && (
        <div css={failStyles}>
          <span aria-hidden>❗️</span> Fake server error, please try again.
        </div>
      )}
      <Sortable onChange={handleChange}>{children}</Sortable>
    </Story>
  );
};

export default Example;
