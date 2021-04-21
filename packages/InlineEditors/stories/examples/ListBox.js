import React from "react";
import Card from "../../../Card/src";
import Toast from "../../../Toast/src";
import Tag, { Tags } from "../../../Tag/src";
import ListBox from "../../src/ListBox";

export function ListBoxSingleStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];
  const [value, setValue] = React.useState(subscriptionTypes[1]);
  const [valueOnChange, setValueOnChange] = React.useState("");

  function handleonStart() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function handleSubmit(index, options) {
    setValue(options[index].value);
  }

  function handleChange(index, options) {
    setValueOnChange(options[index].value);
  }

  return (
    <>
      <Card style={{ padding: "16px", width: "320px" }}>
        <Toast hasCloseButton={false}>The API is stable need some design tweaks</Toast>
        <span>onChange:{valueOnChange}</span>
        <br />
        <ListBox
          isEditing={isEditing}
          onChange={handleChange}
          onClose={handleClose}
          onStart={handleonStart}
          onSubmit={handleSubmit}
          value={value}
        >
          <ListBox.Filter />
          {subscriptionTypes.map(subscription => (
            <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
              {subscription}
            </ListBox.Option>
          ))}
        </ListBox>
      </Card>
      <br />
      <br />
      <br />
      <Card style={{ padding: "16px", width: "320px" }}>
        <Toast hasCloseButton={false}>Display an error</Toast>
        <ListBox value={value} status={ListBox.types.status.ERROR}>
          <ListBox.Filter />
          {subscriptionTypes.map(subscription => (
            <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
              {subscription}
            </ListBox.Option>
          ))}
        </ListBox>
      </Card>
      <br />
      <br />
      <br />
      <Card style={{ padding: "16px", width: "320px" }}>
        <Toast hasCloseButton={false}>Display an error</Toast>
        <ListBox value={value} status={ListBox.types.status.LOADING}>
          <ListBox.Filter />
          {subscriptionTypes.map(subscription => (
            <ListBox.Option value={subscription} key={subscription}>
              {subscription}
            </ListBox.Option>
          ))}
        </ListBox>
      </Card>
      <br />
      <br />
      <br />
      <Card style={{ padding: "16px", width: "320px" }}>
        <Toast hasCloseButton={false}>Display a success check icon for a brief period of time</Toast>
        <ListBox value={value} status={ListBox.types.status.SUCCEED}>
          <ListBox.Filter />
          {subscriptionTypes.map(subscription => (
            <ListBox.Option value={subscription} key={subscription}>
              {subscription}
            </ListBox.Option>
          ))}
        </ListBox>
      </Card>
    </>
  );
}

export function ListBoxMultipleStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const subscriptionTypes = [
    { id: 1, label: "Professional" },
    { id: 2, label: "Oversight" },
    { id: 3, label: "Contributor" },
    { id: 4, label: "Results Lite Contributor" },
    { id: 5, label: "None" },
  ];
  const [value, setValue] = React.useState([1, 2]);

  function handleonStart() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function handleSubmit(indexes, options) {
    setIsEditing(false);
    const nextValue = indexes.map(index => {
      return options[index].value;
    });
    setValue(nextValue);
  }

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>The API is stable need some design tweaks</Toast>
      <ListBox
        isEditing={isEditing}
        onStart={handleonStart}
        onClose={handleClose}
        value={value}
        isMulti
        onChange={props => {
          console.log("onChange", props);
        }}
        renderValue={indexes => {
          return (
            <Tags>
              {indexes.map(index => {
                return <Tag key={subscriptionTypes[index - 1].label}>{subscriptionTypes[index - 1].label}</Tag>;
              })}
            </Tags>
          );
        }}
        onSubmit={handleSubmit}
      >
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription.id} isSelected={value.includes(subscription.id)} key={subscription.id}>
            {subscription.label}
          </ListBox.Option>
        ))}
      </ListBox>
    </Card>
  );
}
