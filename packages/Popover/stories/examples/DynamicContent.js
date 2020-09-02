import React from "react";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Spinner from "@paprika/spinner";
import Popover from "../../src";

const sampleText = {
  short: "Lorem Hipsum",
  long: `Lorem ipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
};

const initChild = null;
const nextChild = (
  <>
    <Popover.Content>
      <Popover.Card>
        <Spinner caption="Loading..." />
      </Popover.Card>
    </Popover.Content>
    <Popover.Tip />
  </>
);
const fullChild = (
  <>
    <Popover.Content>
      <Popover.Card>{sampleText.long}</Popover.Card>
    </Popover.Content>
    <Popover.Tip />
  </>
);

const ExampleStory = () => {
  const [childs, setChilds] = React.useState(initChild);

  React.useEffect(() => {
    const childTimer = setTimeout(() => {
      setChilds(nextChild);
    }, 800);
    const childTimer2 = setTimeout(() => {
      setChilds(fullChild);
    }, 2400);

    return () => {
      clearTimeout(childTimer);
      clearTimeout(childTimer2);
    };
  }, []);

  return (
    <CenteredStory>
      <Popover align={Popover.align.TOP} isOpen>
        <Popover.Trigger aria-hidden>👻</Popover.Trigger>
        {childs}
      </Popover>
    </CenteredStory>
  );
};

export default () => <ExampleStory />;
