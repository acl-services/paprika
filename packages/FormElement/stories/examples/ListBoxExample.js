import React from "react";
import ListBox from "@paprika/listbox";
import FormElement from "../../src/FormElement";

export default function ListBoxExample() {
  const optionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor", <span>test</span>];

  const listboxOptions = optionsArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

  return (
    <FormElement label="Form Label">
      <FormElement.Content>
        {({ refLabel }) => <ListBox refLabel={refLabel}>{listboxOptions}</ListBox>}
      </FormElement.Content>
      <FormElement.Description>
        <span>Description of this field.</span>
      </FormElement.Description>
      <FormElement.Help>
        Give me some help. <a href="wegalvanize.com">Learn more</a>.
      </FormElement.Help>
    </FormElement>
  );
}
