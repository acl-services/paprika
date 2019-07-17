import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import Item from "../Item";
import groupStyles from "./Group.styles";

const propTypes = {
  children: PropTypes.node, // probably an array of "Items", but could be a Spinner or anything else
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

  function toggleChildren() {
    const childItems = [];
    React.Children.forEach(children, child => {
      if (child.type === Item) {
        childItems.push(child);
      }
    });

    if (childItems.length === 0) {
      return;
    }

    const allChildItemsAreChecked =
      childItems.filter(childItem => childItem.props.isChecked || childItem.props.isDisabled).length ===
      childItems.length;

    let childItemsToChange = [];
    if (allChildItemsAreChecked) {
      childItemsToChange = childItems.filter(childItem => !childItem.props.isDisabled);
    } else {
      childItemsToChange = childItems.filter(childItem => !childItem.props.isChecked && !childItem.props.isDisabled);
    }

    onChange(childItemsToChange);
  }

  /* eslint-disable jsx-a11y/label-has-associated-control */
  const label = (
    <React.Fragment>
      <label>
        <input
          ref={checkboxRef}
          checked={allAreChecked}
          type="checkbox"
          disabled={isDisabled}
          onChange={toggleChildren}
        />
        {title}
      </label>
    </React.Fragment>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */

  const modifiedChildren = [];
  React.Children.forEach(children, child => {
    const newProps =
      child.type.displayName === Item.displayName
        ? {
            onChange: () => onChange([child]),
          }
        : null;
    modifiedChildren.push(React.cloneElement(child, newProps));
  });

  return (
    <Collapsible
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
