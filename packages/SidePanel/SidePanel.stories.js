/* eslint-disable react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "@paprika/heading";

import Button from "@paprika/button";

import SidePanel, { SidePanelGroup } from "./src";

const Nav = props => (
  <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", height: "40px", background: "#4B2164" }}>
    {props.children}
  </div>
);

const TextLine = props => {
  const { repeat } = props;

  return [
    ...Object.keys(Array(repeat).fill(null)).map(i => (
      <svg key={i} viewBox="0 0 100 4" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#EEE" x="0" width="100%" height="2px" rx="2" />
      </svg>
    )),
  ];
};

const SidePanelStory = props => {
  const [isOpen, setIsOpen] = React.useState(true);
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <SidePanel isOpen={isOpen} onClose={close} offsetY={props.offsetY}>
        <SidePanel.Overlay />
        <SidePanel.Trigger onClick={open}>{isOpen ? "close" : "open"}</SidePanel.Trigger>
        <SidePanel.Header kind={props.kind}>
          <Heading level={2}>Header</Heading>
        </SidePanel.Header>
        Content
      </SidePanel>
    </React.Fragment>
  );
};

const SidePanelStoryGroup = props => {
  const [spParent1, setSpParent1] = React.useState(true);
  const [spParent2, setSpParent2] = React.useState(true);
  const [spChild, setSpChild] = React.useState(true);

  const closeAll = () => {
    setSpParent1(false);
    setSpParent2(false);
    setSpChild(false);
  };

  return (
    <React.Fragment>
      {props.hasNav ? (
        <Nav>
          {props.hasFilterIcons ? (
            <div
              style={{
                padding: "8px",
                border: "1px solid red;",
                display: "flex",
                width: "150px",
                "justify-content": "space-between",
              }}
            >
              <Button
                onClick={() => {
                  setSpParent1(state => !state);
                }}
                size="small"
              >
                Parent 1
              </Button>
              <Button
                onClick={() => {
                  if (spParent2) {
                    setSpParent2(false);
                    setSpChild(false);
                  } else {
                    setSpParent2(true);
                  }
                }}
                size="small"
              >
                Parent 2
              </Button>
            </div>
          ) : null}
        </Nav>
      ) : null}
      <div style={{ display: "flex" }}>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
        <div style={{ width: "400px", margin: "25px" }}>
          <TextLine repeat={100} />
        </div>
      </div>
      <SidePanelGroup offsetY={props.offsetY}>
        {props.hasOverlayForStory ? <SidePanelGroup.Overlay onClick={closeAll} /> : null}
        <SidePanel width={400} isOpen={spParent1}>
          <SidePanel.Header
            onCloseClick={() => {
              setSpParent1(false);
            }}
            kind="primary"
          >
            <Heading level={2}>Parent {props.hasExtraSidePanel ? "1" : null}</Heading>
          </SidePanel.Header>
        </SidePanel>
        {props.hasExtraSidePanel ? (
          <SidePanel width={400} isOpen={spParent2}>
            <SidePanel.Header
              onCloseClick={() => {
                setSpChild(false);
                setSpParent2(false);
              }}
              kind="primary"
            >
              <Heading level={2}>Parent 2</Heading>
            </SidePanel.Header>
            <Button
              onClick={() => {
                setSpChild(state => !state);
              }}
            >
              Toggle Child
            </Button>
          </SidePanel>
        ) : null}
        <SidePanel kind={props.hasExtraSidePanel ? "child" : "default"} width={400} isOpen={spChild}>
          <SidePanel.Header
            onCloseClick={() => {
              setSpChild(false);
            }}
          >
            <Heading level={2}>Child {props.hasExtraSidePanel ? "of Parent 2" : null}</Heading>
          </SidePanel.Header>
        </SidePanel>
      </SidePanelGroup>
    </React.Fragment>
  );
};

storiesOf("SidePanel", module).add("Basic", () => <SidePanel isOpen>minimalistic</SidePanel>);

storiesOf("SidePanel", module).add("Primary", () => <SidePanelStory kind="primary" />);

storiesOf("SidePanel", module).add("SidePanel Default Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanelStory offsetY={40} />
    </p>
    <div style={{ width: "400px", margin: "25px" }}>
      <TextLine repeat={100} />
    </div>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel Primary Sticky", () => (
  <React.Fragment>
    <Nav />
    <p>
      <SidePanelStory kind="primary" offsetY={40} />
    </p>
    <div style={{ width: "400px", margin: "25px" }}>
      <TextLine repeat={100} />
    </div>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel.Header", () => (
  <SidePanel
    onClose={() => {
      alert("onClose");
    }}
    isOpen
  >
    <SidePanel.Header>
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel", module).add("SidePanel.Header without close button", () => (
  <SidePanel isOpen>
    <SidePanel.Header hasCloseButton={false}>
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel", module).add("SidePanel offsetY", () => (
  <React.Fragment>
    <div style={{ width: "100%", height: "40px", background: "#4B2164" }} />
    <SidePanel isOpen offsetY={40}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <input type="text" />
      <button type="button">button</button>
    </SidePanel>
  </React.Fragment>
));

function Line() {
  return <div style={{ width: "100%", margin: "12px", height: "25px", background: "#EEE" }} />;
}

storiesOf("SidePanel", module).add("SidePanel Scroll Sticky", () => (
  <React.Fragment>
    <div style={{ width: "100%", height: "40px", background: "#4B2164" }} />
    {[...Object.keys(Array(100).fill(null))].map(() => (
      <Line />
    ))}
    <SidePanel isOpen offsetY={40}>
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
      <input type="text" />
      <button type="button">button</button>
    </SidePanel>
  </React.Fragment>
));

storiesOf("SidePanel", module).add("SidePanel Header kind primary", () => (
  <SidePanel isOpen>
    <SidePanel.Header onCloseClick={() => {}} kind="primary">
      <Heading level={2}>With Header</Heading>
    </SidePanel.Header>
  </SidePanel>
));

storiesOf("SidePanel", module).add("SidePanel Group", () => <SidePanelStoryGroup />);

storiesOf("SidePanel", module).add("SidePanel Groups Sticky", () => <SidePanelStoryGroup hasNav offsetY={40} />);

storiesOf("SidePanel", module).add("SidePanel Group with overlay", () => <SidePanelStoryGroup hasOverlayForStory />);

storiesOf("SidePanel", module).add("SidePanel Groups Sticky with overlay", () => (
  <SidePanelStoryGroup hasOverlayForStory hasNav offsetY={40} />
));

storiesOf("SidePanel", module).add("SidePanel Groups Sticky with extra child", () => (
  <SidePanelStoryGroup hasOverlayForStory hasNav hasExtraSidePanel offsetY={40} />
));

storiesOf("SidePanel", module).add("SidePanel Groups interactive", () => (
  <SidePanelStoryGroup hasNav hasExtraSidePanel hasFilterIcons offsetY={40} />
));

storiesOf("SidePanel", module).add("SidePanelGroup With Child", () => (
  <SidePanelGroup>
    <SidePanel isOpen width={300}>
      <SidePanel.Header onCloseClick={() => {}} kind="primary">
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300} kind="child">
      <SidePanel.Header onCloseClick={() => {}}>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300}>
      <SidePanel.Header onCloseClick={() => {}} kind="primary">
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300} kind="child">
      <SidePanel.Header onCloseClick={() => {}}>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
  </SidePanelGroup>
));

storiesOf("SidePanel", module).add("<SidePanelGroup  /> kind child", () => (
  <SidePanelGroup>
    <SidePanel isOpen width={300}>
      <SidePanel.Header onCloseClick={() => {}} kind="primary">
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300} kind="child">
      <SidePanel.Header onCloseClick={() => {}}>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300}>
      <SidePanel.Header onCloseClick={() => {}} kind="primary">
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <SidePanel isOpen width={300} kind="child">
      <SidePanel.Header onCloseClick={() => {}}>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
  </SidePanelGroup>
));

storiesOf("SidePanel", module).add("<SidePanel onClose={} />", () => (
  <React.Fragment>
    <SidePanel
      onClose={() => {
        alert("onClose");
      }}
      isOpen
    >
      <SidePanel.Overlay />
      <SidePanel.Header>
        <Heading level={2}>With Header</Heading>
      </SidePanel.Header>
    </SidePanel>
    <TextLine repeat={100} />
  </React.Fragment>
));

const SidePanelOnAfter = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <React.Fragment>
      <SidePanel
        isOpen={isOpen}
        onAfterOpen={() => {
          alert("after opened callback executed");
        }}
        onAfterClose={() => {
          alert("after close callback executed");
        }}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <SidePanel.Overlay />
        <SidePanel.Header>
          <Heading level={2}>With Header</Heading>
        </SidePanel.Header>
      </SidePanel>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

storiesOf("SidePanel", module).add("<SidePanel onAfterOpen={} onAfterClose={} />", () => <SidePanelOnAfter />);
