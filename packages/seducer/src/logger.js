/**
 * Summary: Prints the current processing action via the dev console, with it's previous state and the next state after passing inside the reducer.
 *
 * @param {{}} prevState The current state of the store
 * @param {{}} nextState The next state after being pass through the reducer
 * @param {{ type: string, payload: any }} action The actions that has being dispatched by the consumer
 * @param {boolean} isFromInterceptor Let the consoler knowns if the actions is an original or has been override by the interceptors
 *
 * @return {{}}          The next state
 */

export default function logger(prevState, nextState, action, isFromInterceptor = false) {
  console.groupCollapsed(`${isFromInterceptor ? "⇢" : ""} action: ${action.type} @ ${new Date().toLocaleTimeString()}`);

  // we don't want to showcase payload if it's undefined
  // eslint-disable-next-line no-param-reassign
  if (typeof action.payload === "undefined") delete action.payload;

  console.log(`%c∙ prev state`, styles.prev, prevState);
  console.log(`%c∙ action`, styles.action, action);
  console.log(`%c✦ next state`, styles.next, nextState);
  console.log(`%c∙ finished @ ${new Date().toLocaleTimeString()}`, styles.finished);
  console.groupEnd();

  return nextState;
}

const styles = {
  prev: `color: #F312A7;`,
  action: `color: #A5DE5D;`,
  next: `color: #25D8FF; font-weight:bold;`,
  finished: `color: #BEBEBE;`,
};
