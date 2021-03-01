import React from "react";

const getWindowTop = () => window.pageYOffset || document.documentElement.scrollTop;

const useOffsetScroll = offsetY => {
  const [offsetScroll, setOffsetScroll] = React.useState(offsetY - getWindowTop());

  React.useLayoutEffect(() => {
    function handleScroll() {
      if (getWindowTop() <= offsetY) {
        setOffsetScroll(offsetY - getWindowTop());
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
