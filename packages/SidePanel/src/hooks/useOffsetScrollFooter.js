import React from "react";
import debounce from "lodash.debounce";

const useOffsetScrollFooter = (height, ref) => {
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

    const refElement = ref.current;

    if (ref) {
      ref.addEventListener("scroll", handleScrolling, false);
    }

    return () => {
      refElement.removeEventListener("scroll", handleScrolling, false);
    };
  }, [handleOffset, ref]);

  return { offsetY, opacity };
};

export default useOffsetScrollFooter;
