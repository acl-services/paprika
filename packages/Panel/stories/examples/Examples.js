import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Sortable from "@paprika/sortable";
import Panel from "../../src";
import { Nav, TextLine } from "../helpers";

export const BasicPanel = props => {
  const { disableBodyOverflow, hasOverlay, slideFrom } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Nav />
      <Panel
        a11yText="Panel View"
        disableBodyOverflow={disableBodyOverflow}
        isOpen={isOpen}
        onClose={toggle}
        offset={{ top: 40 }}
        slideFrom={slideFrom}
      >
        {hasOverlay ? <Panel.Overlay /> : null}
        <Panel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panel.Trigger>
        <Panel.Header kind="primary">Header</Panel.Header>
        <Panel.Content>
          <TextLine repeat={100} />
        </Panel.Content>
        <Panel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panel.Footer>
      </Panel>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

export const FocusLockPanel = () => {
  return (
    <Panel isOpen>
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>
        <input type="text" data-autofocus />
      </Panel.Content>
    </Panel>
  );
};

export const FromBottom = () => {
  const [isFooterOpen, setIsFooterOpen] = React.useState(true);
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const navWidth = { expanded: 300, collapsed: 30 };

  const toggleFooter = () => {
    setIsFooterOpen(state => !state);
  };
  const toggleNav = () => {
    setIsNavOpen(state => !state);
  };

  function getNavWidth() {
    return isNavOpen ? navWidth.expanded : navWidth.collapsed;
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", height: "100vh" }}>
        <nav style={{ flex: `0 0 ${getNavWidth()}px`, background: "red" }}>
          <button type="button" onClick={toggleNav}>
            {isNavOpen ? <span>&laquo;</span> : <span>&raquo;</span>}
          </button>
        </nav>
        <div style={{ flex: 1, padding: "10px" }}>
          <p>Try toggling the div on the left and notice the Panel&apos;s width adjusts (controlled by consumer).</p>
          <button type="button" onClick={toggleFooter}>
            {isFooterOpen ? "close" : "open"} the bottom Panel
          </button>
        </div>
      </div>

      <Panel
        height={150}
        isOpen={isFooterOpen}
        offset={{ left: getNavWidth() }}
        onClose={toggleFooter}
        slideFrom={Panel.types.slideFrom.BOTTOM}
      >
        <Panel.Content>
          This Panel comes up from the bottom.
          <TextLine repeat={10} />
          Pretty neat, eh?
        </Panel.Content>
      </Panel>
    </React.Fragment>
  );
};

export const GroupPanel = () => {
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
          <Button data-pka-anchor="button-panel1" onClick={handleParent1} size="small">
            Parent 1
          </Button>
          <Button data-pka-anchor="button-panel2" onClick={handleParent2} size="small">
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
      <Panel.Group offsetY={40}>
        <Panel data-pka-anchor="panel1" width={400} onClose={handleParent1} isOpen={spParent1}>
          <Panel.Header kind="primary">Parent 1</Panel.Header>
          <Panel.Content>
            <TextLine repeat={100} />
            <Button>Test button</Button>
          </Panel.Content>
        </Panel>
        <Panel data-pka-anchor="panel2" onClose={handleParent2} width={400} isOpen={spParent2}>
          <Panel.Header kind="primary">Parent 2</Panel.Header>
          <Panel.Content>
            <Button
              onClick={() => {
                setSpChild(state => !state);
              }}
            >
              Toggle Child
            </Button>
          </Panel.Content>
        </Panel>
        <Panel
          data-pka-anchor="panel-child"
          onClose={() => {
            setSpChild(false);
          }}
          kind="child"
          width={400}
          isCompact
          isOpen={spChild}
        >
          <Panel.Header>Child of Parent 2</Panel.Header>
          <Panel.Content>
            <TextLine repeat={100} />
          </Panel.Content>
          <Panel.Footer>
            <Button>Test button</Button>
          </Panel.Footer>
        </Panel>
      </Panel.Group>
    </React.Fragment>
  );
};

export const StickyFooterPanel = () => {
  return (
    <Panel isOpen>
      <Panel.Header>Header</Panel.Header>
      <Panel.Content>
        <TextLine repeat={100} />
      </Panel.Content>
      <Panel.Footer isSticky>Footer isSticky</Panel.Footer>
    </Panel>
  );
};

export const StickyHeaderPanel = () => {
  return (
    <Panel isOpen>
      <Panel.Header isSticky>Header isSticky</Panel.Header>
      <Panel.Content>
        <TextLine repeat={100} />
      </Panel.Content>
      <Panel.Footer>Footer</Panel.Footer>
    </Panel>
  );
};

export const PushContentPanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <React.Fragment>
      <Nav />
      <Panel getPushContentElement={getMainElement} isOpen={isOpen} onClose={toggle} pushContentWidth="50%" width="50%">
        <Panel.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panel.Trigger>
        <Panel.Header kind="primary">Header</Panel.Header>
        <Panel.Content>
          <TextLine repeat={100} />
        </Panel.Content>
        <Panel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panel.Footer>
      </Panel>
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

export const ZIndexPanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Story>
        <Panel isOpen={isOpen} onClose={toggle} zIndex={99}>
          <Panel.Overlay />
          <Panel.Trigger onClick={toggle}>Open Panel</Panel.Trigger>
          <Panel.Header>Header</Panel.Header>
          <Panel.Content>
            <p style={{ marginTop: 0 }}>
              The <code>zIndex</code> prop of this <code>&lt;Panel&gt;</code> is also <code>99</code>.
            </p>
            <p>
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
            </p>
          </Panel.Content>
        </Panel>
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
        Open Panel
      </Button>
      <Panel
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
        <Panel.Header refHeading={refHeading}>Header</Panel.Header>
        <Panel.Content>
          <p>
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </Panel.Content>
      </Panel>
    </Story>
  );
};

export const WithSortable = () => {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  const initChildren = [
    <Sortable.Item sortId="1" key={1} className="my-custom-sortable-item-classname" data-qa-id="my-custom-data-qa-id">
      Item One
    </Sortable.Item>,
    <Sortable.Item sortId="2" key={2}>
      Item Two
    </Sortable.Item>,
    <Sortable.Item sortId="3" key={3}>
      Item Three
    </Sortable.Item>,
  ];
  const [children, setChildren] = React.useState(initChildren);

  const handleChange = result => {
    console.log("sortable change");

    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const reorderedChildren = [...children];
    const movedChild = reorderedChildren.splice(source, 1);
    reorderedChildren.splice(destination, 0, ...movedChild);

    setChildren(reorderedChildren);
  };

  return (
    <Story>
      <Button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? "Close" : "Open"} Panel
      </Button>
      <Panel
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Panel.Header refHeading={refHeading}>Header</Panel.Header>
        <Panel.Content>
          <Sortable onChange={handleChange} onRemove={() => {}} className="my-custom-sortable-classname">
            {children}
          </Sortable>
        </Panel.Content>
      </Panel>
    </Story>
  );
};
