import React, { Component } from "react";
import RawButton from "acl-ui/components/RawButton/RawButton";
import { string, number, func, node } from "prop-types";
import "./Ruler.scss";

const measures = [
  { label: "Mobile S", size: 320 },
  { label: "Mobile M", size: 375 },
  { label: "Mobile L", size: 425 },
  { label: "Tablet", size: 768 },
  { label: "Laptop", size: 1024 },
  { label: "Laptop M", size: 1280 },
];

const Measure = ({ label, size, onClick }) => (
  <RawButton
    className="storybook-ruler-measure"
    key={label}
    onClick={onClick}
    style={{ minWidth: `${size}px`, marginLeft: `-${size / 2}px` }}
  />
);

Measure.propTypes = {
  label: string,
  size: number,
  onClick: func,
};

export default class Ruler extends Component {
  static propTypes = {
    label: string,
    size: number,
    zIndex: number,
    onClick: func,
    children: node,
  };

  state = { index: 3 };

  handleClick = index => () => {
    this.setState({
      index,
      size: measures[index].size,
    });
  };

  renderMeasure() {
    // how can I improved the performance?
    const measure = measures[this.state.index];
    const label = `${measure.label} - ${measure.size}`;
    return (
      <div style={{ position: "relative" }}>
        <span className="storybook-ruler-measure-label" style={{ zIndex: measures.length + 1 }}>
          {label}
        </span>
        {measures.map((item, index) => {
          const zIndex = measures.length - index;

          return (
            <div className="storybook-ruler" style={{ zIndex }}>
              <Measure key={label} size={item.size} zIndex={zIndex} onClick={this.handleClick(index)} />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="storybook-ruler-container">
        {this.renderMeasure()}
        {this.props.children(measures[this.state.index].size)}
      </div>
    );
  }
}
