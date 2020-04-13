import React from "react";
import PropTypes from "prop-types";
import { title, flex, crumb } from "./Title.styles";
import { getBreadcrumb, getOptionByKey, isRoot } from "../../helpers";
import Breadcrumb from "../Breadcrumb";
import { ListBoxBrowserContext } from "../../ListBoxBrowser";

const propTypes = {
  rootTitle: PropTypes.node.isRequired,
  browserTitle: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.object), // eslint-disable-line
  browserKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClickBreadcrumb: PropTypes.func.isRequired,
  hasLeftColumn: PropTypes.bool.isRequired,
};

export default function Title(props) {
  const { rootTitle, browserTitle, data, browserKey, onClickBreadcrumb, hasLeftColumn } = props;

  const handleClick = option => () => {
    onClickBreadcrumb(option);
  };

  const option = React.useMemo(() => getOptionByKey(data, browserKey), [data, browserKey]);
  const breadcrumb = React.useMemo(() => {
    return getBreadcrumb({ data, option });
  }, [data, option]);

  const { hasBreadcrumb } = React.useContext(ListBoxBrowserContext);
  const hasBrowserTitle = browserTitle !== "";

  return (
    <div css={flex} hasLeftColumn={hasLeftColumn}>
      {hasLeftColumn && (
        <div css={title} data-pka-anchor="root-title" title={rootTitle}>
          {rootTitle}
        </div>
      )}
      <div css={title} data-pka-anchor="breadcrumb-title">
        {hasBreadcrumb ? (
          <>
            <span data-pka-anchor="breadcrumb-crumb" css={crumb} title={browserTitle}>
              {browserTitle}
            </span>
            <Breadcrumb onClick={handleClick} hasBrowserTitle={hasBrowserTitle} breadcrumb={breadcrumb} />
            {!isRoot(option.parent) && (
              <span data-pka-anchor="breadcrumb-crumb" css={crumb} title={option.attributes.label}>
                {(breadcrumb.length > 1 || hasBrowserTitle) && " / "}
                {option.attributes.label}
              </span>
            )}
          </>
        ) : (
          browserTitle
        )}
      </div>
    </div>
  );
}

Title.propTypes = propTypes;
