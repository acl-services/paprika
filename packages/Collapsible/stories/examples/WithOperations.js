import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import RawButton from "@paprika/raw-button";
import TrashbinIcon from "@paprika/icon/lib/Trashbin";
import Collapsible from "../../src";

const CollapsibleWithOperationsStory = () => {
  const noop = () => {};
  const operations = (
    <React.Fragment>
      <a href="http://wegalvanize.com">View</a>
      <RawButton onClick={noop}>
        <TrashbinIcon />
      </RawButton>
    </React.Fragment>
  );

  return (
    <Story>
      <Collapsible isCollapsed label="Icon align left" iconAlign="left" onClick={noop} operations={operations}>
        content
      </Collapsible>
      <Rule />
      <Collapsible isCollapsed label="Icon align right" iconAlign="right" onClick={noop} operations={operations}>
        content
      </Collapsible>
      <Rule />
      <Collapsible
        hasOnlyIconToggle
        iconAlign="left"
        isCollapsed
        label="HasOnlyIconToggle and Icon align left"
        onClick={noop}
        operations={operations}
      >
        content
      </Collapsible>
      <Rule />
      <Collapsible
        hasOnlyIconToggle
        iconAlign="right"
        isCollapsed
        label="HasOnlyIconToggle and Icon align right"
        onClick={noop}
        operations={operations}
      >
        content
      </Collapsible>
    </Story>
  );
};

export default CollapsibleWithOperationsStory;
