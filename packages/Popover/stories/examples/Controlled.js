import React from "react";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../Popover";

export default class ExampleStory extends React.Component {
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
          <Button onClick={this.handleClick}>Open Popover</Button>
          <Popover.Content>
            <Popover.Tip />
            <Popover.Card>This popover is a controlled component.</Popover.Card>
          </Popover.Content>
        </Popover>
      </CenteredStory>
    );
  }
}
