import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "intersection-observer"; // ie 11 polyfill

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Block = props => {
  const { children, ...moreProps } = props;

  const [inViewRef, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const ref = React.useRef();

  const setRefs = React.useCallback(
    node => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  const viewportHeightWhenRendered = ref.current && Math.round(ref.current.getBoundingClientRect().height);

  const styleProp =
    viewportHeightWhenRendered && !inView
      ? { style: { opacity: "0", height: `${viewportHeightWhenRendered}px` } }
      : { style: { opacity: 1 } };

  return (
    <div className="viewport-block" ref={setRefs} {...styleProp} {...moreProps}>
      {inView ? children : null}
    </div>
  );
};

Block.propTypes = propTypes;

export default Block;
