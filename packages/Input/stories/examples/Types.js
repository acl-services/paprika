import React from "react";
import SearchIcon from "@paprika/icon/lib/Search";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Input from "../../src";

const TypesExample = () => {
  return (
    <>
      <CodeHeading>
        {`type={Input.types.type.TEXT}`} <span>(default)</span>
      </CodeHeading>
      <Input type={Input.types.type.TEXT} value="Dillon Dubé" />
      <Gap />
      <CodeHeading>{`type={Input.types.type.PASSWORD}`} </CodeHeading>
      <Input type={Input.types.type.PASSWORD} value="p@$$w0rD" />
      <Gap />
      <CodeHeading>{`type={Input.types.type.SEARCH}`} </CodeHeading>
      <Input type={Input.types.type.SEARCH} placeholder="Search..." icon={<SearchIcon />} />
      <Gap />
      <CodeHeading>{`type={Input.types.type.NUMBER}`} </CodeHeading>
      <strong>Deprecated.</strong> Don‘t do this. Use <code>{`<Input type={Input.types.type.TEXT} />`}</code> instead.
      <Gap />
      <StoryHeading level={3}>Also Available</StoryHeading>
      <ul>
        <li>
          <code>Input.types.type.EMAIL</code>
        </li>
        <li>
          <code>Input.types.type.TELEPHONE</code>
        </li>
        <li>
          <code>Input.types.type.URL</code>
        </li>
      </ul>
    </>
  );
};

export default TypesExample;
