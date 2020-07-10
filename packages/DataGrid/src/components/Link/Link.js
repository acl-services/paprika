import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Link.styles";

// https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
// https://stackoverflow.com/questions/2405771/is-right-click-a-javascript-event
// https://stackoverflow.com/questions/7914684/trigger-right-click-using-pure-javascript
function href(url, target = "_blank") {
  Object.assign(document.createElement("a"), {
    target,
    href: url,
  }).click();
}

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  target: "_top",
  onClick: null,
};

export default function Link(props) {
  function handleClickLink(event) {
    props.onClick(event);
  }

  function handleKeyUpLink(event) {
    if (event.key === "Enter" || event.key === " ") {
      props.onClick(event);
    }
  }

  let linkProps = { ...props };
  if (typeof props.onClick === "function") {
    linkProps = { ...props, onKeyUp: handleKeyUpLink, onClick: handleClickLink, tabIndex: "0", role: "button" };
  }

  return (
    <sc.Link {...linkProps} rel="noreferrer noopener">
      {props.children}
    </sc.Link>
  );
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
Link.href = href;
