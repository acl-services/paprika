import React from "react";
import PropTypes from "prop-types";
import shirtSize from "@paprika/helpers";
import ArrowItem from "./components/ArrowItem/ArrowItem";
// import CurrentPageItem from "./components/CurrentPageItem/CurrentPageItem";
// import ElipsisItem from "./components/EllipsisItem/ElipsisItem";
// import PageItem from "./components/PageItem/PageItem";
import * as sc from "./Pagination.styles";

const propTypes = {
  /** Additional classes to be included on the root element. */
  className: PropTypes.string,
  /** The number of current active page */
  currentPage: PropTypes.number.isRequired,
  /** Length of the pagination (the number of other pages will be displayed around active page). */
  length: shirtSize,
  /** Callback to be executed when current page is changed. */
  onClickPage: PropTypes.func.isRequired,
  /** The number of total pages. */
  totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
  className: null,
  length: "medium",
};

function Pagination(props) {
  const { currentPage, totalPages, length, onClickPage, className, ...moreProps } = props;

  //   isCurrentPage = pageNumber => this.props.currentPage === pageNumber;
  //   isFirstPage = pageNumber => pageNumber === 1;
  //   isLastPage = pageNumber => pageNumber === this.props.totalPages;

  //   isNotEllipsed = (pageNumber, left, right) =>
  //     (pageNumber === 2 && left === 3) ||
  //     (pageNumber === this.props.totalPages - 1 && right === this.props.totalPages - 2);

  //   isRenderableSibling = (pageNumber, left, right) => left <= pageNumber && pageNumber <= right;

  //   renderPageElements = () => {
  //     const { currentPage, onClickPage, totalPages } = this.props;

  //     const delta = pagesOnEachSide[this.props.length];
  //     const left = currentPage - delta;
  //     const right = currentPage + delta;

  //     const items = [];

  //     let wasPreviousItemEllipsized = false;

  //     for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
  //       if (this.isCurrentPage(pageNumber)) {
  //         items.push(<CurrentPageItem key={pageNumber} pageNumber={pageNumber} />);
  //       } else if (
  //         this.isFirstPage(pageNumber) ||
  //         this.isLastPage(pageNumber) ||
  //         this.isRenderableSibling(pageNumber, left, right) ||
  //         this.isNotEllipsed(pageNumber, left, right)
  //       ) {
  //         items.push(
  //           <PageItem
  //             key={pageNumber}
  //             onClick={() => {
  //               onClickPage(pageNumber);
  //             }}
  //             pageNumber={pageNumber}
  //           />
  //         );
  //         wasPreviousItemEllipsized = false;
  //       } else if (!wasPreviousItemEllipsized) {
  //         items.push(<EllipsisItem key={pageNumber} />);
  //         wasPreviousItemEllipsized = true;
  //       }
  //     }

  //     return items;
  //   };

  return (
    <sc.Pagination data-pka-anchor="pagination" {...moreProps}>
      <ArrowItem
        isDisabled={currentPage === 1}
        onClick={() => {
          onClickPage(currentPage - 1);
        }}
        type="Left"
      />
      {/* {this.renderPageElements()} */}
      <ArrowItem
        isDisabled={currentPage === totalPages}
        onClick={() => {
          onClickPage(currentPage + 1);
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
