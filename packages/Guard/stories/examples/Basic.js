import React from "react";
import { Story, Small, Rule } from "storybook/assets/styles/common.styles";
import Guard from "../../src";

function GuardWithInput() {
  const [value, setValue] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);

  const isDirty = value !== "";

  return (
    <React.Fragment>
      <Guard.Gatekeeper alertMessage="Don't close me, please!">
        {canLeave => (
          <button type="button" onClick={() => canLeave() && setIsHidden(isHidden => !isHidden)}>
            Show/Hide the input
          </button>
        )}
      </Guard.Gatekeeper>

      {!isHidden ? (
        <div>
          <Guard.Connector isDirty={isDirty} />
          <input id="myInput" value={value} onChange={e => setValue(e.target.value)} />
          <p>Is dirty: {isDirty ? "true" : "false"}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
}

const ExampleStory = () => {
  return (
    <Story>
      <Guard.Supervisor>
        <Guard.Connector isDirty />
      </Guard.Supervisor>
      <p>
        <Small>In this example a confirmation dialog will be triggered if you try to close the tab.</Small>
      </p>
      <p>
        <Small>
          [WARNING] This behaviour is not working properly, if the `Guard.Supervisor` rendered inside of an iframe.
          https://stackoverflow.com/questions/49445671/how-to-trigger-beforeunload-event-from-within-an-iframe
        </Small>
      </p>

      <Rule />
      <Guard.Supervisor>
        <GuardWithInput />
      </Guard.Supervisor>
      <p>
        <Small>In this example a confirmation dialog will be triggered if you try to close a dirty input</Small>
      </p>
    </Story>
  );
};

export default ExampleStory;
