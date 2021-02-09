/* eslint-disable guard-for-in */
/**
 * Summary: From a given object with action functions declared returns a new object with the type names of those actions.
 *
 * @param {{[key]: string: any}} actions  An object with {key: value} format that define an action of an state
 * @returns {{}} types    An object with all the names of the types inside
 */

export default function getTypes(actions) {
  let o = {};
  for (const action in actions) {
    o = { ...o, [actions[action].name]: actions[action].name };
  }
  return o;
}
