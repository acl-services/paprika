import React from "react";
import ButtonGroup from "../src";

const Example = ({ itemData, isDisabled, ...rest }) => (
  <ButtonGroup isDisabled {...rest}>
    {itemData.map((item, idex) => (
      <ButtonGroup.Item
        key={item}
        value={idex + 1}
        defaultIsActive={item.isActive}
        isDisabled={isDisabled || item.isDisabled}
      >
        {item.text}
      </ButtonGroup.Item>
    ))}
  </ButtonGroup>
);

export default Example;
