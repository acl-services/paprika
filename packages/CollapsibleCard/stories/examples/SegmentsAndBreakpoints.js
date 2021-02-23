import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

const BreakpointsStory = () => {
  const [isBroken, setisBroken] = React.useState(null);

  function handleChangeIsBroken(newValue) {
    setisBroken(newValue);
  }

  return (
    <Story>
      <StoryHeading level={1}>Segments</StoryHeading>
      <Tagline>
        The <code>CollapsibleCard.Headings</code> can contain multiple <code>CollapsibleCard.Segment</code>s, which are
        all of equal width by default.
      </Tagline>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Only segment in header (auto 100% width)</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put body here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Segment 1 (auto 50% width)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>Segment 2 (auto 50% width)</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put body here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment width={66}>Segment 1 (manual 66% width)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment width={34}>Segment 2 (manual 34% width)</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put body here.</CollapsibleCard.Body>
      </CollapsibleCard>
      <br />
      <br />
      <br />
      <StoryHeading level={1}>Breakpoints</StoryHeading>
      <Tagline>
        The <code>CollapsibleCard.Segment</code>s are displayed side-by-side as long as the <code>CollapsibleCard</code>
        &apos;s width is greater than 800px (default). Once its width goes beneath this breakpoint (i.e. due to resizing
        window, or width of its parent component), the <code>CollapsibleCard.Segment</code>s will move onto separate
        lines. The consumer has complete control over how to style the contents of the segments based on if they have
        &quot;broken&quot; or not.
      </Tagline>
      <br />
      <CollapsibleCard>
        <CollapsibleCard.Header onChangeIsBroken={handleChangeIsBroken} breakpoint={600}>
          <CollapsibleCard.Segment>Custom breakpoint (600px)</CollapsibleCard.Segment>
          <CollapsibleCard.Segment>
            {isBroken ? (
              <div style={{ backgroundColor: "red", color: "white", textAlign: "center" }}>SEPARATE LINES!</div>
            ) : (
              <div>Same line...</div>
            )}
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          You can override the point at which the <code>CollapsibleCard.Segment</code>s go from side-by-side to stacked
          (default is 800px, but this one breaks at 600px).
        </CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};

export default BreakpointsStory;
