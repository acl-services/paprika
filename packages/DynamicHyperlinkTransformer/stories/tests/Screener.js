import React from "react";
import "../../src/DynamicHyperlinkTransformer.scss";

const Screener = () => (
  <React.Fragment>
    Hard-coded styles:
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control" data-dynamic-hyperlink--processed="true">
      Loading...
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control" data-dynamic-hyperlink--processed="true">
      <span className="dynamic-hyperlink--label">My really long control name</span>
      <span className="dynamic-hyperlink--valid">Control</span>
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="narrative" data-dynamic-hyperlink--processed="true">
      <span className="dynamic-hyperlink--label">https://www.wegalvanize.com/</span>
      <span className="dynamic-hyperlink--invalid">- Invalid URL</span>
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="risk" data-dynamic-hyperlink--processed="true">
      <span className="dynamic-hyperlink--label">https://www.wegalvanize.com/</span>
      <span className="dynamic-hyperlink--invalid">- Access denied</span>
    </a>
  </React.Fragment>
);

export default Screener;
