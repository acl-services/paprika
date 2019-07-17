import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
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
  const I18n = useI18n();

  return (
    <>
      <dt>{heading}</dt>
      <dd>{body || <em>{I18n.t("responsesAccordion.no_response")}</em>}</dd>
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
        <Response heading={heading} body={body} key={heading} />
      ))}
    </dl>
  );
};

Responses.displayName = "ResponsesAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;

export default Responses;
