export default Pagination;

declare function Pagination(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const currentPage: number;
  const onChange: func;
  const size: [ShirtSizes.SMALL, ShirtSizes.MEDIUM, ShirtSizes.LARGE];
  const totalPages: number;
}
