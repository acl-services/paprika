import React from "react";
import { PropsContext } from "../../store/PropsProvider";

export default function LabelSingle(props) {
  const { selectedOptions, options } = props;
  const { virtualize } = React.useContext(PropsContext);

  if (virtualize) {
    return virtualize.onRenderLabel();
  }

  const option = options[selectedOptions[0]];
  if (option.label) {
    return option.label;
  }

  if (typeof options.content === "string") {
    return option.content;
  }

  console.log(
    "Warning: Your Option required a label prop, <ListBox.Option label='your label' /><MyCoolContent /></ListBox.Option>"
  );
  return option.content;
}
