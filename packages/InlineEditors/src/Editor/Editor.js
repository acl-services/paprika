import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Spinner from "@paprika/spinner";
import ExclamationCircle from "@paprika/icon/lib/ExclamationCircle";
import Pencil from "@paprika/icon/lib/Pencil";
import Check from "@paprika/icon/lib/Check";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import * as sc from "./Editor.styles";
import { status as statusTypes } from "../types";

// eslint-disable-next-line react/prop-types
const Tooltip = ({ Icon = null, message }) => (
    <Popover isEager>
      <Popover.Trigger>
        {(handler, a11yAttributes) => Icon ? (
            <Icon
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              tabIndex={0}
              aria-label="info"
              role="img"
              {...a11yAttributes}
            />
          ) : null}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>{message}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );

const Editor = React.forwardRef((props, ref) => {
  const { isEditing, onClick, status, optimisticValue, onSuccessAnimationEnd, messageError } = props;
  const { "Editor.Value": editorValue, "Editor.Edit": edit } = extractChildren(props.children, [
    "Editor.Value",
    "Editor.Edit",
  ]);

  function handleClick(event) {
    onClick(event);
  }

  return isEditing ? (
    edit.props.children
  ) : (
    <sc.Value status={status} data-pka-anchor="inline-editing.raw-button" ref={ref} onClick={handleClick}>
      {status === statusTypes.ERROR ? (
        <sc.Error>
          <Tooltip Icon={ExclamationCircle} message={messageError} />
        </sc.Error>
      ) : null}
      {status === statusTypes.LOADING && optimisticValue ? (
        <sc.OptimisticValue>{optimisticValue}</sc.OptimisticValue>
      ) : (
        editorValue.props.children
      )}

      {status === statusTypes.IDLE ? (
        <sc.Idle data-pka-anchor="inline-editors-table-edit-icon">
          <Pencil />
        </sc.Idle>
      ) : null}
      {status === statusTypes.LOADING ? (
        <sc.Loading>
          <Spinner size={Spinner.types.size.SMALL} />
        </sc.Loading>
      ) : null}
      {status === statusTypes.SUCCEED ? (
        <sc.Success onAnimationEnd={onSuccessAnimationEnd}>
          <Check />
        </sc.Success>
      ) : null}
    </sc.Value>
  );
});

Editor.Value = () => <></>;
Editor.Value.displayName = "Editor.Value";

Editor.Edit = () => <></>;

Editor.Edit.displayName = "Editor.Edit";
Editor.types = { status: statusTypes };

const propTypes = {
  status: PropTypes.oneOf([
    Editor.types.status.ERROR,
    Editor.types.status.IDLE,
    Editor.types.status.LOADING,
    Editor.types.status.SUCCESS,
  ]),
  children: PropTypes.node.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onSuccessAnimationEnd: PropTypes.func,
  onClick: PropTypes.func,
  optimisticValue: PropTypes.node,
  messageError: PropTypes.node,
};

const defaultProps = {
  onSuccessAnimationEnd: () => {},
  onClick: () => {},
  optimisticValue: null,
  status: Editor.types.status.IDLE,
  messageError: null,
};

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;
