export default Pagination;

declare function Pagination(props: PaginationProps): JSX.Element;
interface PaginationProps {
  [x: string]: any;
  /** The number of current active page */
  currentPage: number;
  /** Callback to be executed when current page is changed. */
  onChange?: (...args: any[]) => any;
  /** The number of other pages that will be visible around the current/active page (not hidden by elipsis). Can be set to small, medium, or large */
  size?: Pagination.types.size.SMALL | Pagination.types.size.MEDIUM | Pagination.types.size.LARGE;
  /** The number of total pages. */
  totalPages: number;
}

declare namespace Pagination {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
