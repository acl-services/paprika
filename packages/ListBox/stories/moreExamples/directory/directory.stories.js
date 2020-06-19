import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Spinner from "@paprika/spinner";
import debounce from "./helpers/debounce";
import ListBox from "../../../src";

const storyName = getStoryName("ListBox");

function createFakeOptions(qty = 10, prefix = "") {
  const options = [];
  for (let i = 0, len = qty; i < len; i++) {
    options.push({ label: `${prefix}${i}` });
  }

  return options;
}

function App() {
  const [allContacts, setAllContacts] = React.useState([]);
  const [allUsers, setAllUsers] = React.useState([]);
  const [contacts, setContacts] = React.useState([]);
  const [customValue, setCustomValue] = React.useState(null);
  const [isListBoxDisabled, setIslistBoxDisabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selected, setSelected] = React.useState(null);
  const [showNoResults, setShowNoResults] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const refFilterInput = React.useRef(null);
  const refInputName = React.useRef(null);
  const refListBox = React.useRef(null);

  function initialValues(users, contacts) {
    setContacts(() => contacts.slice(0, 20));
    setUsers(() => users.slice(0, 20));
  }

  React.useEffect(() => {
    const contacts = createFakeOptions(150, "contact");
    const users = createFakeOptions(150, "user");

    setAllContacts(() => contacts);
    setAllUsers(() => users);

    initialValues(users, contacts);
    setIsLoading(() => false);
    setShowNoResults(() => false);
    setIslistBoxDisabled(() => false);
  }, []);

  const filter = debounce(({ search }) => {
    if (search) {
      setIsLoading(() => true);
      setTimeout(() => {
        setIsLoading(() => false);
        const filterUsers = allUsers.filter(user => user.label.includes(search));
        const filterContacts = allContacts.filter(contact => contact.label.includes(search));

        if (!filterUsers.length && !filterContacts.length) {
          initialValues(allUsers, allContacts);
          setShowNoResults(() => true);
          return;
        }
        setUsers(() => filterUsers);
        setContacts(() => filterContacts);
        setShowNoResults(() => false);

        setShowNoResults(() => false);
      }, 300);
    } else {
      setShowNoResults(() => false);
    }
  }, 500);

  function handleChange(item, list) {
    if (item === null) {
      // means list was cleared
      setSelected(() => null);
      return;
    }

    setSelected(() => list[item].value);
    setCustomValue(() => null);
  }

  function handleKeyDown(event) {
    if (event.target.value !== "") {
      setIsLoading(() => true);
    } else {
      setIsLoading(() => false);
    }

    if (event.key === "Enter" && event.target.value !== "") {
      event.stopPropagation();
      if (!isLoading && showNoResults) {
        const label = event.target.value;
        setSelected(label);
        setCustomValue(() => ({ label }));
        setShowNoResults(() => false);
        setIsLoading(() => false);
        initialValues(allUsers, allContacts);
        refFilterInput.current.clear();
        refListBox.current.close();
        window.requestAnimationFrame(() => {
          refInputName.current.focus();
        });
      }
    }
  }

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <>
      <ListBox ref={refListBox} isDisabled={isListBoxDisabled} onChange={handleChange} placeholder="Select user...">
        <ListBox.Filter ref={refFilterInput} onKeyDown={handleKeyDown} filter={filter} />
        <>
          {isLoading && !showNoResults ? (
            <ListBox.RawItem isDisabled>
              <Spinner size="small" />
            </ListBox.RawItem>
          ) : null}
          {showNoResults ? (
            <ListBox.RawItem isDisable>
              <span>No Results. Hit Enter to use Jack Johnson as *owner* name</span>
            </ListBox.RawItem>
          ) : null}
          {!showNoResults && customValue ? (
            <ListBox.Option defaultIsSelected={customValue.label} value={customValue.label}>
              {customValue.label}
            </ListBox.Option>
          ) : null}
          {!showNoResults && contacts.length ? <ListBox.Divider key="divider_2">Contacts</ListBox.Divider> : null}
          {!showNoResults &&
            contacts.map(contact => (
              <ListBox.Option defaultIsSelected={selected === contact.label} value={contact.label} key={contact.label}>
                {contact.label}
              </ListBox.Option>
            ))}
          {!showNoResults && users.length ? <ListBox.Divider key="divider_1">Users</ListBox.Divider> : null}
          {!showNoResults &&
            users.map(user => (
              <ListBox.Option defaultIsSelected={selected === user.label} value={user.label} key={user.label}>
                {user.label}
              </ListBox.Option>
            ))}
        </>
      </ListBox>

      {customValue ? (
        <>
          <hr />
          <label>
            Email: <input ref={refInputName} type="text" defaultValue="" />
          </label>
        </>
      ) : null}
    </>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Lazy Contact Directory", () => (
  <Story>
    <App />
  </Story>
));
