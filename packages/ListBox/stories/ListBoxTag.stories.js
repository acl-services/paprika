import React from "react";
import RawButton from "@paprika/raw-button";
import { storiesOf } from "@storybook/react";
import ListBox from "../src";
import styled from "styled-components";

const options = [
  "Punisher",
  "Catwoman",
  "Venom",
  "Thunderbolts",
  "Deadpool",
  "Spawn",
  "Wolverine",
  "Loki",
  "Batman",
  "Aquaman",
];

function Pill(props) {
  return (
    <div
      css={`
        display: inline-block;
        background: #ccc;
        color: #111;
        padding: 2px 6px;
        margin-right: 6px;
        border-radius: 4px;
      `}
    >
      {props.children}
    </div>
  );
}

function Pills(props) {
  return props.selected.map(index => {
    const children = props.options[index].content.props.children;
    return <Pill>{children}</Pill>;
  });
}

const sc = {
  Container: styled.div`
    display: flex;
    [data-pka-anchor="list-filter"] {
      display: inline-block;
      .form-input {
        margin: 0px;
      }
    }
  `,
};

const App = () => {
  const refLisBox = React.useRef(null);
  const refContainer = React.useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const handleClick = (dispatch, types) => event => {
    event.stopPropagation();
    dispatch({ type: types.openPopover });
  };

  const handleBlur = (dispatch, types) => event => {
    event.persist();
    window.requestAnimationFrame(() => {
      if (refContainer.current.contains(document.activeElement)) {
        return;
      }
      dispatch({ type: types.closePopover });
    });
  };

  React.useEffect(() => {
    if (isPopoverOpen) {
      refContainer.current.querySelector("input[type=text]").focus();
    }
  }, [isPopoverOpen]);

  return (
    <sc.Container ref={refContainer}>
      <ListBox isMulti ref={refLisBox}>
        <ListBox.Popover shouldKeepFocus isPortal={false} />
        <ListBox.Trigger>
          {(selected, options, current, { dispatch, types, refTrigger, propsForTrigger, handleKeyDown, isOpen }) => {
            setIsPopoverOpen(isOpen);

            return (
              <RawButton
                data-pka-anchor="list-filter-tag.raw-button"
                {...propsForTrigger()}
                onClick={handleClick(dispatch, types)}
                onBlur={handleBlur(dispatch, types)}
                ref={refTrigger}
              >
                {isOpen ? (
                  <>
                    <Pills options={options} selected={selected} />
                    <ListBox.Filter onKeyDown={handleKeyDown} />
                  </>
                ) : (
                  <>
                    <Pills options={options} selected={selected} />
                    <span>open</span>
                  </>
                )}
              </RawButton>
            );
          }}
        </ListBox.Trigger>

        {options.map(option => {
          return <ListBox.Option key={option}>{option}</ListBox.Option>;
        })}
      </ListBox>
    </sc.Container>
  );
};

storiesOf("ListBox / Tags", module).add("Showcase", () => <App />);
