import React, { Component } from "react";
import { func, node, string, object } from "prop-types";
import { i18n, defaultLocale } from "./";

class L10n extends Component {
  static propTypes = {
    locale: string,
    children: node.isRequired,
    locales: object,
  };

  static defaultProps = {
    locale: defaultLocale,
    locales: null,
  };

  static childContextTypes = {
    locale: string.isRequired,
    t: func.isRequired,
  };

  getChildContext() {
    const _i18n = i18n(this.props.locales);

    return {
      locale: this.props.locale,
      t: _i18n.getFixedT(this.props.locale),
    };
  }

  render() {
    // TODO: use a React.fragment here once React has been upgraded
    if (this.props.children.length) return <span>{this.props.children}</span>;
    return this.props.children;
  }
}

export default L10n;
