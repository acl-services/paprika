import React from "react";
import Input from "../../Input";

class ExampleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "",
    };
  }

  render = () => (
    <Input {...this.props} onChange={e => this.setState({ value: e.target.value })} value={this.state.value} />
  );
}

export default ExampleStory;
