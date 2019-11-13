import React from "react";
import ReactDOM from "react-dom";

function LockBodyScroll() {
  return ReactDOM.createPortal(<style type="text/css">{`body { overflow: hidden !important; }`}</style>, document.head);
}

export default LockBodyScroll;
