import React from "react";
import PropTypes from "prop-types";
import ArrowItem from "./components/ArrowItem/ArrowItem";
import CurrentPageItem from "./components/CurrentPageItem/CurrentPageItem";
import ElipsisItem from "./components/EllipsisItem/ElipsisItem";
import PageItem from "./components/PageItem/PageItem";
import Divider from "./components/Divider";
import * as sc from "./Pagination.styles";

const propTypes = {
  /* Description of the Left ArrowItem for assistive technology to override the default */
  arrowItemLeftA11yText: PropTypes.string,

  /* Description of the Right ArrowItem for assistive technology to override the default */
  arrowitemRightA11yText: PropTypes.string,

  /** The number of current active page */
  currentPage: PropTypes.number.isRequired,

  /* Description of the PageItem for assistive technology to override the default */
  pageItemA11yText: PropTypes.string,

  /* Description of the CurrentPageItem for assistive technology to override the default */
  currentPageItemA11yText: PropTypes.string,

  /** Value for role attribute of the CurrentPageItem to override the default */
  currentPageItemRole: PropTypes.string,

  /* Description of the ElipsesItem for assistive technology to override the default */
  elipsisItemA11yText: PropTypes.string,

  /** Value for role attribute of the ElipsisItem to override the default */
  elipsisItemRole: PropTypes.string,

  /** The number of other pages that will be visible around the current/active page (not hidden by elipsis). Can be set to small, medium, or large */
  pagesOnEachSide: PropTypes.number,

  /** Callback to be executed when current page is changed. */
  onChange: PropTypes.func.isRequired,

  /** The number of total pages. */
  totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
  pagesOnEachSide: "medium",
  arrowItemLeftA11yText: "left",
  arrowitemRightA11yText: "right",
  pageItemA11yText: "page",
  currentPageItemA11yText: "Current Page",
  currentPageItemRole: "Button",
  elipsisItemA11yText: "elipsis",
  elipsisItemRole: "button",
};

const isCurrentPage = (pageNumber, currentPage) => currentPage === pageNumber;
const isFirstPage = pageNumber => pageNumber === 1;
const isLastPage = (pageNumber, totalPages) => pageNumber === totalPages;

const isNotEllipsed = (pageNumber, left, right, totalPages) =>
  (pageNumber === 2 && left === 3) || (pageNumber === totalPages - 1 && right === totalPages - 2);

const isRenderableSibling = (pageNumber, left, right) => left <= pageNumber && pageNumber <= right;

const renderPageElements = (
  currentPage,
  totalPages,
  pagesOnEachSide,
  onChange,
  currentPageItemRole,
  pageItemA11yText,
  currentPageItemA11yText,
  elipsisItemA11yText,
  elipsisItemRole
) => {
  const pagesOnEachSideSize = {
    small: 1,
    medium: 2,
    large: 3,
  };
  const left = currentPage - pagesOnEachSideSize[pagesOnEachSide];
  const right = currentPage + pagesOnEachSideSize[pagesOnEachSide];

  const items = [];

  let wasPreviousItemEllipsized = false;

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    if (isCurrentPage(pageNumber, currentPage)) {
      items.push([
        <CurrentPageItem
          key={pageNumber}
          pageNumber={pageNumber}
          role={currentPageItemRole}
          a11yText={currentPageItemA11yText}
        />,
        <Divider />,
      ]);
    } else if (
      isFirstPage(pageNumber) ||
      isLastPage(pageNumber, totalPages) ||
      isRenderableSibling(pageNumber, left, right) ||
      isNotEllipsed(pageNumber, left, right)
    ) {
      items.push([
        <PageItem
          a11yText={pageItemA11yText}
          key={pageNumber}
          onClick={() => {
            onChange(pageNumber);
          }}
          pageNumber={pageNumber}
        />,
        <Divider />,
      ]);
      wasPreviousItemEllipsized = false;
    } else if (!wasPreviousItemEllipsized) {
      items.push([<ElipsisItem a11yText={elipsisItemA11yText} role={elipsisItemRole} key={pageNumber} />, <Divider />]);
      wasPreviousItemEllipsized = true;
    }
  }

  return items;
};

function Pagination(props) {
  const {
    currentPage,
    totalPages,
    pagesOnEachSide,
    onChange,
    currentPageItemRole,
    pageItemA11yText,
    currentPageItemA11yText,
    elipsisItemA11yText,
    elipsisItemRole,
    arrowItemLeftA11yText,
    arrowitemRightA11yText,
    ...moreProps
  } = props;

  return (
    <sc.Pagination data-pka-anchor="pagination" {...moreProps}>
      <ArrowItem
        a11yText={arrowItemLeftA11yText}
        isDisabled={currentPage === 1}
        onClick={() => {
          onChange(currentPage - 1);
        }}
        type="Left"
      />
      <Divider />
      {renderPageElements(
        currentPage,
        totalPages,
        pagesOnEachSide,
        onChange,
        currentPageItemRole,
        pageItemA11yText,
        currentPageItemA11yText
      )}
      <ArrowItem
        a11yText={arrowitemRightA11yText}
        isDisabled={currentPage === totalPages}
        onClick={() => {
          onChange(currentPage + 1);
        }}
        type="Right"
      />
    </sc.Pagination>
  );
}

Pagination.displayName = "Pagination";
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
