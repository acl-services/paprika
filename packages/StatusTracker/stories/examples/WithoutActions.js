import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import CodeViewer from "storybook/components/CodeViewer";
import StatusTracker from "../../src";

const ExampleStory = () => {
  const currentPointRef = React.useRef(null);

  function getDesc() {
    return (
      <>
        <div>10 minute ago</div>
        <div>by Someone</div>
      </>
    );
  }

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        StatusTracker
      </Heading>
      <Tagline>
        <big>
          <strong>without actions</strong>
        </big>
      </Tagline>
      <Rule />
      <L10n locale="en">
        <CodeViewer>
          <StatusTracker>
            <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description={getDesc()} />
            <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description={getDesc()} />
            <StatusTracker.Point
              name="In review"
              description={getDesc()}
              kind={StatusTracker.types.kind.CURRENT}
              ref={currentPointRef}
            />
            <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
            <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
          </StatusTracker>
        </CodeViewer>
        <CodeViewer>
          <StatusTracker>
            <StatusTracker.Point
              name="In review"
              description={getDesc()}
              kind={StatusTracker.types.kind.CURRENT}
              ref={currentPointRef}
            />
            <StatusTracker.Point name="Approve" kind={StatusTracker.types.kind.FUTURE} />
            <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
          </StatusTracker>
        </CodeViewer>
      </L10n>
    </Story>
  );
};

export default () => <ExampleStory />;
