import React from "react";
import ListBox from "../../src/ListBox";

export default function ListBoxStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];
  const [value, setValue] = React.useState(subscriptionTypes[1]);

  function handleOnEditing() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function handleSubmit(index, options) {
    setValue(options[index].value);
  }

  return (
    <div style={{ width: "220px", padding: "32px" }}>
      <ListBox
        isEditing={isEditing}
        onEditing={handleOnEditing}
        onClose={handleClose}
        value={value}
        onChange={props => {
          console.log("onChange", props);
        }}
        isOpen
        onSubmit={handleSubmit}
      >
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
            {subscription}
          </ListBox.Option>
        ))}
      </ListBox>
    </div>
  );
}
