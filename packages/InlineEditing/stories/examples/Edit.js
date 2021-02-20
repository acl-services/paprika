import React from "react";
import styled, { css } from "styled-components";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import RawButton from "../../../RawButton";
import Table from "../../../Table/src";
import Input from "../../../Input/src";

import extractChildren from "../../../helpers/src/extractChildren";

import dataMock from "./mock";

export function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  return React.cloneElement(children, { ...children.props, isEditing, setIsEditing });
}

export const Switcher = React.forwardRef((props, ref) => {
  const { onEdit: onEditProps, isEditing, setIsEditing } = props;
  const { "Switcher.Value": value, "Switcher.Edit": edit } = extractChildren(props.children, [
    "Switcher.Value",
    "Switcher.Edit",
  ]);

  React.useEffect(() => {
    if (isEditing) {
      onEditProps();
    }
  }, [isEditing, onEditProps]);

  return isEditing ? (
    edit.props.children
  ) : (
    <RawButton ref={ref} onClick={() => setIsEditing(true)}>
      {value.props.children}
    </RawButton>
  );
});

Switcher.Value = () => {
  return <></>;
};
Switcher.Value.displayName = "Switcher.Value";

Switcher.Edit = () => {
  return <></>;
};
Switcher.Edit.displayName = "Switcher.Edit";

export function InlineEditingTable(props) {
  const { children, ...moreProps } = props;
  const clonedColumnDefinition = React.useMemo(() => {
    const cloned = [];
    React.Children.forEach(props.children, child => {
      const { cell: Component } = child.props;

      cloned.push(
        <Table.ColumnDefinition
          {...child.props}
          cell={args => (
            <Editable>
              <Component {...args} />
            </Editable>
          )}
        />
      );
    });

    return cloned;
  }, [props.children]);

  return <Table {...moreProps}>{clonedColumnDefinition}</Table>;
}

const TableInner = React.memo(() => {
  const [data, setData] = React.useState(dataMock);

  return (
    <InlineEditingTable data={data} hasZebraStripes a11yText="My Table">
      <InlineEditingTable.ColumnDefinition
        header="author"
        width="180"
        cell={props => {
          const { setIsEditing } = props;
          const refInput = React.useRef(null);
          const refSwitcher = React.useRef(null);

          return (
            <Switcher
              onEdit={() => {
                refInput.current.focus();
              }}
              {...props}
              ref={refSwitcher}
            >
              <Switcher.Edit>
                <Input
                  ref={refInput}
                  onBlur={() => {
                    setIsEditing(false);
                    window.requestAnimationFrame(() => {
                      refSwitcher.current.focus();
                    });
                  }}
                  onKeyDown={event => {
                    if (event.key === "Escape") {
                      setIsEditing(false);
                      window.requestAnimationFrame(() => {
                        refSwitcher.current.focus();
                      });
                    }
                  }}
                  type="text"
                  defaultValue={props.row.author}
                />
              </Switcher.Edit>
              <Switcher.Value>
                <span>{props.row.author}</span>
              </Switcher.Value>
            </Switcher>
          );
        }}
      />
      <InlineEditingTable.ColumnDefinition header="title" width="140" cell={props => <span>{props.row.book}</span>} />
    </InlineEditingTable>
  );
});

export default function () {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setIsVisible(prev => !prev);
    }, 2000);
  }, []);

  return (
    <>
      <span>{isVisible ? "😸" : "😢"}</span>
      <TableInner />
    </>
  );
}
