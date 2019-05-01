/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import Button from "@paprika/button";
import ListBox from "../../../../src";

export default function Add() {
  const [options, setOptions] = React.useState([]);
  const [inputText, setInputText] = React.useState("");

  const handleChangeAdd = e => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
    if (inputText) {
      setOptions([...options, inputText]);
      setInputText("");
    }
  };

  return (
    <fieldset>
      <legend>Add item </legend>
      <input value={inputText} onChange={handleChangeAdd} type="text" placeholder="Add item" />
      <Button kind="primary" onClick={handleClickAdd}>
        Add
      </Button>
      <br />
      {options.length ? (
        <ListBox isInline>
          {options.map(option => (
            <ListBox.Option key={option}>{option}</ListBox.Option>
          ))}
        </ListBox>
      ) : null}
    </fieldset>
  );
}
