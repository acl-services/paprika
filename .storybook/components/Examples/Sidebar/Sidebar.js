import React, { Component } from "react";
import Button from "acl-ui/components/Button/Button";
import { arrayOf, string, func } from "prop-types";

import "./Sidebar.scss";

export default class Sidebar extends Component {
  static propTypes = {
    examples: arrayOf(string),
    onExampleSelection: func,
  };

  state = { ariaSelected: null };

  handleClick = itemName => () => {
    this.props.onExampleSelection(itemName);
    this.setState({ ariaSelected: itemName });
  };

  // aria-selected is not handle the first selected element I will handle that later
  // when adding the ability to selected the default:initial example
  render() {
    const { ariaSelected } = this.state;
    return (
      <div role="listItem" className="spicy-examples-sidebar">
        {this.props.examples.map(item => (
          <div key={item.name}>
            <Button
              className="spicy-examples-sidebar-item"
              onClick={this.handleClick(item.name)}
              type="minor"
              role="option"
              aria-selected={ariaSelected && ariaSelected === item.name}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    );
  }
}
