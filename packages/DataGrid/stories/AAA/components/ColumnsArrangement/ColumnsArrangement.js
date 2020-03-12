import React from "react";
import PropTypes from "prop-types";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import { ColumnsArrangement as ColumnsArrangementPaprika } from "@paprika/action-bar";

const propTypesColumnItem = {
  label: PropTypes.string.isRequired, // eslint-disable-line
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // eslint-disable-line
  isDisabled: PropTypes.bool, // eslint-disable-line
  isHidden: PropTypes.bool, // eslint-disable-line
};
const defaultPropsColumnItem = {
  isDisabled: false,
  isHidden: false,
};

function ColumnItem() {
  return <React.Fragment />;
}

ColumnItem.propTypes = propTypesColumnItem;
ColumnItem.defaultProps = defaultPropsColumnItem;
ColumnItem.displayName = "ColumnsArrangement.ColumnItem";

export default function ColumnsArrangement(props) {
  const { children, ...moreProps } = props;
  const { "ColumnsArrangement.ColumnItem": ColumnItems } = extractChildren(children, ["ColumnsArrangement.ColumnItem"]);

  const columns = Array.isArray(ColumnItems)
    ? ColumnItems.map(column => {
        const { id, type, label, isDisabled, isHidden } = column.props;

        return {
          id,
          type,
          label,
          isDisabled,
          isHidden,
        };
      })
    : {
        id: ColumnItems.props.id,
        type: ColumnItems.props.type,
        isDisabled: ColumnItems.props.isDisabled,
        isHidden: ColumnItems.props.isHidden,
        label: ColumnItems.props.label,
      };

  return <ColumnsArrangementPaprika columns={columns} {...moreProps} />;
}

ColumnsArrangement.ColumnItem = ColumnItem;
