import React from "react";
import { Story, Small } from "storybook/assets/styles/common.styles";
import Guard from "../../src";

function GuardedInput() {
  const [value, setValue] = React.useState("");
  const [isHidden, setIsHidden] = React.useState(true);
  const canLeave = Guard.useGuard();

  const isDirty = value !== "";

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() =>
          canLeave({
            alertMessage: "Don't close me, please!",
          }) && setIsHidden(isHidden => !isHidden)
        }
      >
        Show/Hide the input
      </button>

      {!isHidden ? (
        <div>
          <Guard.Connector isDirty={isDirty} />
          <input id="myInput" value={value} onChange={e => setValue(e.target.value)} />
          <p>{isDirty ? "Form is dirty. Now, try to hide the input!" : null}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
}

const WithFormStory = () => {
  return (
    <Story>
      <Guard.Supervisor>
        <GuardedInput />
      </Guard.Supervisor>
      <p>
        <Small>In this example, a confirmation dialog will be triggered if you try to close a dirty input.</Small>
      </p>
    </Story>
  );
};

export default WithFormStory;
