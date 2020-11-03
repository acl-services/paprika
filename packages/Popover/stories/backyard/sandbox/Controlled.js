import React from "react";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../../src/Popover";

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
            <Popover.Card>
              <p>
                Some copy with a{" "}
                <a href="http://www.google.ca" target="_blank" rel="noopener noreferrer">
                  link
                </a>
              </p>
              <button type="button">Submit</button>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
        &nbsp;&nbsp;&nbsp;
        <a href="http://www.google.ca">Another link</a>
      </CenteredStory>
    );
  }
}
