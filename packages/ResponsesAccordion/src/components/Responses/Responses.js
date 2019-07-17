import React from "react";
import PropTypes from "prop-types";
import responsesStyles from "./Responses.styles";

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
    <>
      <dt>{heading}</dt>
      <dd>{body || <em>None</em>}</dd>
    </>
  );
};

Response.propTypes = responseShape;
Response.defaultProps = {
  body: null,
};

const Responses = ({ responses }) => {
  return (
    <dl css={responsesStyles}>
      {responses.map(({ heading, body }) => (
        <Response heading={heading} body={body} />
      ))}
    </dl>
  );
};

Responses.displayName = "ResponsesAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;

export default Responses;
