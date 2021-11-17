import React from "react";

const useOffsetScroll = offsetY => {
  const getWindowTop = () => window.pageYOffset || document.documentElement.scrollTop;

  const getOffsetYBasedOnScrollPosition = React.useCallback(() => {
    if (getWindowTop() <= offsetY) {
      return offsetY - getWindowTop();
    }
    return 0;
  }, [offsetY]);

  const [offsetScroll, setOffsetScroll] = React.useState(getOffsetYBasedOnScrollPosition());

  React.useLayoutEffect(() => {
    setOffsetScroll(getOffsetYBasedOnScrollPosition());
    const handleScroll = () => setOffsetScroll(getOffsetYBasedOnScrollPosition());
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getOffsetYBasedOnScrollPosition]);

  return offsetScroll;
};

export default useOffsetScroll;
