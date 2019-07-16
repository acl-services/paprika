import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import Item from "../Item";
import groupStyles from "./Group.styles";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]), // are probably an array of "Items", but could be a Spinner or anything else
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  onExpand: PropTypes.func,
  title: PropTypes.node.isRequired,
};

const defaultProps = {
  children: [],
  isDisabled: false,
  onChange: () => {},
  onExpand: () => {},
};

function useIsIndeterminate(checkboxRef) {
  const [, setIsIndeterminate] = React.useState(null);
  React.useEffect(() => {
    setIsIndeterminate(checkboxRef.current.indeterminate);
  }, [checkboxRef.current.indeterminate]);
}

function Group(props) {
  const { children, isDisabled, onChange, onExpand, title } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const checkboxRef = React.useRef({});
  useIsIndeterminate(checkboxRef);
  let allAreChecked = React.Children.count(props.children) > 0;
  let noneAreChecked = true;

  React.Children.forEach(children, child => {
    if (child.props.isChecked) {
      noneAreChecked = false;
    } else {
      allAreChecked = false;
    }
  });

  if (allAreChecked || noneAreChecked) {
    checkboxRef.current.indeterminate = false;
  } else if (!allAreChecked && !noneAreChecked) {
    checkboxRef.current.indeterminate = true;
  }

  function handleOnChange() {
    const allChildrenAreChecked =
      children.filter(child => child.props.isChecked || child.props.isDisabled).length === children.length;

    let childrenToChange = [];
    if (allChildrenAreChecked) {
      childrenToChange = children.filter(child => !child.props.isDisabled);
    } else {
      childrenToChange = children.filter(child => !child.props.isChecked && !child.props.isDisabled);
    }

    onChange(childrenToChange);
  }

  const label = (
    <React.Fragment>
      <input
        ref={checkboxRef}
        checked={allAreChecked}
        type="checkbox"
        disabled={isDisabled}
        onChange={handleOnChange}
      />
      {title}
    </React.Fragment>
  );

  const modifiedChildren = React.Children.map(children, child => {
    const newProps =
      child.type.displayName === Item.displayName
        ? {
            onChange: () => onChange([child]),
          }
        : null;
    return React.cloneElement(child, newProps);
  });

  return (
    <Collapsible
      a11yText="umm..."
      css={groupStyles}
      hasOnlyIconToggle
      isCollapsed={isCollapsed}
      isDisabled={isDisabled}
      label={label}
      onClick={() => {
        if (isCollapsed && onExpand) {
          onExpand();
        }
        setIsCollapsed(!isCollapsed);
      }}
    >
      {modifiedChildren}
    </Collapsible>
  );
}

Group.displayName = "Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
export default Group;
