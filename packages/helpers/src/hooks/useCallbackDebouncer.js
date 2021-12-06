import React from "react";
import debounce from "lodash.debounce";

/**
 * Creates a function that allows to debounce any callback
 *
 * @example
 * const debounceCallback = useCallbackDebouncer(1000);
 *
 * functon handleChange() {
 *   debounceCallback(() => onChange(1))
 *   debounceCallback(() => onChange(2))
 *   debounceCallback(() => onChange(3)) // Only onChange(3) will be called
 * }
 *
 * @param {number} debounceDelay milliseconds
 * @param {Object} options https://lodash.com/docs/4.17.15#debounce
 * @returns {callbackFn(callbackFn => any)}
 */
export default function useCallbackDebouncer(debounceDelay = 0, options = {}) {
  const [debounceCallback] = React.useState(() => debounce(callbackFn => callbackFn(), debounceDelay, options));

  return debounceCallback;
}
