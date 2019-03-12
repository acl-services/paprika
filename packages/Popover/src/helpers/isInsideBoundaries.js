const isInsideBoundaries = ({ $container, $element, align }) => {
  if ($container && $element) {
    const containerRect = $container.getBoundingClientRect();
    const elementRect = $element.getBoundingClientRect();

    const alignVert = ["bottom", "top"].includes(align);

    // avoid some weirdness with the tip and with scrollbars
    // we might actually want the dimensions of the Tip to do this right
    // half tip + edgePadding
    const edgeBuffer = {
      vert: alignVert ? 0 : 15,
      horz: alignVert ? 15 : 0,
    };

    // ¿ maybe just round up to 20 ?
    const scrollbarBuffer = 17;

    const elementLimit = {
      left: alignVert ? elementRect.right - elementRect.width / 2 : elementRect.right,
      right: alignVert ? elementRect.right - elementRect.width / 2 : elementRect.left + scrollbarBuffer,
      top: alignVert ? elementRect.bottom : elementRect.bottom - elementRect.height / 2,
      bottom: alignVert ? elementRect.top + scrollbarBuffer : elementRect.bottom - elementRect.height / 2,
    };

    return (
      elementLimit.top - edgeBuffer.vert >= containerRect.top &&
      elementLimit.bottom + edgeBuffer.vert <= containerRect.bottom &&
      elementLimit.right + edgeBuffer.horz <= containerRect.right &&
      elementLimit.left - edgeBuffer.horz >= containerRect.left
    );
  }

  return true;
};

export default isInsideBoundaries;
