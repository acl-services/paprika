import React from "react";

export function extractChildrenProps(children) {
  let overrides;

  React.Children.forEach(children, child => {
    if (child.type.displayName === "DatePicker.Input") {
      overrides = { ...child.props };
    }
  });

  return overrides;
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
