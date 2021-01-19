import React from "react";
import CKEditor from "ckeditor4-react";

export default function Tab4Content() {
  const iframeContents =
    '<p>Here is a dynamic hyperlink within an iFrame: <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control">https://www.wegalvanize.com/</a></p><p>Note that the style doesnt look right, but that is fine as it is injected in Projects correctly.';

  return <CKEditor config={{ extraAllowedContent: "a(*)[*]{*}" }} data={iframeContents} />;
}
