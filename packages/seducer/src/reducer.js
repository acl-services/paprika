/* eslint-disable no-use-before-define */
import logger from "./logger";

/**
 * Summary: Reducer controls all actions and reduce them to create the nextState
 *
 * Description. Curry function execute (actions, hasLogger, interceptors) and returns nextState
 *
 * (actions, hasLogger, interceptors) =>
 * @param {{[key]:(state, payload)=> nextState}}   actions         An object with {key: value} format that define an action of an state
 * @param {boolean}                                hasLogger       Allowed to print a friendly log with the previous and next action
 * @param {{[key]:(state, payload)=> nextState}}   interceptors    An object with {key: value} which allows inversion of control by extending the actions object
 *
 * @return (state, actions) => (state, action) => {...}
 *
 * @param {unknown}                                state           The current state of the useReducer state can be anything
 * @param {{key: {type:string, payload:unknown}}}  action          The action to be handle by the reducer and redirected to the their respective actions
 *
 * @return {unknown} nextState
 */

export const reducer = (actions, hasLogger, interceptors = {}) => (state, action) => {
  const isAValidAction =
    "type" in action && ([action.type] in actions || (interceptors && [action.type] in interceptors));

  if (isAValidAction) {
    const nextState = () => actions[action.type](state, action.payload);

    if (interceptors && [action.type] in interceptors) {
      return handleInterceptors({
        action,
        actions,
        hasLogger,
        interceptors,
        nextState,
        state,
      });
    }

    return handleRegularRegularReducerFlow({
      action,
      hasLogger,
      nextState,
      state,
    });
  }

  throw new Error(
    `The type "${action.type}" lacks of an action implementation, did you forget to add it: 
${action.type}(state, payload) { 
  return state;
} 

to your action object`
  );
};

/**
 * Summary: Seducer permits to implement inversion of control without exposing the internal reducer and instead allowing the consumer to
 *          extend its current action object, this has three benefits:
 *
 * First:   Abstract the concept of a reducer so the developer doesn't have to deal with
 * Second:  Is quite simple to understand the concept of function and it's easy to explain to another developer that to override a function
 *          has to declare another function with the same name, this is pretty common to do in OOP.
 * Third:   In order to achieve inversion of control the library doesn't requires to export their internal reducer to the consumer
 *          instead is transparent to them by simply overriding the already created actions.
 *          In case duplication exists a third parameter will be sent to the action (state, payload, nextState) is
 *          which is a function that the consumer can executed to generate the default nextState value that the component would generate
 *          if wouldn't be intercepted.
 *
 *
 * @param {{ type, payload }}                      action
 * @param {{[key]:(state, payload)=> nextState}}   actions
 * @param {boolean}                                hasLogger
 * @param {{[key]:(state, payload)=> nextState}}   interceptors
 * @param {unknown}                                nextState    A function that when its call generate the nextState for a giving action.
 * @param {unknown}                                state
 */

function handleInterceptors({ action, actions, hasLogger, interceptors, nextState, state }) {
  // if the interceptor action is overriding and original action
  if (action.type in actions) {
    const nextInterceptorState = interceptors[action.type](state, action.payload, nextState);

    return hasLogger ? logger(state, nextInterceptorState, action, true) : nextInterceptorState;
  }

  // if the action has been added as a new action
  const nextInterceptorStateWithoutOverride = interceptors[action.type](state, action.payload);

  return hasLogger
    ? logger(state, nextInterceptorStateWithoutOverride, action, true)
    : nextInterceptorStateWithoutOverride;
}

/**
 * Summary: A regular call to get the nextState for the reducer depending on the action that has been pass down by the consumer
 *
 *
 * @param {{ type, payload }}  action
 * @param {boolean}            hasLogger
 * @param {unknown}            nextState    A function that when its call generate the nextState for a giving action.
 * @param {unknown}            state

 */

function handleRegularRegularReducerFlow({ action, hasLogger, nextState, state }) {
  return hasLogger ? logger(state, nextState(), action) : nextState();
}

export default reducer;
