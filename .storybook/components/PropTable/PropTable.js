import React, { Component } from "react";
import { string } from "prop-types";
import Spinner from "acl-ui/components/Spinner/Spinner";
import newId from "acl-ui/components/helpers/newId";
import { parse } from "react-docgen";

import "./PropTable.scss";

const sources = new Map();

const colors = {
  // TODO: replace this with Token colors, when this was built there was not such cool thing :)
  purple: "#53529F",
  green: "#42996D",
  orange: "#DE4D33",
  yellow: "#EABA51",
  grey: "#a4a4a4", // lighten 40%
  darkGrey: "#717171", // lighten 20%
};

class propTable extends Component {
  static propTypes = {
    componentName: string.isRequired,
  };

  state = {
    metadata: undefined,
  };

  componentDidMount() {
    this.loadTable();
  }

  loadTable() {
    const { componentName } = this.props;

    // lets cache the source request
    if (sources.has(componentName)) {
      const source = sources.get(componentName);
      const metadata = source || null;
      this.setState({ metadata });
      return;
    }

    import(`!!raw-loader!acl-ui/components/${componentName}/${componentName}`).then(
      source => {
        const docgen = parse(source);
        sources.set(componentName, docgen);
        this.setState({ metadata: docgen });
      },
      () => {
        sources.set(componentName, null);
        this.setState({ metadata: null });
      }
    );
  }

  propIsRequired(prop) {
    if (prop.required) {
      return <td style={{ color: colors.orange }}> required </td>;
    }
    return <td style={{ color: colors.grey }}> &nbsp; </td>;
  }

  propName(key) {
    return <td style={{ color: colors.green, fontWeight: "bold" }}> {key} </td>;
  }

  propDefaultValue(prop) {
    if (prop.defaultValue === null) {
      return <td style={{ color: colors.purple, fontWeight: "bold" }}>null</td>;
    }

    if (typeof prop.defaultValue === "string" && prop.defaultValue.length === 0) {
      return <td style={{ color: colors.purple, fontWeight: "bold" }}>&lsquo; &rsquo;</td>;
    }

    if (prop.defaultValue) {
      return <td style={{ color: colors.purple, fontWeight: "bold" }}>{prop.defaultValue.value}</td>;
    }

    return <td style={{ color: colors.grey }}> none </td>;
  }

  propDescription(prop) {
    if (prop.description) {
      return <td className="td__description">{prop.description}</td>;
    }
    return <td />;
  }

  propType(prop) {
    if (prop.type) {
      if (prop.type.name === "enum") {
        return <td style={{ color: colors.darkGrey, fontStyle: "italic" }}>{this.renderEnum(prop.type.value)}</td>;
      }
      return <td>{prop.type.name}</td>;
    }
    return <td />;
  }

  processTBody() {
    const props = this.state.metadata.props;
    return Object.keys(props).map(key => {
      const prop = props[key];
      return (
        <tr key={key}>
          {this.propName(key)}
          {this.propType(prop)}
          {this.propIsRequired(prop)}
          {this.propDefaultValue(prop)}
          {this.propDescription(prop)}
        </tr>
      );
    });
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
    );
  }

  renderEnum(values) {
    return values.map(v => (
      <span key={newId()}>
        {v.value.replace(/["']/g, "")} <br />
      </span>
    ));
  }

  renderBodyWithProps() {
    return <tbody>{this.processTBody()}</tbody>;
  }

  render() {
    if (this.state.metadata === null) {
      return <div>Cannot find the source for this component</div>;
    }

    return (
      <div className="aclui-table-props">
        <h5>Props</h5>
        {this.state.metadata ? (
          <table>
            {this.renderHeader()}
            {this.renderBodyWithProps()}
          </table>
        ) : (
          <Spinner size="small" />
        )}
      </div>
    );
  }
}

export default propTable;
