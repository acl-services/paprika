import React from "react";
import { string } from "prop-types";
import Input from "../../Input";

const propTypes = {
  value: string,
};

const defaultProps = {
  value: "",
};

class ExampleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render = () => (
    <Input {...this.props} onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
  );
}

ExampleStory.propTypes = propTypes;
ExampleStory.defaultProps = defaultProps;

export default ExampleStory;
