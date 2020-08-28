export default Pagination;

declare function Pagination(props: PaginationProps): JSX.Element;
interface PaginationProps {
  /** The number of current active page */
  currentPage: number;
  /** Callback to be executed when current page is changed. */
  onChange?: func;
  /** The number of other pages that will be visible around the current/active page (not hidden by elipsis). Can be set to small, medium, or large */
  size?: ShirtSizes.SMALL | ShirtSizes.MEDIUM | ShirtSizes.LARGE;
  /** The number of total pages. */
  totalPages: number;
}
