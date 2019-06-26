import React from "react";
import debounce from "lodash.debounce";

const useOffsetScrollFooter = (height, ref = null) => {
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

    if (ref) {
      ref.addEventListener("scroll", handleScrolling, false);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScrolling, false);
      }
    };
  }, [handleOffset, ref]);

  return { offsetY, opacity };
};

export default useOffsetScrollFooter;
