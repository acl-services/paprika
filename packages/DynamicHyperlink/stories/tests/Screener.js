import React from "react";
import "../../src/DynamicHyperlink.scss";

const Screener = () => (
  <React.Fragment>
    Hard-coded styles:
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link1">
      Loading...
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link2">
      Link 2<span className="valid">CONTROL</span>
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link3">
      Link 3<span className="invalid">- Access denied</span>
    </a>
    <br />
    <br />
    <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link4">
      Link 4<span className="invalid">- Invalid URL</span>
    </a>
  </React.Fragment>
);

export default Screener;
