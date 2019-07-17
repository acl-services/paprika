import React from "react";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import DatePicker from "@paprika/date-picker";
import FormElement from "../src/FormElement";
import ListBox from "@paprika/listbox";
// import Select from "@paprika/select";

function Example(props) {
  const { children, locale, ...moreProps } = props;
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function setRef(ref) {
    console.log("ref", ref);
  }

  return (
    <L10n locale={props.locale}>
      <FormElement
        isDisabled={false}
        isReadOnly={false}
        isOptional={true}
        isRequired={false}
        isInline={false}
        size="medium"
      >
        {/* <Input
          label="Your email:"
          onChange={handleChange}
          value={"dsdfsdfdsfsdfsdfsd"}
          inputRef={setRef}
          placeholder="abc@email"
        /> */}
        {/* <DatePicker label="Date">
          <DatePicker.Input id="test-id"></DatePicker.Input>
        </DatePicker> */}
        <ListBox label="Choose one:">
          <ListBox.Option>The Joker</ListBox.Option>
          <ListBox.Option>Darth Vader</ListBox.Option>
          <ListBox.Option>Hannibal Lecter</ListBox.Option>
          <ListBox.Option>Lord Voldemort</ListBox.Option>
          <ListBox.Option>Freddy Krueger</ListBox.Option>
          <ListBox.Option>Palpatine</ListBox.Option>
          <ListBox.Option>Agent Smith</ListBox.Option>
        </ListBox>
        <div>text text</div>
        {/* <Select label="Select one: " id="drink">
          <option value="Coke">Pepsi</option>
          <option value="Pepsi">Coke</option>
        </Select> */}
        {/* <FormElement.Error>There's some error.</FormElement.Error> */}
        <FormElement.Description>Your email used for login.</FormElement.Description>
        {/* <FormElement.Hint>example@my.com</FormElement.Hint> */}
      </FormElement>
    </L10n>
  );
}

export default Example;
