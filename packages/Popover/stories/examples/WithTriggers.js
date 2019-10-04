import React from "react";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Icon from "@paprika/icon/lib/InfoCircle";
import Button from "@paprika/button";
import Popover from "../../src";

const Gap = styled.div`
  height: 50px;
`;

const ExampleStory = () => (
  <CenteredStory>
    <div>
      <h5>
        Render prop: <code>&lt;Button&gt;</code>
      </h5>
      <Popover>
        <Popover.Trigger>
          {handler => (
            <Button onClick={handler} icon={<Icon />}>
              More info
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>
        Render prop: <code>&lt;input&gt;</code> / <code>shouldKeepFocus</code>
      </h5>
      <Popover shouldKeepFocus>
        <Popover.Trigger>{handler => <input onClick={handler} onBlur={handler} />}</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>
        Render prop: <code>&lt;Icon&gt;</code> / <code>isEager</code>
      </h5>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <Icon
              {...attributes}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              tabIndex={0}
              role="img"
              aria-label="info"
            />
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      &nbsp;More info
      <Gap />
      <h5>
        Render prop: &lt;a&gt; link <code>isEager</code>
      </h5>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <a
              {...attributes}
              href="http://www.acl.com"
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
            >
              More info
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>
        Render prop: &lt;a&gt; Button <code>isEager</code>
      </h5>
      <Popover isEager>
        <Popover.Trigger>
          {(handler, attributes) => (
            <Button
              {...attributes}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              onClick={() => {
                window.location.href = "http://www.acl.com";
              }}
            >
              More info
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>Node: &lt;a&gt; link</h5>
      <Popover>
        <Popover.Trigger>
          <a href="http://www.acl.com">More info</a>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>
        Render prop: &lt;a&gt; link <code>isEager</code> without <code>Popover.Card</code> component
      </h5>
      <Popover isEager isDark>
        <Popover.Trigger>
          {(handler, attributes) => (
            <a
              {...attributes}
              href="http://www.acl.com"
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
            >
              More info
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content>Lorem ipsum single-origin kombucha.</Popover.Content>
      </Popover>
      <Gap />
      <h5>
        Node: <code>isEager isDark</code>
      </h5>
      <Popover isEager isDark>
        <Popover.Trigger>
          <span role="img" aria-label="bulb light">
            💡
          </span>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <h5>
        Node: <code>shouldKeepFocus</code>
      </h5>
      <Popover shouldKeepFocus>
        <Popover.Trigger>
          <input />
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
    </div>
  </CenteredStory>
);

export default ExampleStory;
