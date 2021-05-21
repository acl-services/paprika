import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Textarea from "../../src";

const Variations = () => {
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
      <Textarea isDisabled hasClearButton value="Sam Bennett" />
      <Gap.Small />
      <CodeHeading>isReadOnly</CodeHeading>
      <Textarea isReadOnly hasClearButton placeholder="Enter name" />
      <Gap.Small />
      <Textarea isReadOnly hasClearButton value="Sam Bennett" />
      <Gap.Small />
      <Textarea
        isReadOnly
        hasClearButton
        canExpand={false}
        value="This is a very long text to test that you can scroll this textarea vertically. This is a very long text to test that you can scroll this textarea vertically. This is a very long text to test that you can scroll this textarea vertically. This is a very long text to test that you can scroll this textarea vertically."
      />
      <Gap.Small />
      <CodeHeading>hasError</CodeHeading>
      <Textarea value="Sam Bennett" hasError />
    </>
  );
};

export default Variations;
