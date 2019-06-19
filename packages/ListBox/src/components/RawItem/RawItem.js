import React from "react";
import Option from "../Option";
/**

This component let the consumer to write `<ListBox.Option preventDefaultOnSelect />`
in a more semantic way:

<ListBox>
  <ListBox.Option>Option 1</ListBox.Option>
  <ListBox.RawItem> this is not interactive and can be anything </ListBox.RawItem>
</ListBox>

see: GetTypeOfChildren.js
*/

const defaultProps = {
  preventDefaultOnSelect: true,
};

export default function RawItem(props) {
  return <Option {...props} />;
}

RawItem.componentType = "ListBox.RawItem";
RawItem.defaultProps = defaultProps;
