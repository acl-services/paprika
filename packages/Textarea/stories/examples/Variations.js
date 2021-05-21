import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Textarea from "../../src";

const veryLongText =
  "Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrids pumpkins swelled to the size of garden sheds. Oliver Woods enthusiasm for regular training sessions, however, was not dampened, which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, returning to Gryffindor Tower, drenched to the skin and splattered with mud. Even aside from the rain and wind it had not been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles.";

function Variations() {
  return (
    <>
      <Textarea />

      <Gap />

      <CodeHeading>maxHeight={100}</CodeHeading>
      <Textarea maxHeight={100} />
      <Gap.Small />
      <CodeHeading>minHeight={50}</CodeHeading>
      <Textarea minHeight={50} />
      <Gap.Small />
      <CodeHeading>{`canExpand={false}`}</CodeHeading>
      <Textarea canExpand={false} />

      <Gap />

      <CodeHeading>placeholder</CodeHeading>
      <Textarea placeholder="Enter name" />
      <Gap.Small />
      <CodeHeading>defaultValue</CodeHeading>
      <Textarea defaultValue="Mahatma Gandhi" />
      <Gap.Small />
      <CodeHeading>
        <span>Very long</span> defaultValue
      </CodeHeading>
      <Textarea defaultValue={veryLongText} />

      <Gap />

      <StoryHeading level={1}>Sizes</StoryHeading>
      <CodeHeading>{`size={Textarea.types.size.SMALL}`}</CodeHeading>
      <Textarea placeholder="First Name" defaultValue="Mohandas" hasClearButton size={Textarea.types.size.SMALL} />
      <Gap.Small />
      <CodeHeading>
        {`size={Textarea.types.size.MEDIUM}`} <span>(default)</span>
      </CodeHeading>
      <Textarea placeholder="Middle Name" defaultValue="Karamchand" hasClearButton />
      <Gap.Small />
      <CodeHeading>{`size={Textarea.types.size.LARGE}`}</CodeHeading>
      <Textarea placeholder="Last Name" defaultValue="Gandhi" hasClearButton size={Textarea.types.size.LARGE} />

      <Gap />

      <StoryHeading level={1}>States</StoryHeading>
      <CodeHeading>isDisabled</CodeHeading>
      <Textarea isDisabled hasClearButton placeholder="Enter name" />
      <Gap.Small />
      <Textarea isDisabled hasClearButton value="Mahatma Gandhi" />
      <Gap.Small />
      <CodeHeading>isReadOnly</CodeHeading>
      <Textarea isReadOnly hasClearButton placeholder="Enter name" />
      <Gap.Small />
      <Textarea isReadOnly hasClearButton value="Mahatma Gandhi" />
      <Gap.Small />
      <Textarea isReadOnly hasClearButton canExpand={false} value={veryLongText} />
      <Gap.Small />
      <CodeHeading>hasError</CodeHeading>
      <Textarea value="Mahatma Gandhi" hasError />
    </>
  );
}

export default Variations;
