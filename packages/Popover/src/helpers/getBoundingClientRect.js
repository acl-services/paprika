export default function getBoundingClientRect(el) {
  const rect = el.getBoundingClientRect();

  let x;
  let y;
  if (rect.x === undefined) {
    x = rect.left;
  } else {
    x = rect.x;
  }

  if (rect.y === undefined) {
    y = rect.top;
  } else {
    y = rect.y;
  }

  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    x,
    y,
    width: rect.width,
    height: rect.height,
  };
}
