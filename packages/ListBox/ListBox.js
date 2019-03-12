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
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isPopoverEager: PropTypes.bool,
  isPopoverOpen: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  preventOnBlurOnTrigger: PropTypes.bool,
  renderLabel: PropTypes.func,
  typeOfChecker: PropTypes.oneOf(["checkbox"]),
  zIndex: PropTypes.number,
};

export const defaultProps = {
  children: null,
  hasFilter: false,
  hasFooter: false,
  hasGroupFilter: false,
  height: 200,
  isDisabled: false,
  isMulti: false,
  isPopoverEager: true,
  isPopoverOpen: false,
  label: "There are not results for your filter",
  onChange: () => {},
  placeholder: "select one of the options",
  preventOnBlurOnTrigger: false,
  renderLabel: null,
  typeOfChecker: null,
  zIndex: null,
};

export default function ListBox(props) {
  const {
    children,
    hasFilter,
    hasFooter,
    hasGroupFilter,
    height,
    isMulti,
    isPopoverEager,
    isPopoverOpen,
    onChange,
    placeholder,
    zIndex,
    renderLabel,
    typeOfChecker,
    ...moreProps
  } = props;

  return (
    <Popover {...moreProps} zIndex={zIndex} isEager={isPopoverEager}>
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
