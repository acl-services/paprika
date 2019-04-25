const isCurrentTargetFocused = ({ relatedTarget, currentTarget }) => {
  if (relatedTarget === null) return false;

  let node = relatedTarget.parentNode;

  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }

  return false;
};

export default isCurrentTargetFocused;
