# Seducer

`React.useReducer` is an awesome hook but more often than not it is overshadow by its relative `React.useState` which is easier and simpler to use.

Personally, I think is mostly by some of the following reasons:

- Reducers are not the bread and butter of all react-developers unlike `React.useState` making it harder to memorize.
- Apart from simple examples `React.useReducer` requires some boilerplate to make it "functional".
- To make it consumable across different components you need to pair it with the `React.createContext` and you will need more boilerplate to use it.
- And because all above, our beloved `React.useState` is picked first than `React.useReducer` each time

To mitigate some of these reasons, Seducer (simple reducer) borned which is a wrapper on top of `React.useReducer`, making it easier to use and with a more friendly API.

`Seducer` provides two hooks that you can consume `useSeducer` and `useSeducerWithContext`.

<hr />

Showtime, these are a basic example for `useSeducer` and a more elaborated one for `useSeducerWithContext`.

## useSeducer example

```js
import { useSeducer } from "@paprika/seducer";
export default function App() {
  function up(state) {
    return state + 1;
  }
  function down(state) {
    return state - 1;
  }
  const [state, dispatch, action] = useSeducer({ up, down }, 0);

  return (
    <>
      {/** alternative you can dispatch("up") directly */}
      <Button onClick={() => dispatch(action.up)}>+</Button>
      <Button onClick={() => dispatch(action.down)}>-</Button>
      {state}
    </>
  );
}
```

## useSeducerWithContext example

```js
import { Provider, useSeducerWithContext } from "@paprika/seducer";

function Add() {
  // accessing dispatch via the context
  const [, dispatch] = useSeducerWithContext();
  const ref = React.useRef(null);

  return (
    <form
      onSubmit={event => {
        dispatch("add", ref.current.value);
        ref.current.value = "";
      }}
    >
      <Input ref={ref} defaultValue="" placeholder="add an animal [enter]" />
    </form>
  );
}

function List() {
  const [state, dispatch] = useSeducerWithContext();
  const handleDelete = item => () => {
    dispatch("remove", item);
  };

  return (
    <ul>
      {Array.from(state).map(item => (
        <li key={item}>
          {item} <Times />
        </li>
      ))}
    </ul>
  );
}

const initialState = new Set(["Cat", "Dog", "Bear"]);

const actions = {
  add(state, payload) {
    const nextList = new Set(state);
    nextList.add(payload);
    return nextList;
  },
  remove(state, payload) {
    const nextList = new Set(state);
    nextList.delete(payload);
    return nextList;
  },
};

export default function App() {
  return (
    <Provider initialState={initialState} actions={actions} hasLogger>
      <List />
      <Add />
    </Provider>
  );
}
```
