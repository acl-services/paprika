export default function callAll(...fns) {
  return (...args) => {
    for (const fn of fns) {
      if (fn) fn(...args);
    }
  };
}
