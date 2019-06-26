import React from "react";
import debounce from "lodash.debounce";

const useFooterOffset = (height, ref = null, isSticky) => {
  const _refElement = React.useRef(ref);
  const [offsetY, setOffsetY] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);

  const handleOffset = debounce(() => {
    const top = ref.current.scrollTop;

    setOpacity(1);
    setOffsetY(-top);
  }, 350);

  React.useEffect(() => {
    function handleScrolling() {
      setOpacity(0);
      handleOffset();
    }

    if (_refElement.current) {
      _refElement.current.addEventListener("scroll", handleScrolling, false);
    }

    return () => {
      if (_refElement.current) {
        _refElement.current.removeEventListener("scroll", handleScrolling, false);
      }
    };
  }, [handleOffset, ref]);

  let style = {};
  if (isSticky) {
    style = { bottom: `${offsetY}px`, opacity };
  }

  return { style, isSticky };
};

export default useFooterOffset;
