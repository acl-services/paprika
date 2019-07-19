import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import responsesStyles from "./Responses.styles";

const idType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired;

const responseShape = {
  body: PropTypes.node,
  heading: PropTypes.node.isRequired,
};

const propTypes = {
  responses: PropTypes.arrayOf(PropTypes.shape({ ...responseShape, id: idType })),
};

const defaultProps = {
  responses: [],
};

const Response = ({ heading, body }) => {
  const I18n = useI18n();

  return (
    <>
      <dt>{heading}</dt>
      <dd>{body || <em>{I18n.t("progressAccordion.no_response")}</em>}</dd>
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
      {responses.map(({ id, heading, body }) => (
        <Response heading={heading} body={body} key={id} />
      ))}
    </dl>
  );
};

Responses.displayName = "ProgressAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;

export default Responses;
