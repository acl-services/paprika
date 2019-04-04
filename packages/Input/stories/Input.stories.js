import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./examples/Basic";

storiesOf("Input", module)
  .add("Basic", () => <Input />)
  .add("Sizes", () => (
    <div className="story-body story--forms">
      <h3>
        <small>
          <code>size = small</code>
        </small>
      </h3>
      <Input placeholder="First Name" size="small" />
      <br />
      <h3>
        <small>
          <code>size = medium</code> (default)
        </small>
      </h3>
      <Input placeholder="First Name" />
      <br />
      <h3>
        <small>
          <code>size = large</code>
        </small>
      </h3>
      <Input placeholder="First Name" size="large" />
      <br />
    </div>
  ))
  .add("With content", () => (
    <div className="story-body story--forms">
      <Input value="Sam Bennett" ariaLabel="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>hasClearButton</code>
        </small>
      </h3>
      <Input value="Sam Bennett" ariaLabel="Sam Bennett" hasClearButton />
    </div>
  ))
  .add("With decorative icon", () => (
    <div className="story-body story--forms">
      <h3>
        <small>
          <code>icon</code>
        </small>
      </h3>
      <Input icon="filter" placeholder="Filter" />
    </div>
  ))
  .add("With isDisabled / isReadOnly", () => (
    <div className="story-body story--forms">
      <h3>
        <small>
          <code>isDisabled</code>
        </small>
      </h3>
      <Input isDisabled placeholder="First Name" />
      <Input isDisabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>disabled</code>
        </small>
      </h3>
      <Input disabled placeholder="First Name" />
      <Input disabled value="Sam Bennett" />
      <br />
      <h3>
        <small>
          <code>isReadOnly</code>
        </small>
      </h3>
      <Input isReadOnly placeholder="First Name" />
      <Input isReadOnly value="Sam Bennett" />
      <Input isReadOnly value="This is a very long text to test that you can scroll this input horizontally." />
    </div>
  ))
  .add("Types", () => (
    <div className="story-body story--forms">
      <h3>
        <small>
          <code>type=&quot;text&quot;</code>
        </small>
      </h3>
      <Input type="text" value="p@$$w0rD" />
      <br />
      <h3>
        <small>
          <code>type=&quot;password&quot;</code>
        </small>
      </h3>
      <Input type="password" value="p@$$w0rD" />
      <br />
      <h3>
        <small>
          <code>type=&quot;number&quot;</code>
        </small>
      </h3>
      Don&apos;t do this. Use the &lt;InputNumber&gt; component.
    </div>
  ))
  .add("With Ref", () => {
    let $input;
    const setRef = node => {
      $input = node;
    };

    setTimeout(() => {
      $input.focus();
    }, 1000);

    return (
      <div className="story-body story--forms">
        <h3>
          <small>
            <code>inputRef</code>
          </small>
        </h3>
        <Input inputRef={setRef} />
        <small>This text input will capture the focus after 1 second.</small>
      </div>
    );
  });
