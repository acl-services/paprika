import React, { Component } from "react";
import Button from "acl-ui/components/Button/Button";
import SidePanel from "acl-ui/components/SidePanel/SidePanel";
import { func } from "prop-types";

import "./ChangeLog.scss";

export default class ChangeLog extends Component {
  static propTypes = {
    logs: func.isRequired,
  };

  state = {
    isSidePanelOpen: false,
  };

  handleToggleSidepanel = () => {
    this.setState(state => ({ isSidePanelOpen: !state.isSidePanelOpen }));
  };

  renderLogItem(item, hasAllVersionsButton) {
    return (
      <div>
        <div className="log-header">
          <h6 className="log-version">{item.version}</h6>
        </div>
        <div className="log-list" role="list">
          {item.changes.map(change => (
            <div className="log-item" role="listitem">
              {change}
            </div>
          ))}
        </div>
        {hasAllVersionsButton ? (
          <Button onClick={this.handleToggleSidepanel} className="log-all-versions-button" size="small">
            previous versions
          </Button>
        ) : null}
      </div>
    );
  }

  renderChangeLog() {
    return this.props.logs().map(item => this.renderLogItem(item, false));
  }

  render() {
    const logs = this.props.logs();
    if (logs && logs.length) {
      return (
        <div>
          <SidePanel open={this.state.isSidePanelOpen} onClose={this.handleToggleSidepanel} title="Versions">
            <div className="spicy-logs">{this.renderChangeLog()}</div>
          </SidePanel>
          <div className="spicy-logs">{this.renderLogItem(logs[0], true)}</div>
        </div>
      );
    }

    return null;
  }
}
