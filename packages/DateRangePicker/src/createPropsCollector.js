export default function createPropsCollector(displayName) {
  function PropsCollector() {
    return null;
  }

  PropsCollector.displayName = displayName;

  return PropsCollector;
};
