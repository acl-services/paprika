/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Popover from "../../Popover";

const Icon = styled.span`
  display: inline-block;
  line-height: 1;
  font-size: 24px;
  cursor: help;
`;

const Gap = styled.div`
  height: 50px;
`;

export default class ExampleStory extends React.Component {
  render() {
    return (
      <CenteredStory>
        <div>
          <h5>Render prop – &lt;button&gt;</h5>
          <Popover>
            <Popover.Trigger>
              {handler => (
                <button type="button" onClick={handler}>
                  More info
                </button>
              )}
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
            </Popover.Content>
          </Popover>

          <Gap />

          <h5>
            Render prop – &lt;Icon&gt; (fake) <code>isEager</code>
          </h5>
          <Popover isEager>
            <Popover.Trigger>
              {handler => (
                <Icon onMouseOver={handler} onMouseOut={handler} onFocus={handler} tabIndex={0}>
                  <span role="img" aria-label="info">
                    ℹ️
                  </span>
                </Icon>
              )}
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
            </Popover.Content>
          </Popover>

          <Gap />

          <h5>Node – &lt;a&gt; link</h5>
          <Popover>
            <Popover.Trigger>
              <a href="http://www.acl.com">More info</a>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
            </Popover.Content>
          </Popover>

          <Gap />

          <h5>
            Node – <code>isEager isDark</code>
          </h5>
          <Popover isEager isDark>
            <Popover.Trigger>
              <Icon>
                <span role="img" aria-label="bulb light">
                  💡 info
                </span>
              </Icon>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Tip />
              <Popover.Card>Lorem ipsum single-origin kombucha.</Popover.Card>
            </Popover.Content>
          </Popover>
        </div>
      </CenteredStory>
    );
  }
}
