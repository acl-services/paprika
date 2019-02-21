import React, { Component } from "react";
import PropTypes from "prop-types";

class Translate extends Component {
  static propTypes = {
    k: PropTypes.string.isRequired,
    options: PropTypes.object,
  };

  static defaultProps = {
    options: null,
  };

  static contextTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { k, options } = this.props;
    const { t } = this.context;
    const str = t ? t(k, options) : k.split(".").reverse()[0];

    // TODO: use <React.fragment> once we update to React 16
    return <span data-qa-anchor="aclui-l10n__text">{str}</span>;
  }
}

export default Translate;
