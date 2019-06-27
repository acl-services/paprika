import React from "react";

const useOffsetScroll = offsetY => {
  const [offsetScroll, setOffsetScroll] = React.useState(offsetY);

  React.useLayoutEffect(() => {
    function handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top <= offsetY) {
        setOffsetScroll(offsetY - top);
      } else {
        setOffsetScroll(0);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetY]);

  return offsetScroll;
};

export default useOffsetScroll;
