import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { extractChildren } from "@paprika/helpers";
import Link from "./components/Link";
import ExpandButton from "./components/ExpandButton";
import IsDarkContext from "./context";
import { MAXIMUM_NUM_OF_LEVEL } from "./constants";

import * as sc from "./Breadcrumbs.styles";

function Breadcrumbs(props) {
  const { children, isDark, isAutoCollapsed, ...moreProps } = props;
  const I18n = useI18n();

  const linkChildren = [extractChildren(children, ["Breadcrumbs.Link"])["Breadcrumbs.Link"]].flat();
  const hasOnlyOneChild = linkChildren.length === 1;
  const shouldShowExpandButton = isAutoCollapsed && linkChildren.length > MAXIMUM_NUM_OF_LEVEL;

  const [isCollapsed, setIsCollapsed] = React.useState(shouldShowExpandButton);

  React.useLayoutEffect(() => {
    setIsCollapsed(shouldShowExpandButton);
  }, [shouldShowExpandButton]);

  function handleExpand() {
    setIsCollapsed(false);
  }

  return (
    <IsDarkContext.Provider value={isDark}>
      <sc.Nav aria-label={I18n.t("breadcrumbs.aria_label")} isDark={isDark} {...moreProps}>
        <sc.List isCollapsed={isCollapsed}>
          {linkChildren.map((child, index) => {
            if (shouldShowExpandButton && index === 0) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>
                  {child}
                  <ExpandButton onClick={handleExpand} isHidden={!isCollapsed} />
                </React.Fragment>
              );
            }
            // eslint-disable-next-line react/no-array-index-key
            return React.cloneElement(child, { hasOnlyOneChild, key: index });
          })}
        </sc.List>
      </sc.Nav>
    </IsDarkContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** If the breadcrumbs will be rendered on a dark background and will use inverted colours. */
  isDark: PropTypes.bool,

  /** If the breadcrumbs will be collapsed when it has more than 3 links. */
  isAutoCollapsed: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isDark: false,
  isAutoCollapsed: true,
};

Breadcrumbs.displayName = "Breadcrumbs";
Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

Breadcrumbs.Link = Link;

export default Breadcrumbs;
