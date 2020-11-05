import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Sortable from "@paprika/sortable";
import Panels from "../../src";
import { Nav, TextLine } from "../helpers";

export const BasicPanels = props => {
  const { disableBodyOverflow, hasOverlay, isSlideFromLeft } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Nav />
      <Panels
        a11yText="Panels View"
        disableBodyOverflow={disableBodyOverflow}
        isOpen={isOpen}
        onClose={toggle}
        offsetY={40}
        isSlideFromLeft={isSlideFromLeft}
      >
        {hasOverlay ? <Panels.Overlay /> : null}
        <Panels.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panels.Trigger>
        <Panels.Header kind="primary">Header</Panels.Header>
        <Panels.Content>
          <TextLine repeat={100} />
        </Panels.Content>
        <Panels.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panels.Footer>
      </Panels>
      <TextLine repeat={100} />
    </React.Fragment>
  );
};

export const FocusLockPanels = () => {
  return (
    <Panels isOpen>
      <Panels.Header>Header</Panels.Header>
      <Panels.Content>
        <input type="text" data-autofocus />
      </Panels.Content>
    </Panels>
  );
};

export const GroupPanels = () => {
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
          <Button data-pka-anchor="button-panels1" onClick={handleParent1} size="small">
            Parent 1
          </Button>
          <Button data-pka-anchor="button-panels2" onClick={handleParent2} size="small">
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
      <Panels.Group offsetY={40}>
        <Panels data-pka-anchor="panels1" width={400} onClose={handleParent1} isOpen={spParent1}>
          <Panels.Header kind="primary">Parent 1</Panels.Header>
          <Panels.Content>
            <TextLine repeat={100} />
            <Button>Test button</Button>
          </Panels.Content>
        </Panels>
        <Panels data-pka-anchor="panels2" onClose={handleParent2} width={400} isOpen={spParent2}>
          <Panels.Header kind="primary">Parent 2</Panels.Header>
          <Panels.Content>
            <Button
              onClick={() => {
                setSpChild(state => !state);
              }}
            >
              Toggle Child
            </Button>
          </Panels.Content>
        </Panels>
        <Panels
          data-pka-anchor="panels-child"
          onClose={() => {
            setSpChild(false);
          }}
          kind="child"
          width={400}
          isCompact
          isOpen={spChild}
        >
          <Panels.Header>Child of Parent 2</Panels.Header>
          <Panels.Content>
            <TextLine repeat={100} />
          </Panels.Content>
          <Panels.Footer>
            <Button>Test button</Button>
          </Panels.Footer>
        </Panels>
      </Panels.Group>
    </React.Fragment>
  );
};

export const StickyFooterPanels = () => {
  return (
    <Panels isOpen>
      <Panels.Header>Header</Panels.Header>
      <Panels.Content>
        <TextLine repeat={100} />
      </Panels.Content>
      <Panels.Footer isSticky>Footer isSticky</Panels.Footer>
    </Panels>
  );
};

export const StickyHeaderPanels = () => {
  return (
    <Panels isOpen>
      <Panels.Header isSticky>Header isSticky</Panels.Header>
      <Panels.Content>
        <TextLine repeat={100} />
      </Panels.Content>
      <Panels.Footer>Footer</Panels.Footer>
    </Panels>
  );
};

export const PushContentPanels = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };
  const getMainElement = () => document.querySelector("div[role='main']");

  return (
    <React.Fragment>
      <Nav />
      <Panels
        getPushContentElement={getMainElement}
        isOpen={isOpen}
        onClose={toggle}
        pushContentWidth="50%"
        width="50%"
      >
        <Panels.Trigger kind="primary" onClick={toggle}>
          {isOpen ? "close" : "open"}
        </Panels.Trigger>
        <Panels.Header kind="primary">Header</Panels.Header>
        <Panels.Content>
          <TextLine repeat={100} />
        </Panels.Content>
        <Panels.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panels.Footer>
      </Panels>
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

export const ZIndexPanels = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <React.Fragment>
      <Story>
        <Panels isOpen={isOpen} onClose={toggle} zIndex={99}>
          <Panels.Overlay />
          <Panels.Trigger onClick={toggle}>Open Panels</Panels.Trigger>
          <Panels.Header>Header</Panels.Header>
          <Panels.Content>
            <p style={{ marginTop: 0 }}>
              The <code>zIndex</code> prop of this <code>&lt;Panels&gt;</code> is also <code>99</code>.
            </p>
            <p>
              Because the content is renderered as a <code>&lt;Portal&gt;</code> at the end of the DOM, it will be
              painted on top.
            </p>
          </Panels.Content>
        </Panels>
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
        Open Panels
      </Button>
      <Panels
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
        <Panels.Header refHeading={refHeading}>Header</Panels.Header>
        <Panels.Content>
          <p>
            Unicorn next level readymade polaroid, locavore hot chicken forage ennui crucifix tote bag yuccie. Raw denim
            tumblr echo park bushwick hoodie iceland cloud bread iPhone kombucha shoreditch taiyaki woke. Brunch ramps
            cred polaroid, vinyl skateboard portland typewriter jean shorts single-origin coffee flexitarian drinking
            vinegar.
          </p>
        </Panels.Content>
      </Panels>
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
        {isOpen ? "Close" : "Open"} Panels
      </Button>
      <Panels
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Panels.Header refHeading={refHeading}>Header</Panels.Header>
        <Panels.Content>
          <Sortable onChange={handleChange} onRemove={() => {}} className="my-custom-sortable-classname">
            {children}
          </Sortable>
        </Panels.Content>
      </Panels>
    </Story>
  );
};
