import React from "react";
import { Story, Small } from "storybook/assets/styles/common.styles";
import Guard from "../../src";

const BasicStory = () => {
  return (
    <Story>
      <Guard.Supervisor>
        <Guard.Connector isDirty />
      </Guard.Supervisor>
      <p>
        <Small>In this example, a confirmation dialog will be triggered if you try to close the tab.</Small>
      </p>
      <p>
        <Small>
          [WARNING] This behavior is not working properly if the `Guard.Supervisor` rendered inside of an iframe.
          https://stackoverflow.com/questions/49445671/how-to-trigger-beforeunload-event-from-within-an-iframe
        </Small>
      </p>
    </Story>
  );
};

export default BasicStory;
