export default ProgressAccordion;

declare function ProgressAccordion(props: ProgressAccordionProps): JSX.Element;
interface ProgressAccordionProps {
  /** A11y text for assistive technologies to descibe the semantic list. */
  a11yText?: string;

  activeIndex?: number;
  /** Optional status text to be displayed with the active list item. */
  activeStatus?: React.ReactNode;
  /** List items (must be of type <ProgressAccordion.Item>. */
  children?: React.ReactNode;
}
