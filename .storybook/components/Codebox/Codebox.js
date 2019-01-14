import React, { Component } from "react";
import { string } from "prop-types";
import RawButton from "acl-ui/components/RawButton/RawButton";
import Icon from "acl-ui/components/Icon/Icon";

import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { dark } from "react-syntax-highlighter/styles/prism";

import "./Codebox.scss";

const componentMap = new Map();

export default class Codebox extends Component {
  static propTypes = {
    title: string,
    componentName: string,
    filename: string,
  };

  state = {
    isSourceCodeDisplayed: false,
    component: null,
    source: "",
  };

  componentDidMount() {
    this.handleImports();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.filename !== this.props.filename) {
      this.handleImports();
    }
  }

  handleToggleSourceCode = () => {
    this.setState(state => ({ isSourceCodeDisplayed: !state.isSourceCodeDisplayed }));
  };

  handleImports = () => {
    const { componentName, filename } = this.props;
    const mapName = `${componentName}_${filename}`;

    if (componentMap.has(mapName)) {
      const example = componentMap.get(mapName);
      this.setState({
        component: example.instance,
        source: example.source,
      });
      return;
    }

    /* eslint-disable global-require, import/no-dynamic-require */
    const Example = require(`acl-ui/components/${componentName}/stories/examples/${filename}.example`).default;
    const source = require(`!!raw-loader!acl-ui/components/${componentName}/stories/examples/${filename}.example`);
    /* eslint-enable global-require, import/no-dynamic-require */

    const instance = <Example />;
    componentMap.set(mapName, { instance, source });

    this.setState({
      component: instance,
      source,
    });
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h5>{title}</h5>
        <div className="spicymark-codebox">
          <div className="spicymark-codebox__title">
            <div className="spicymark-codebox__title-name">Codebox</div>
            <div className="spicymark-codebox__title-actions">
              <RawButton onClick={this.handleToggleSourceCode}>
                <Icon color="#8a8a8a" type="arrow-expand-x" />
              </RawButton>
              &nbsp; / &nbsp;
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                github
              </a>
            </div>
          </div>
          <div className="spicymark-codebox__component">{this.state.component ? this.state.component : null}</div>
          {this.state.isSourceCodeDisplayed ? (
            <div className="spicymark-codebox__sourcecode">
              <SyntaxHighlighter language="javascript" showLineNumbers style={dark}>
                {this.state.source}
              </SyntaxHighlighter>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
