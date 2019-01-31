import React, { Component } from "react";
import Popover from "../../Popover";
import { CenteredStory } from "../../../../.storybook/assets/styles/common.styles";

export default class PopoverStory extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <CenteredStory>
        <Popover isOpen={this.state.isOpen} onClose={this.handleClose}>
          <button type="button" onClick={this.handleClick}>
            Open Popover
          </button>
          <Popover.Content>
            <Popover.Tip />
            <Popover.Card>This popover is a controlled component.</Popover.Card>
          </Popover.Content>
        </Popover>
      </CenteredStory>
    );
  }
}
