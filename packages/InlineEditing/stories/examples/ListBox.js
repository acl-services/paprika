import React from "react";
import ListBox from "../../src/ListBox";

export default function ListBoxStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];
  const [value] = React.useState(subscriptionTypes[1]);

  return (
    <ListBox
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      value={value}
      onChange={props => {
        console.log("onChange", props);
      }}
      onSubmit={props => {
        console.log("onSubmit", props);
      }}
    >
      {subscriptionTypes.map(subscription => (
        <ListBox.Option isSelected={subscription === value} key={subscription}>
          {subscription}
        </ListBox.Option>
      ))}
    </ListBox>
  );
}
