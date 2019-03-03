import React from "react";
import PropTypes from "prop-types";
import Content from "./components/Content";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import NoResults from "./components/NoResults";
import Options from "./components/Options";
import Popover from "./components/Popover";
import Trigger from "./components/Trigger";
import Box from "./components/Box";
import List from "./components/List";

export const propTypes = {
  children: PropTypes.node,
  hasFilter: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasGroupFilter: PropTypes.bool,
  height: PropTypes.number,
  isMulti: PropTypes.bool,
  isPopoverOpen: PropTypes.bool,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  renderLabel: PropTypes.func,
  isDisabled: PropTypes.bool,
  typeOfChecker: PropTypes.oneOf(["checkbox", "plus-sign"]),
};

export const defaultProps = {
  children: null,
  hasFilter: false,
  hasFooter: false,
  hasGroupFilter: false,
  height: 200,
  isMulti: false,
  isPopoverOpen: false,
  label: "There are not results for your filter",
  placeholder: "select one of the options",
  renderLabel: null,
  isDisabled: false,
  typeOfChecker: null,
};

export default function ListBox(props) {
  const {
    children,
    hasFilter,
    hasGroupFilter,
    isMulti,
    isPopoverOpen,
    placeholder,
    renderLabel,
    height,
    hasFooter,
    typeOfChecker,
    ...moreProps
  } = props;

  return (
    <Popover {...moreProps}>
      <Trigger renderLabel={renderLabel} placeholder={props.placeholder} />
      <Content>
        <Box>
          <Filter hasGroupFilter={props.hasGroupFilter} />
          <List height={height}>
            <Options />
          </List>
          <NoResults label={props.label} />
          <Footer hasFooter={props.hasFooter} onClickClear={() => {}} />
        </Box>
      </Content>
    </Popover>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
