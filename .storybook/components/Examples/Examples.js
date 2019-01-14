import React, { Component } from "react";
import { string } from "prop-types";
import Takeover from "acl-ui/components/Takeover/Takeover";
import Header from "acl-ui/components/Takeover/Header/Header";
import { Title } from "acl-ui/components/Takeover/Header";
import Body from "acl-ui/components/Takeover/Body/Body";
import Button from "acl-ui/components/Button/Button";
import Gap from "storybook/stories/components/Gap/Gap";
import Codebox from "storybook/stories/components/Codebox/Codebox";
import Sidebar from "./Sidebar/Sidebar";
import "./Examples.scss";

export default class Examples extends Component {
  static propTypes = {
    componentName: string.isRequired,
  };

  constructor(props) {
    super(props);

    /* eslint-disable global-require, import/no-dynamic-require */
    const manifest = require(`acl-ui/components/${props.componentName}/stories/examples/manifest.js`).default;
    /* eslint-enable global-require, import/no-dynamic-require */

    this.state = {
      isTakeoverOpen: false,
      manifest,
      activeIndex: 0,
    };
  }

  handleTakoverToggle = () => {
    this.setState(({ isTakeoverOpen }) => ({ isTakeoverOpen: !isTakeoverOpen }));
  };

  handleExampleSelection = exampleName => {
    const activeIndex = this.state.manifest.findIndex(item => item.name === exampleName);
    this.setState({ activeIndex });
  };

  renderExamples() {
    const { componentName } = this.props;
    if (this.state.manifest && this.state.isTakeoverOpen) {
      return (
        <div className="spicy-examples">
          <Sidebar examples={this.state.manifest} onExampleSelection={this.handleExampleSelection} />
          <Gap isHorizontal space={32} />
          <div className="spicy-examples-example">
            <Codebox componentName={componentName} filename={this.state.manifest[this.state.activeIndex].name} />
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        <Takeover
          ariaLabel="Examples"
          show={this.state.isTakeoverOpen}
          onClose={this.handleTakoverToggle}
          onEscKeyUp={this.handleTakoverToggle}
        >
          <Header zIndex={10} title={<Title>Examples</Title>} onClose={this.handleTakoverToggle} />
          <Body>{this.renderExamples()}</Body>
        </Takeover>
        <div>
          <Gap space={16} />
          <p>
            More examples can be found in our example gallery: &nbsp;
            <Button size="small" type="primary" onClick={this.handleTakoverToggle}>
              Examples for {this.props.componentName}
            </Button>
          </p>
        </div>
      </div>
    );
  }
}
