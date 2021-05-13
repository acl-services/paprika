import React from "react";
import SearchIcon from "@paprika/icon/lib/Search";
import ClearIcon from "@paprika/icon/lib/Times";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Input from "../../src";

const Variations = () => {
  return (
    <>
      <Input />
      <Gap.Small />
      <CodeHeading>placeholder</CodeHeading>
      <Input placeholder="Enter name" />
      <Gap.Small />
      <CodeHeading>defaultValue</CodeHeading>
      <Input defaultValue="Mahatma Gandhi" />
      <Gap.Small />
      <CodeHeading>hasClearButton</CodeHeading>
      <Input defaultValue="Mahatma Gandhi" hasClearButton />
      <Gap.Small />
      <CodeHeading>
        <span>Custom</span> clearIcon
      </CodeHeading>
      <Input defaultValue="Mahatma Gandhi" hasClearButton clearIcon={<ClearIcon />} />
      <Gap.Small />
      <CodeHeading>{`icon={<Icon />}`}</CodeHeading>
      <Input icon={<SearchIcon />} />

      <Gap />

      <StoryHeading level={1}>Sizes</StoryHeading>
      <CodeHeading>{`size={Input.types.size.SMALL}`}</CodeHeading>
      <Input
        placeholder="First Name"
        defaultValue="Mohandas"
        hasClearButton
        icon={<SearchIcon />}
        size={Input.types.size.SMALL}
      />
      <Gap.Small />
      <CodeHeading>
        {`size={Input.types.size.MEDIUM}`} <span>(default)</span>
      </CodeHeading>
      <Input placeholder="Middle Name" defaultValue="Karamchand" hasClearButton icon={<SearchIcon />} />
      <Gap.Small />
      <CodeHeading>{`size={Input.types.size.LARGE}`}</CodeHeading>
      <Input
        placeholder="Last Name"
        defaultValue="Gandhi"
        hasClearButton
        icon={<SearchIcon />}
        size={Input.types.size.LARGE}
      />

      <Gap />

      <StoryHeading level={1}>States</StoryHeading>
      <CodeHeading>isDisabled</CodeHeading>
      <Input isDisabled hasClearButton icon={<SearchIcon />} placeholder="Enter name" />
      <Gap.Small />
      <Input isDisabled hasClearButton icon={<SearchIcon />} value="Sam Bennett" />
      <Gap.Small />
      <CodeHeading>isReadOnly</CodeHeading>
      <Input isReadOnly hasClearButton icon={<SearchIcon />} placeholder="Enter name" />
      <Gap.Small />
      <Input isReadOnly hasClearButton icon={<SearchIcon />} value="Sam Bennett" />
      <Gap.Small />
      <Input
        isReadOnly
        hasClearButton
        icon={<SearchIcon />}
        value="This is a very long text to test that you can scroll this input horizontally."
      />
      <CodeHeading>hasError</CodeHeading>
      <Input value="Sam Bennett" hasError />
    </>
  );
};

export default Variations;
