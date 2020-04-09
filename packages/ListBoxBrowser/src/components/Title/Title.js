import React from "react";
import PropTypes from "prop-types";
import { title, flex } from "./Title.styles";
import { getBreadcrumb, getOptionByKey, isRoot } from "../../helpers";
import Breadcrumb from "../Breadcrumb";
import { ListBoxBrowserContext } from "../../ListBoxBrowser";

const propTypes = {
  rootTitle: PropTypes.node.isRequired,
  browserTitle: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  browserKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClickBreadcrumb: PropTypes.func.isRequired,
  isVisibleRoot: PropTypes.bool.isRequired,
};

export default function Title(props) {
  const { rootTitle, browserTitle, data, browserKey, onClickBreadcrumb, isVisibleRoot } = props;

  const handleClick = option => () => {
    onClickBreadcrumb(option);
  };

  const option = React.useMemo(() => getOptionByKey(data, browserKey), [data, browserKey]);
  const breadcrumb = React.useMemo(() => {
    return getBreadcrumb({ data, option });
  }, [data, option]);

  const { hasBreadcrumb } = React.useContext(ListBoxBrowserContext);

  return (
    <div css={flex}>
      {isVisibleRoot ? (
        <div css={title} data-pka-anchor="root-title">
          {rootTitle}
        </div>
      ) : null}

      <div css={title} data-pka-anchor="breadcrumb-title">
        <span>
          {browserTitle}
          {hasBreadcrumb && breadcrumb.length && browserTitle !== "" ? " / " : null}
        </span>
        {hasBreadcrumb ? <Breadcrumb onClick={handleClick} breadcrumb={breadcrumb} /> : null}
        <span>{!isRoot(option.parent) && hasBreadcrumb ? option.attributes.label : null}</span>
      </div>
    </div>
  );
}

Title.propTypes = propTypes;
