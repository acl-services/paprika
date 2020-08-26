export default L10n;

declare function L10n(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const locale: string;
  const locales: object;
  const children: node;
}
