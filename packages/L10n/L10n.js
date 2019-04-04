import React, { useMemo } from "react";
import { node, string } from "prop-types";
import { i18n } from "./i18n";
import Locales from "./locales";

export const L10nContext = React.createContext();

const propTypes = {
  locale: string,
  children: node.isRequired,
};

const defaultProps = {
  locale: "en",
};

export default function L10n(props) {
  const value = useMemo(() => {
    const _i18n = i18n(Locales);
    return {
      locale: props.locale,
      t: _i18n.getFixedT(props.locale),
    };
  }, [props.locale, Locales]);
  return <L10nContext.Provider value={value}>{props.children}</L10nContext.Provider>;
}

L10n.propTypes = propTypes;
L10n.defaultProps = defaultProps;
