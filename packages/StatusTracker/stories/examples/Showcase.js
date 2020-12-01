import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import OverflowMenu from "@paprika/overflow-menu";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import CodeViewer from "storybook/components/CodeViewer";
import StatusTracker from "../../src";

const ExampleStory = () => {
  const [isPending, setIsPending] = React.useState(false);
  const currentPointRef = React.useRef(null);

  function getDesc() {
    return (
      <>
        <div>10 minute ago</div>
        <div>by Someone</div>
      </>
    );
  }

  async function handleClick() {
    setIsPending(true);
    if (currentPointRef.current) {
      currentPointRef.current.closeMenu();
    }

    await setTimeout(() => {
      setIsPending(false);
    }, 1000);
  }

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        StatusTracker
      </Heading>
      <Tagline>
        <big>
          <strong>Showcase</strong>
        </big>
      </Tagline>
      <Rule />
      <L10n locale="en">
        <CodeViewer>
          <StatusTracker>
            <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description={getDesc()} />

            <StatusTracker.Point
              name="In review"
              description={getDesc()}
              kind={StatusTracker.types.kind.CURRENT}
              ref={currentPointRef}
            >
              <OverflowMenu>
                <OverflowMenu.Trigger isPending={isPending} />
                <OverflowMenu.Item onClick={handleClick}>First Item</OverflowMenu.Item>
                <OverflowMenu.Item onClick={handleClick}>Second Item</OverflowMenu.Item>
                <OverflowMenu.Divider />
                <OverflowMenu.Item onClick={handleClick}>View workflow</OverflowMenu.Item>
              </OverflowMenu>
            </StatusTracker.Point>
            <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
            <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
          </StatusTracker>
        </CodeViewer>
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory />;
