import React from "react";
import PropTypes from "prop-types";

const responseShape = {
  heading: PropTypes.node.isRequired,
  body: PropTypes.node,
};

const propTypes = {
  responses: PropTypes.arrayOf(PropTypes.shape(responseShape)),
};

const defaultProps = {
  responses: [],
};

const Response = ({ heading, body }) => {
  return (
    <div>
      <div>{heading}</div>
      <div>{body || "None"}</div>
    </div>
  );
};

Response.propTypes = responseShape;
Response.defaultProps = {
  body: null,
};

const Responses = ({ responses }) => {
  return responses.map(({ heading, body }) => <Response heading={heading} body={body} />);
};

Responses.displayName = "ResponsesAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;

export default Responses;
