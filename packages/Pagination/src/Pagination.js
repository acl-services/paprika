import React from "react";
import PropTypes from "prop-types";
import * as types from "./types";
import ArrowItem from "./components/ArrowItem/ArrowItem";
import CurrentPageItem from "./components/CurrentPageItem/CurrentPageItem";
import ElipsisItem from "./components/EllipsisItem/ElipsisItem";
import PageItem from "./components/PageItem/PageItem";
import * as sc from "./Pagination.styles";

const propTypes = {
  /** The number of current active page */
  currentPage: PropTypes.number.isRequired,

  /** Callback to be executed when current page is changed. */
  onChange: PropTypes.func,

  /** The number of other pages that will be visible around the current/active page (not hidden by elipsis). Can be set to small, medium, or large */
  size: PropTypes.PropTypes.oneOf([types.SMALL, types.MEDIUM, types.LARGE]),

  /** The number of total pages. */
  totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
  onChange: () => {},
  size: "medium",
};

const isCurrentPage = (pageNumber, currentPage) => currentPage === pageNumber;
const isFirstPage = pageNumber => pageNumber === 1;
const isLastPage = (pageNumber, totalPages) => pageNumber === totalPages;

const isNotEllipsed = (pageNumber, left, right, totalPages) =>
  (pageNumber === 2 && left === 3) || (pageNumber === totalPages - 1 && right === totalPages - 2);

const isRenderableSibling = (pageNumber, left, right) => left <= pageNumber && pageNumber <= right;

const renderPageElements = (currentPage, totalPages, size, onChange) => {
  const pagesOnEachSideSize = {
    small: 1,
    medium: 2,
    large: 3,
  };
  const left = currentPage - pagesOnEachSideSize[size];
  const right = currentPage + pagesOnEachSideSize[size];

  const items = [];

  let wasPreviousItemEllipsized = false;

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    if (isCurrentPage(pageNumber, currentPage)) {
      items.push(<CurrentPageItem key={pageNumber} pageNumber={pageNumber} />);
    } else if (
      isFirstPage(pageNumber) ||
      isLastPage(pageNumber, totalPages) ||
      isRenderableSibling(pageNumber, left, right) ||
      isNotEllipsed(pageNumber, left, right)
    ) {
      items.push(
        <PageItem
          key={pageNumber}
          onClick={() => {
            onChange(pageNumber);
          }}
          pageNumber={pageNumber}
        />
      );
      wasPreviousItemEllipsized = false;
    } else if (!wasPreviousItemEllipsized) {
      items.push(<ElipsisItem key={pageNumber} />);
      wasPreviousItemEllipsized = true;
    }
  }

  return items;
};

function Pagination(props) {
  const { currentPage, totalPages, size, onChange, ...moreProps } = props;

  return (
    <sc.Pagination data-pka-anchor="pagination" {...moreProps}>
      <ArrowItem
        isDisabled={currentPage === 1}
        onClick={() => {
          onChange(currentPage - 1);
        }}
        type="Left"
      />

      {renderPageElements(currentPage, totalPages, size, onChange)}
      <ArrowItem
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
Pagination.types = types;

export default Pagination;
