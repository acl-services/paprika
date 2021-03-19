import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as sc from "./List.styles";

export default function List(props) {
  const {
    children,
    height,
    hasOptions,
    optionsOffset, //eslint-disable-line
    onReachedOffset, // eslint-disable-line
  } = props;
  const [{ noResultsFound, refListBox, options }] = useListBox();
  const refOptionHeight = React.useRef(null);
  const refPage = React.useRef(0);

  if (refListBox.current && !refOptionHeight.current) {
    refOptionHeight.current = refListBox.current.querySelector("li").getBoundingClientRect().height;
    console.log(refOptionHeight.current);
  }

  function handleScroll(event) {
    // this assumes all items on the listbox have same height and should work for most of our cases
    const scrollIndexPosition = Math.ceil(event.target.scrollTop / refOptionHeight.current);
    console.log("scrollIndexPosition", scrollIndexPosition);
    // console.log("scrollTop", event.target.scrollTop);
    // console.log("options.length", Object.keys(options).length);
    // console.log("optionsOffset", optionsOffset);
    console.log("reach bottom", scrollIndexPosition + optionsOffset);
    if (scrollIndexPosition + optionsOffset > options.length) {
      debugger;
      // const currentPage = Math.floor(visibleRowStopIndex / pageSize);
      // const nextPage = currentPage + 1;
      // onReachedOffset({ currentPage, nextPage });
      // onReachedOffset()
    }
  }

  const handleScrollProps =
    optionsOffset && onReachedOffset
      ? {
          onScroll: handleScroll,
        }
      : {};

  return (
    <sc.List
      data-pka-anchor="styled-list" // TODO: rename to "list-box.list"
      hasOptions={hasOptions}
      height={height}
      noResultsFound={noResultsFound}
      ref={refListBox}
      {...handleScrollProps}
    >
      {children}
    </sc.List>
  );
}

List.propTypes = {
  /** Body content of the list. */
  children: PropTypes.node.isRequired,

  hasOptions: PropTypes.bool.isRequired,

  /** Sets the height for the list */
  height: PropTypes.number.isRequired,
};
