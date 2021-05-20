import React from "react";
import ListBox from "@paprika/list-box";
import ListBoxWithTags from "@paprika/list-box-with-tags";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Select from "../../src";

function MockOptions() {
  return (
    <>
      <option value="Pepsi">Pepsi</option>
      <option value="Coke">Coke</option>
    </>
  );
}

export default function Variations() {
  return (
    <>
      <Select>
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>placeholder</CodeHeading>
      <Select placeholder="Choose the best one...">
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>defaultValue</CodeHeading>
      <Select defaultValue="Coke">
        <MockOptions />
      </Select>
      <Gap.Small />
      <Select>
        <option value="super long">This is a very long text to test how overflowing text is clipped.</option>
        <MockOptions />
      </Select>

      <Gap />

      <StoryHeading level={1}>Sizes</StoryHeading>
      <CodeHeading>{`size={Select.types.size.SMALL}`}</CodeHeading>
      <Select size={Select.types.size.SMALL}>
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>
        {`size={Input.types.size.MEDIUM}`} <span>(default)</span>
      </CodeHeading>
      <Select>
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>{`size={Input.types.size.LARGE}`}</CodeHeading>
      <Select size={Select.types.size.LARGE}>
        <MockOptions />
      </Select>

      <Gap />

      <StoryHeading level={1}>States</StoryHeading>
      <CodeHeading>isDisabled</CodeHeading>
      <Select isDisabled>
        <MockOptions />
      </Select>
      <Gap.Small />
      <Select isDisabled placeholder="Choose the best one...">
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>isReadOnly</CodeHeading>
      <Select isReadOnly>
        <MockOptions />
      </Select>
      <Gap.Small />
      <Select isReadOnly placeholder="Choose the best one...">
        <MockOptions />
      </Select>
      <Gap.Small />
      <CodeHeading>hasError</CodeHeading>
      <Select hasError>
        <MockOptions />
      </Select>

      <Gap />

      <StoryHeading level={1}>Comparison</StoryHeading>
      <CodeHeading>
        {`<Select>`} <span>vs</span> {`<ListBox>`} <span>vs</span> {`<ListBoxWithTags>`}
      </CodeHeading>
      <Select placeholder="Select...">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
      </Select>
      <Gap.Small />
      <ListBox>
        <ListBox.Option>Coke</ListBox.Option>
        <ListBox.Option>Pepsi</ListBox.Option>
      </ListBox>
      <Gap.Small />
      <ListBoxWithTags selectedOptions={[]}>
        <ListBoxWithTags.Option>Coke</ListBoxWithTags.Option>
        <ListBoxWithTags.Option>Pepsi</ListBoxWithTags.Option>
      </ListBoxWithTags>
    </>
  );
}
