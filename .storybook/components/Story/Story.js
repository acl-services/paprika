import React, { Component } from "react";
import { node, string, bool } from "prop-types";

// support components
import Ruler from "storybook/stories/components/Ruler/Ruler";

import ChangeLog from "storybook/stories/components/ChangeLog/ChangeLog";
import Codebox from "storybook/stories/components/Codebox/Codebox";
import Examples from "storybook/stories/components/Examples/Examples";
import Gap from "storybook/stories/components/Gap/Gap";
import PropTable from "storybook/stories/components/PropTable/PropTable";

import "storybook/assets/css/storybook.scss";
import "./Story.scss";

class Story extends Component {
  static propTypes = {
    content: node,
    storyPath: string,
    component: node,
    isBeta: bool,
    componentName: string,
    subtitle: node,
  };

  state = { size: 0 };

  renderContent = () => (
    <div>
      <Gap space={64} />
      <div className="spicy-story-description">{this.props.content}</div>
      <Gap space={64} />
    </div>
  );

  render() {
    const { component, isBeta, componentName, subtitle = "" } = this.props;

    return (
      <Ruler>
        {size => (
          <div className="spicy-story">
            <h2 className="spicy-story-title">
              {componentName} {isBeta ? "BETA" : null}
            </h2>
            {subtitle ? <h3 className="spicy-story-subtitle">{subtitle}</h3> : null}
            <Gap space={32} />
            <div className="spicy-story-body" style={{ width: `${size}px` }}>
              {component}
            </div>
            <div className="spicy-story-footer" style={{ width: `${size}px` }}>
              {size}
            </div>
            {this.renderContent()}
          </div>
        )}
      </Ruler>
    );
  }
}

Story.ChangeLog = ChangeLog;
Story.Codebox = Codebox;
Story.Examples = Examples;
Story.Gap = Gap;
Story.PropTable = PropTable;

export default Story;
