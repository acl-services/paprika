import React from "react";

const useOffsetScroll = offsetY => {
  const [offsetScroll, setOffsetScroll] = React.useState(offsetY);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top <= offsetY) {
      setOffsetScroll(offsetY - top);
    } else {
      setOffsetScroll(0);
    }
  };

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return offsetScroll;
};

export default useOffsetScroll;
