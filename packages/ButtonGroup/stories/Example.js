import React from "react";
import ButtonGroup from "../src";

const Example = ({ itemData, isDisabled, ...moreProps }) => (
  <ButtonGroup isDisabled {...moreProps}>
    {itemData.map((item, index) => (
      <ButtonGroup.Item
        key={item.text}
        value={index + 1}
        defaultIsActive={item.isActive}
        isDisabled={isDisabled || item.isDisabled}
      >
        {item.text}
      </ButtonGroup.Item>
    ))}
  </ButtonGroup>
);

export default Example;
