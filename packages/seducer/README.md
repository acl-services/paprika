# Seducer

`React.useReducer` is an awesome hook but more often than not it is overshadow by its relative `React.useState` which is easier and simpler to use.

Personally, I think is mostly by some of the following reasons:

- Reducers are not the bread and butter of all react-developers unlike `React.useState` making it harder to memorize.
- Apart from simple examples `React.useReducer` requires some boilerplate to make it "functional".
- To make it consumable across different components you need to pair it with the `React.createContext` and you will need more boilerplate to use it.
- And because all above, our beloved `React.useState` is picked first than `React.useReducer` each time

To mitigate some of these reasons, Seducer (simple reducer) borned which is a wrapper on top of `React.useReducer`, making it easier to use and with a more friendly API.

`Seducer` provides two hooks that you can consume `useSeducer` and `useSeducerWithContext`.

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
