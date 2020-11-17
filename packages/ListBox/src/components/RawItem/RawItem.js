import React from "react";
import PropTypes from "prop-types";
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

const propTypes = {
  preventDefaultOnSelect: PropTypes.bool,
};

const defaultProps = {
  preventDefaultOnSelect: true,
};

export default function RawItem(props) {
  return <Option {...props} />;
}

RawItem.displayName = "ListBox.RawItem";
RawItem.propTypes = propTypes;
RawItem.defaultProps = defaultProps;
