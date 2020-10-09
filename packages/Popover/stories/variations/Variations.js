import React from "react";
import { CenteredStory, Gap, Tagline, Rule, Story } from "storybook/assets/styles/common.styles";
import ButtonExample from "../examples/ButtonExample";
import InputExample from "../examples/InputExample";
import IconExample from "../examples/IconExample";
import LinkIsEagerExample from "../examples/LinkIsEagerExample";
import ButtonIsEagerExample from "../examples/ButtonIsEagerExample";
import IsDarkExample from "../examples/IsDarkExample";
import LinkExample from "../examples/LinkExample";
import NoCardExample from "../examples/NoCardExample";
import ShouldKeepFocusExample from "../examples/ShouldKeepFocusExample";
import ButtonStateExample from "../examples/ButtonStateExample";

const Variations = () => (
  <CenteredStory>
    <div>
      <Tagline>
        Render prop: <code>&lt;Button&gt;</code>
      </Tagline>
      <Story>
        <ButtonExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Render prop: <code>&lt;input&gt;</code> / <code>shouldKeepFocus</code>
      </Tagline>
      <Story>
        <InputExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Render prop: <code>&lt;Icon&gt;</code> / <code>isEager</code>
      </Tagline>
      <Story>
        <IconExample />
      </Story>
      &nbsp;More info
      <Gap />
      <Rule />
      <Tagline>
        Render prop: &lt;a&gt; link <code>isEager</code>
      </Tagline>
      <Story>
        <LinkIsEagerExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Render prop: &lt;a&gt; Button <code>isEager</code>
      </Tagline>
      <Story>
        <ButtonIsEagerExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>Node: &lt;a&gt; link</Tagline>
      <Story>
        <LinkExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Render prop: &lt;a&gt; link <code>isEager</code> without <code>Popover.Card</code> component
      </Tagline>
      <Story>
        <NoCardExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Node: <code>isEager isDark</code>
      </Tagline>
      <Story>
        <IsDarkExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>
        Node: <code>shouldKeepFocus</code>
      </Tagline>
      <Story>
        <ShouldKeepFocusExample />
      </Story>
      <Gap />
      <Rule />
      <Tagline>Render prop: &lt;a&gt; Button with different state</Tagline>
      <Story>
        <ButtonStateExample />
      </Story>
      <Gap />
    </div>
  </CenteredStory>
);

export default Variations;
