import React from "react";
import ReactDOM from "react-dom";

const LockBodyScroll = () =>
  ReactDOM.createPortal(<style type="text/css">{`body { overflow: hidden; }`}</style>, document.head);

export default LockBodyScroll;
