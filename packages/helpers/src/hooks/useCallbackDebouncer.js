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
 * @returns {callbackFn(callbackFn => any)}
 */
export default function useCallbackDebouncer(debounceDelay = 0) {
  const [debounceCallback] = React.useState(() => debounce(callbackFn => callbackFn(), debounceDelay));

  return debounceCallback;
}
