import React from "react";
import CKEditor from "ckeditor4-react";

export default function Tab4Content() {
  const contents =
    '<p>Here is a dynamic hyperlink within a ckEditor: <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control">https://www.wegalvanize.com/</a></p>';

  const ckeditorStyles =
    '@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap"); body {font-family: "Lato"; font-size: 16px; color: #3f3d3c;} a { cursor: pointer; } ';

  const dynamicHyperlinkStyles =
    "a[data-dynamic-hyperlink] { background-color: white; border-radius: 4px; box-shadow: 0 0 2px #3f3d3c; color: #0063c5; font-size: 14px; padding: 2px 2px 2px 4px; text-decoration: none; } a[data-dynamic-hyperlink]:hover { text-decoration: underline; } a[data-dynamic-hyperlink] span { border-radius: 4px; font-size: 13px; font-weight: bold; margin-left: 4px; } a[data-dynamic-hyperlink] span.dynamic-hyperlink--valid { background-color: #cce5fd; color: #0063c5; padding: 1px 8px 0; text-transform: uppercase; } a[data-dynamic-hyperlink] span.dynamic-hyperlink--invalid { color: #717171; padding-right: 4px;}";

  return (
    <>
      <p>
        The transformer will find and replace links within a CKEditor iframe, but the custom style must be passed into
        the CKEditor config.
      </p>
      <CKEditor
        config={{
          extraAllowedContent: "a[*]",
          contentsCss: `${ckeditorStyles} ${dynamicHyperlinkStyles}`,
        }}
        data={contents}
      />
    </>
  );
}
