import React from "react";
import RawButton from "../../../RawButton";
import Table from "../../../Table/src";
import Input from "../../../Input/src";
import ListBox from "../../../ListBox/src";

import extractChildren from "../../../helpers/src/extractChildren";

import dataMock from "./mock";

export function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  return React.cloneElement(children, { ...children.props, isEditing, setIsEditing });
}

export const Switcher = React.forwardRef((props, ref) => {
  const { onEdit: onEditProps, isEditing, setIsEditing } = props;
  const { "Switcher.Value": switcherValue, "Switcher.Edit": edit } = extractChildren(props.children, [
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
      {switcherValue.props.children}
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

function InlineInput(props) {
  const { setIsEditing, rowIndex, columnIndex, onChange, isEditing, value } = props;
  const refInput = React.useRef(null);
  const refSwitcher = React.useRef(null);

  const close = () => {
    setIsEditing(false);
  };

  function submit(event) {
    event.preventDefault();
    onChange({ rowIndex, columnIndex, close, nextValue: refInput.current.value });
  }

  React.useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }, [setIsEditing, value]);

  return (
    <Switcher
      onEdit={() => {
        refInput.current.focus();
      }}
      {...props}
      ref={refSwitcher}
    >
      <Switcher.Edit>
        <div style={{ position: "relative", height: "100%" }}>
          {isEditing ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                position: "absolute",
                right: "4px",
                color: "#AAA",
                zIndex: 3,
              }}
            >
              ↵
            </div>
          ) : null}
          <Input
            ref={refInput}
            style={{ paddingRight: "24px" }}
            onBlur={() => {
              setIsEditing(false);
              window.requestAnimationFrame(() => {
                refSwitcher.current.focus();
              });
            }}
            onKeyUp={event => {
              if (event.key === "Escape") {
                setIsEditing(false);
                window.requestAnimationFrame(() => {
                  refSwitcher.current.focus();
                });
              }

              if (event.key === "Enter") {
                submit(event);
              }
            }}
            type="text"
            defaultValue={props.row.author}
          />
        </div>
      </Switcher.Edit>
      <Switcher.Value>
        <span>{props.row.author}</span>
      </Switcher.Value>
    </Switcher>
  );
}

function InlineListBox(props) {
  const {
    setIsEditing,
    rowIndex,
    columnIndex,
    onChange,
    isEditing,
    value,
    placeHolder,
    children,
    ...moreProps
  } = props;
  const refInput = React.useRef(null);
  const refSwitcher = React.useRef(null);

  const close = () => {
    setIsEditing(false);
  };

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }

    // if (event.key === "Enter") {
    //   submit(event);
    // }
  }

  function handleClose() {
    setIsEditing(false);
    window.requestAnimationFrame(() => {
      refSwitcher.current.focus();
    });
  }

  function handleBlur() {
    const $parent = document.querySelector([`[data-paprika-anchor-inline-cell="${rowIndex}-${columnIndex}"]`])
      .parentElement;

    if ($parent.getAttribute("aria-hidden") === "true") {
      window.requestAnimationFrame(() => {
        handleClose();
      });
    }
  }

  function submit(event) {
    event.preventDefault();
    onChange({ rowIndex, columnIndex, close, nextValue: refInput.current.value });
  }

  function handleChange(args) {
    console.log("change", args);
    // handleClose();
  }

  function handleAccept(args) {
    console.log("accept", args);
  }

  React.useEffect(() => {
    if (isEditing) {
      setIsEditing(false);
      window.requestAnimationFrame(() => {
        refSwitcher.current.focus();
      });
    }
  }, [setIsEditing, value]);

  const dataIsEditing = {
    "data-paprika-anchor-inline-cell": `${rowIndex}-${columnIndex}`,
  };

  return (
    <Switcher
      onEdit={() => {
        refInput.current.focus();
      }}
      {...props}
      ref={refSwitcher}
    >
      <Switcher.Edit>
        <ListBox {...moreProps} onChange={handleChange} ref={refInput}>
          <ListBox.Trigger onKeyUp={handleKeyUp} onBlur={handleBlur} />
          <ListBox.Popover onClose={handleClose} />
          <ListBox.Box {...dataIsEditing} />
          <ListBox.Footer
            style={{ border: "1px solid red" }}
            isClearVisible={false}
            onClickAccept={handleAccept}
            onClickCancel={handleClose}
          />
          {children}
        </ListBox>
      </Switcher.Edit>
      <Switcher.Value>
        <span>{props.placeHolder}</span>
      </Switcher.Value>
    </Switcher>
  );
}

Object.keys(ListBox).forEach(key => {
  InlineListBox[key] = ListBox[key];
});

const TableInner = React.memo(() => {
  const [data, setData] = React.useState(dataMock);

  return (
    <InlineEditingTable data={data} hasZebraStripes a11yText="My Table">
      <InlineEditingTable.ColumnDefinition
        header="author"
        width="180"
        cell={props => (
          <InlineInput
            {...props}
            value={props.row.author}
            onChange={({ rowIndex, nextValue }) => {
              setData(prevData => {
                const nextData = prevData.slice(0);
                nextData[rowIndex].author = nextValue;
                return nextData;
              });
            }}
          />
        )}
      />
      <InlineEditingTable.ColumnDefinition
        header="book"
        width="240"
        cell={props => (
          <InlineListBox placeHolder="select an item       ▾ " onChange={() => {}} {...props}>
            {data.map(row => (
              <ListBox.Option key={row.id} value={row.book}>
                {row.book}
              </ListBox.Option>
            ))}
          </InlineListBox>
        )}
      />
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
