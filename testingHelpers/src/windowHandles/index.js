import React from "react";

class WindowHandles extends React.Component {
  constructor(props) {
    super(props);
    this.element = props.story();
    this.childProps = {
      ref: ref => {
        this.ref = ref;
      },
      key: true,
    };
    this.initialize();
  }

  isPropUndefinedOrDefault = key =>
    !this.element.props[key] ||
    (this.element.type.defaultProps && this.element.props[key] === this.element.type.defaultProps[key]);

  initialize() {
    this.windowProps = {
      update: () => this.forceUpdate(),
      reset: () => {
        this.childProps.key = !this.childProps.key;
        this.initialize();
        this.forceUpdate();
      },
    };

    if (Object.prototype.hasOwnProperty.call(window, "Cypress")) {
      window.Cypress.cy.windowHandles = {
        [this.element.type.name]: this.windowProps,
      };
    } else {
      window[this.element.type.name] = this.windowProps;
    }

    for (const key of Object.keys(this.props.config)) {
      this.props.config[key].apply(this, key);
    }
  }

  render() {
    return <this.element.type {...this.element.props} {...this.childProps} />;
  }
}

export class Input {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  apply(wrapper, key) {
    // eslint-disable-next-line
    wrapper.childProps[key] =
      wrapper.isPropUndefinedOrDefault(key) && typeof this.initialValue !== "undefined"
        ? this.initialValue
        : wrapper.element.props[key];
    Object.defineProperty(wrapper.windowProps, key, {
      get: () => wrapper.childProps[key],
      set: value => {
        wrapper.childProps[key] = value; // eslint-disable-line
        wrapper.windowProps.update();
      },
    });
  }
}

export class Action {
  apply(wrapper, key) {
    wrapper.windowProps[key] = (...args) => wrapper.ref[key](...args); // eslint-disable-line
  }
}

export default config => story => <WindowHandles story={story} config={{ ...config }} />;
