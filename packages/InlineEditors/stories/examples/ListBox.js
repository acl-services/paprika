import React from "react";
import Card from "../../../Card/src";
import Toast from "../../../Toast/src";
import Tag, { Tags } from "../../../Tag/src";
import ListBox from "../../src/ListBox";

const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];

// this coding can be inside of your component is not necessary to be a hook
function useListBoxExample() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(subscriptionTypes[1]);
  const [valueOnChange, setValueOnChange] = React.useState("");

  function handleOnStart() {
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

  return {
    onChange: handleChange,
    onSubmit: handleSubmit,
    onClose: handleClose,
    onStart: handleOnStart,
    isEditing,
    value,
    valueOnChange,
  };
}

export function ListBoxSingleStory() {
  const { isEditing, onChange, onClose, onStart, onSubmit, value, valueOnChange } = useListBoxExample();

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>The API is stable need some design tweaks</Toast>
      <span>onChange:{valueOnChange}</span>
      <br />
      <ListBox
        isEditing={isEditing}
        onChange={onChange}
        onClose={onClose}
        onStart={onStart}
        onSubmit={onSubmit}
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
  );
}

export function ListBoxMultipleWithError() {
  const { isEditing, onChange, onClose, onStart, onSubmit, value } = useListBoxExample();

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>Display an error</Toast>
      <ListBox
        isEditing={isEditing}
        onChange={onChange}
        onClose={onClose}
        onStart={onStart}
        onSubmit={onSubmit}
        value={value}
        status={ListBox.types.status.ERROR}
      >
        <ListBox.Filter />
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
            {subscription}
          </ListBox.Option>
        ))}
      </ListBox>
    </Card>
  );
}

export function ListBoxMultipleWithLoading() {
  const { isEditing, onChange, onClose, onStart, onSubmit, value } = useListBoxExample();

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>Set the state in a loading state</Toast>
      <ListBox
        isEditing={isEditing}
        onChange={onChange}
        onClose={onClose}
        onStart={onStart}
        onSubmit={onSubmit}
        value={value}
        status={ListBox.types.status.LOADING}
      >
        <ListBox.Filter />
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
            {subscription}
          </ListBox.Option>
        ))}
      </ListBox>
    </Card>
  );
}

export function ListBoxMultipleWithSuccess() {
  const { isEditing, onChange, onClose, onStart, onSubmit, value } = useListBoxExample();

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>Briefly display a success message which later returns to an IDLE state</Toast>
      <ListBox
        isEditing={isEditing}
        onChange={onChange}
        onClose={onClose}
        onStart={onStart}
        onSubmit={onSubmit}
        value={value}
        status={ListBox.types.status.SUCCEED}
      >
        <ListBox.Filter />
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription} isSelected={subscription === value} key={subscription}>
            {subscription}
          </ListBox.Option>
        ))}
      </ListBox>
    </Card>
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

  function handleOnStart() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function handleSubmit(indexes, options) {
    setIsEditing(false);
    const nextValue = indexes.map(index => options[index].value);
    setValue(nextValue);
  }

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>The API is stable need some design tweaks</Toast>
      <ListBox
        isEditing={isEditing}
        onStart={handleOnStart}
        onClose={handleClose}
        value={value}
        isMulti
        onChange={props => {
          console.log("onChange", props);
        }}
        renderValue={indexes => (
            <Tags>
              {indexes.map(index => <Tag key={subscriptionTypes[index - 1].label}>{subscriptionTypes[index - 1].label}</Tag>)}
            </Tags>
          )}
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
