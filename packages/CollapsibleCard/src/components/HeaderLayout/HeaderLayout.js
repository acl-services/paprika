import React from "react";
import PropTypes from "prop-types";
import { extractChildren } from "@paprika/helpers";
import Left from "./components/Left";
import Right from "./components/Right";
import Heading from "./components/Heading";
import Metadata from "./components/Metadata";
import Counter from "./components/Counter";
import * as sc from "./HeaderLayout.styles";

export default function HeaderLayout(props) {
  const { children, ...moreProps } = props;

  const {
    "HeaderLayout.Left": Left,
    "HeaderLayout.Heading": Heading,
    "HeaderLayout.Metadata": Metadata,
    "HeaderLayout.Counter": Counter,
  } = extractChildren(children, [
    "HeaderLayout.Left",
    "HeaderLayout.Heading",
    "HeaderLayout.Metadata",
    "HeaderLayout.Counter",
  ]);

  return (
    <sc.HeaderLayout>
      {Left}
      <Right>
        <sc.HeadingWrapper>
          {Heading}
          {Counter}
        </sc.HeadingWrapper>
        {Metadata}
      </Right>
    </sc.HeaderLayout>
  );
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

HeaderLayout.propTypes = propTypes;
HeaderLayout.defaultProps = defaultProps;
HeaderLayout.displayName = "CollapsibleCard.HeaderLayout";
HeaderLayout.Left = Left;
HeaderLayout.Heading = Heading;
HeaderLayout.Metadata = Metadata;
HeaderLayout.Counter = Counter;
