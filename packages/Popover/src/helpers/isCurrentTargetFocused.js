const isCurrentTargetFocused = ({ activeElement, currentTarget }) => {
  if (activeElement === currentTarget) return true;
  return currentTarget.contains(activeElement);
};

export default isCurrentTargetFocused;
