import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../../src/Popover";

class FocusTest extends React.Component {
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
      <Story>
        <Button>Vinyl</Button>
        <Gap />
        <p>
          <Popover>
            <Popover.Trigger>Open Popover</Popover.Trigger>
            <Popover.Content>
              <Popover.Card>
                <Button>Aesthetic</Button>
                <Button>Gastropub</Button>
                <Button>Snackwave</Button>
              </Popover.Card>
            </Popover.Content>
            <Popover.Tip />
          </Popover>
        </p>
        <Gap />
        <p>
          <Popover isOpen={this.state.isOpen} onClose={this.handleClose}>
            <Button onClick={this.handleClick}>Open Controlled Popover</Button>
            <Popover.Content>
              <Popover.Card>
                <Button>Aesthetic</Button>
                <Button>Gastropub</Button>
                <Button>Snackwave</Button>
              </Popover.Card>
            </Popover.Content>
            <Popover.Tip />
          </Popover>
        </p>
        <Gap />
        <p>
          <Popover isDark isEager>
            <Popover.Trigger>Open Tooltip</Popover.Trigger>
            <Popover.Content>
              <Popover.Card>Lorem hipsum snackwave</Popover.Card>
            </Popover.Content>
            <Popover.Tip />
          </Popover>
        </p>
        <Gap />
        <Button>Adaptogen</Button>
      </Story>
    );
  }
}

export default () => <FocusTest />;
