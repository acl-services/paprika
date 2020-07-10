import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import SidePanel from "../../src";
import { Nav, TextLine } from "../helpers";

export const BasicSidePanel = props => {
  const { disableBodyOverflow, hasOverlay, isSlideFromLeft } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Nav />
      <SidePanel
        a11yText="SidePanel View"
        disableBodyOverflow={disableBodyOverflow}
        isOpen={isOpen}
        onClose={toggle}
        offsetY={40}
        isSlideFromLeft={isSlideFromLeft}
      >
        {hasOverlay ? <SidePanel.Overlay /> : null}
        <SidePanel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </SidePanel.Trigger>
        <SidePanel.Header kind="primary">Header</SidePanel.Header>
        <SidePanel.Content>
          <TextLine repeat={100} />
        </SidePanel.Content>
        <SidePanel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
      </SidePanel>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

export const FocusLockSidePanel = () => {
  return (
    <SidePanel isOpen>
      <SidePanel.Header>Header</SidePanel.Header>
      <SidePanel.Content>
        <input type="text" data-autofocus />
      </SidePanel.Content>
    </SidePanel>
  );
};

export const GroupSidePanel = () => {
  const [spParent1, setSpParent1] = React.useState(true);
  const [spParent2, setSpParent2] = React.useState(true);
  const [spChild, setSpChild] = React.useState(true);
  const menu = {
    padding: "8px",
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  };

  const handleParent2 = () => {
    if (spParent2) {
      setSpParent2(false);
      setSpChild(false);
    } else {
      setSpParent2(true);
    }
  };

  const handleParent1 = () => {
    setSpParent1(state => !state);
  };

  return (
    <React.Fragment>
      <Nav>
        <div style={menu}>
          <Button data-pka-anchor="button-sidepanel1" onClick={handleParent1} size="small">
            Parent 1
          </Button>
          <Button data-pka-anchor="button-sidepanel2" onClick={handleParent2} size="small">
            Parent 2
          </Button>
        </div>
      </Nav>
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
      <SidePanel.Group offsetY={40}>
        <SidePanel data-pka-anchor="sidepanel1" width={400} onClose={handleParent1} isOpen={spParent1}>
          <SidePanel.Header kind="primary">Parent 1</SidePanel.Header>
          <SidePanel.Content>
            <TextLine repeat={100} />
            <Button>Test button</Button>
          </SidePanel.Content>
        </SidePanel>
        <SidePanel data-pka-anchor="sidepanel2" onClose={handleParent2} width={400} isOpen={spParent2}>
          <SidePanel.Header kind="primary">Parent 2</SidePanel.Header>
          <SidePanel.Content>
            <Button
              onClick={() => {
                setSpChild(state => !state);
              }}
            >
              Toggle Child
            </Button>
          </SidePanel.Content>
        </SidePanel>
        <SidePanel
          data-pka-anchor="sidepanel-child"
          onClose={() => {
            setSpChild(false);
          }}
          kind="child"
          width={400}
          isCompact
          isOpen={spChild}
        >
          <SidePanel.Header>Child of Parent 2</SidePanel.Header>
          <SidePanel.Content>
            <TextLine repeat={100} />
          </SidePanel.Content>
          <SidePanel.Footer>
            <Button>Test button</Button>
          </SidePanel.Footer>
        </SidePanel>
      </SidePanel.Group>
    </React.Fragment>
  );
};

export const StickyFooterSidePanel = () => {
  return (
    <SidePanel isOpen>
      <SidePanel.Header>Header</SidePanel.Header>
      <SidePanel.Content>
        <TextLine repeat={100} />
      </SidePanel.Content>
      <SidePanel.Footer isSticky>Footer isSticky</SidePanel.Footer>
    </SidePanel>
  );
};

export const PushContentSidePanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <React.Fragment>
      <Nav />
      <SidePanel
        getPushContentElement={getMainElement}
        isOpen={isOpen}
        onClose={toggle}
        pushContentWidth="50%"
        width="50%"
      >
        <SidePanel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </SidePanel.Trigger>
        <SidePanel.Header kind="primary">Header</SidePanel.Header>
        <SidePanel.Content>
          <TextLine repeat={100} />
        </SidePanel.Content>
        <SidePanel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
      </SidePanel>
      <div role="main">
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s.
        <br />
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s. <br />
        Lorem hipsum meditation cardigan +1, plaid brunch street cred cloud bread art party pickled, VHS fingerstache la
        croix paleo single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan.
        Wayfarers portland chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu
        ennui whatever williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony
        90s.
      </div>
    </React.Fragment>
  );
};

export const ZIndexSidePanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Story>
        <SidePanel isOpen={isOpen} onClose={toggle} zIndex={99}>
          <SidePanel.Overlay />
          <SidePanel.Trigger onClick={toggle}>Open SidePanel</SidePanel.Trigger>
          <SidePanel.Header>Header</SidePanel.Header>
          <SidePanel.Content>
            <p style={{ marginTop: 0 }}>
              The <code>zIndex</code> prop of this <code>&lt;SidePanel&gt;</code> is also <code>99</code>.
            </p>
            <p>
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
            </p>
          </SidePanel.Content>
        </SidePanel>
        <div
          css={`
            position: relative;
            z-index: 99;
          `}
        >
          <p>
            The <code>z-index</code> of this content is <code>99</code>.
          </p>
          <TextLine repeat={100} />
        </div>
      </Story>
    </React.Fragment>
  );
};

export const FocusHeading = () => {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Story>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open SidePanel
      </Button>
      <SidePanel
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        onAfterOpen={() => {
          if (refHeading.current) refHeading.current.focus();
        }}
        css={`
          [data-pka-anchor="heading"]:focus {
            ${stylers.focusRing.subtle()}
          }
        `}
      >
        <SidePanel.Header refHeading={refHeading}>Header</SidePanel.Header>
        <SidePanel.Content>
          <p>
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </SidePanel.Content>
      </SidePanel>
    </Story>
  );
};
