import React from "react";
import PropTypes from "prop-types";
// import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import ArrowItem from "./components/ArrowItem/ArrowItem";
import CurrentPageItem from "./components/CurrentPageItem/CurrentPageItem";
import ElipsisItem from "./components/EllipsisItem/ElipsisItem";
import PageItem from "./components/PageItem/PageItem";
import Divider from "./components/Divider";
import * as sc from "./Pagination.styles";

const propTypes = {
  /** The number of current active page */
  currentPage: PropTypes.number.isRequired,
  /** The number of other pages that will be visible around the current/active page (not hidden by elipsis). */
  pagesOnEachSide: PropTypes.number,
  /** Callback to be executed when current page is changed. */
  onClick: PropTypes.func.isRequired,
  /** The number of total pages. */
  totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
  pagesOnEachSide: 2,
};

function Pagination(props) {
  const { currentPage, totalPages, pagesOnEachSide, onClick, ...moreProps } = props;

  const isCurrentPage = pageNumber => currentPage === pageNumber;
  const isFirstPage = pageNumber => pageNumber === 1;
  const isLastPage = pageNumber => pageNumber === totalPages;

  const isNotEllipsed = (pageNumber, left, right) =>
    (pageNumber === 2 && left === 3) || (pageNumber === totalPages - 1 && right === totalPages - 2);

  const isRenderableSibling = (pageNumber, left, right) => left <= pageNumber && pageNumber <= right;

  const renderPageElements = () => {
    const delta = pagesOnEachSide;
    const left = currentPage - delta;
    const right = currentPage + delta;

    const items = [];

    let wasPreviousItemEllipsized = false;

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      if (isCurrentPage(pageNumber)) {
        items.push([<CurrentPageItem key={pageNumber} pageNumber={pageNumber} />, <Divider />]);
      } else if (
        isFirstPage(pageNumber) ||
        isLastPage(pageNumber) ||
        isRenderableSibling(pageNumber, left, right) ||
        isNotEllipsed(pageNumber, left, right)
      ) {
        items.push([
          <PageItem
            key={pageNumber}
            onClick={() => {
              onClick(pageNumber);
            }}
            pageNumber={pageNumber}
          />,
          <Divider />,
        ]);
        wasPreviousItemEllipsized = false;
      } else if (!wasPreviousItemEllipsized) {
        items.push([<ElipsisItem key={pageNumber} />, <Divider />]);
        wasPreviousItemEllipsized = true;
      }
    }

    return items;
  };

  return (
    <sc.Pagination data-pka-anchor="pagination" {...moreProps}>
      <ArrowItem
        isDisabled={currentPage === 1}
        onClick={() => {
          onClick(currentPage - 1);
        }}
        type="Left"
      />
      <Divider />
      {renderPageElements()}
      <ArrowItem
        isDisabled={currentPage === totalPages}
        onClick={() => {
          onClick(currentPage + 1);
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
