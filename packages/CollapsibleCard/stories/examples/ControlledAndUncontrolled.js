import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

const ControlledAndUncontrolledStory = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [isLocked, setIsLocked] = React.useState(false);

  return (
    <Story>
      <StoryHeading level={1}>Controlled and Uncontrolled</StoryHeading>
      <Tagline>
        By passing in the `isCollapsed` prop, you are forcing the component to be used in a Controlled manner. Without
        it, the component is Uncontrolled.
      </Tagline>
      <br />
      <h1>Uncontrolled</h1>
      <CollapsibleCard
        initialIsCollapsed={false}
        onToggleIsCollapsed={newStateIsCollapsed => {
          console.log(newStateIsCollapsed ? "collapsed it" : "expanded it");
        }}
      >
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Put your heading in here.</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <h1>Controlled</h1>
      <button
        type="button"
        onClick={() => {
          if (isLocked) return;
          setIsCollapsed(oldIsCollapsed => !oldIsCollapsed);
        }}
      >
        {isCollapsed ? "open" : "close"}
      </button>
      <button
        type="button"
        onClick={() => {
          setIsLocked(oldIsLocked => !oldIsLocked);
        }}
      >
        Lock the toggle
      </button>
      Toggle function is {!isLocked && "not"} locked
      <CollapsibleCard
        isCollapsed={isCollapsed}
        onToggleIsCollapsed={newStateIsCollapsed => {
          if (isLocked) {
            return true;
          }
          setIsCollapsed(newStateIsCollapsed);
        }}
      >
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Put your heading in here.</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};

export default ControlledAndUncontrolledStory;
