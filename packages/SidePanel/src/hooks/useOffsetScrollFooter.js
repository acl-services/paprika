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

  const handleScrolling = () => {
    setOpacity(0);
    handleOffset();
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScrolling, false);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScrolling, false);
      }
    };
  }, [ref.current]);

  return { offsetY, opacity };
};

export default useOffsetScrollFooter;
