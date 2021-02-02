import React from "react";

import * as sc from "./Arrow.styles";

export default function Arrow(props) {
  const { ...moreProps } = props;
  return <div>^</div>;
  // return <sc.Arrow {...moreProps} />;
}

Arrow.displayName = "CollapsibleCard.Arrow";
