export default DynamicHyperlinkTransformer;

/** Renders nothing: replaces the content of every [data-dynamic-hyperlink] anchor, in the page and in each CKEditor instance. */
declare function DynamicHyperlinkTransformer(props: DynamicHyperlinkTransformerProps): null;
interface DynamicHyperlinkTransformerProps {
  /** Fetches the data for one dynamic hyperlink, given its original url and the value of its data-dynamic-hyperlink attribute. The response is read as JSON and may hold `error`, `name` and `term`. */
  onFetch: (originalLinkUrl: string, attributeValue: string) => Promise<Response> | void;
}
