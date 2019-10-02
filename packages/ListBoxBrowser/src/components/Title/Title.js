import React from "react";
import PropTypes from "prop-types";
import { title, flex } from "./Title.styles";
import { getBreadcrumb, getOptionByKey } from "../../helpers";
import Breadcrumb from "../Breadcrumb";

const propTypes = {
  rootTitle: PropTypes.string.isRequired,
  browserTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  browserKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClickBreadcrumb: PropTypes.func.isRequired,
};
const defaultProps = {};

export default function Title(props) {
  const { rootTitle, browserTitle, data, browserKey, onClickBreadcrumb } = props;

  const handleClick = option => () => {
    onClickBreadcrumb(option);
  };

  const option = React.useMemo(() => getOptionByKey(data, browserKey), [data, browserKey]);
  const breadcrumb = React.useMemo(() => {
    return getBreadcrumb({ data, option });
  }, [data, option]);

  return (
    <div css={flex}>
      <div css={title}>{rootTitle}</div>
      <div css={title}>
        <span>
          {browserTitle}
          {breadcrumb.length ? " / " : null}
        </span>
        {<Breadcrumb onClick={handleClick} breadcrumb={breadcrumb} />}
        <span>{option.parent !== "root" ? option.attributes.label : null}</span>
      </div>
    </div>
  );
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
