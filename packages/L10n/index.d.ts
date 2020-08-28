export default L10n;

declare function L10n(props: L10nProps): JSX.Element;
interface L10nProps {
  /** Sets the preferred language */
  locale?: string;

  locales?: object;
  /** Children of the L10n */
  children: node;
}
