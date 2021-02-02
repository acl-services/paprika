import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import CollapsibleCard from "../../src";

// TODO: responsiveness
// TODO: other props
// TODO: Cards.Group
// TODO: a11y, focus, see Collapsible and old CollapsibleCard
// TODO: tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

function Lipsum() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum felis commodo dolor dapibus accumsan.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras ultricies nisi
        magna, convallis varius augue lacinia non. Suspendisse sollicitudin ex id viverra malesuada. Duis tempus, felis
        et condimentum pulvinar, odio justo posuere odio, ac iaculis nisl nisl quis sem. Morbi vestibulum consectetur
        turpis, id ultricies turpis semper ut. Ut tincidunt sodales dolor, sit amet dapibus purus viverra et. Sed
        pretium felis nec justo vulputate molestie. Quisque mattis nisl non sapien venenatis pulvinar volutpat at felis.
        Mauris lacus massa, condimentum ut metus sit amet, semper faucibus libero. Etiam facilisis, nunc quis hendrerit
        blandit, lorem enim dictum elit, quis laoreet arcu massa eu tortor. Maecenas pulvinar consectetur ipsum.
      </p>
      <p>
        Sed eget accumsan dolor, et volutpat odio. Donec vel vehicula metus. Donec urna quam, ullamcorper vitae magna
        non, semper dictum risus. Maecenas dui dolor, tempus ut arcu sit amet, bibendum rhoncus nulla. Morbi non lacus
        mi. Curabitur eleifend convallis imperdiet. Proin volutpat placerat dictum. Morbi blandit eu libero sit amet
        pretium. Cras gravida purus tempor libero ornare sodales. Mauris hendrerit tempus sapien vel finibus. In nec
        risus pharetra, hendrerit sapien sit amet, eleifend orci. Ut efficitur elit nec mauris suscipit molestie.
      </p>
    </>
  );
}

const ExampleStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Collapsible Card variations</StoryHeading>
      <h3>Full-width</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <div>
            Put in a switch, avatar, heading, description, tag, whatever. I can put together some commonly used ones
            (title, title/description, title/description/tag)
          </div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <h3>Half</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header type="half">
          <div>
            Put in a switch, avatar, heading, description, tag, whatever. I can put together some commonly used ones
            (title, title/description, title/description/tag)
          </div>
          <div>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            <button type="button" onClick={e => {}}>
              Right
            </button>
            moar please
          </div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
      <h3>Third</h3>
      <CollapsibleCard>
        <CollapsibleCard.Header type="third">
          <div>
            Left - Put in a switch, avatar, heading, description, tag, whatever. I can put together some commonly used
            ones (title, title/description, title/description/tag)
          </div>
          <div>Center</div>
          <div>Right</div>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <Lipsum />
        </CollapsibleCard.Body>
      </CollapsibleCard>
    </Story>
  );
};

export default ExampleStory;
