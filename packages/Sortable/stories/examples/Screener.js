import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import * as helpers from "../Sortable.stories.helpers";
import Sortable from "../../src";
import "./Overflowing.scss";

const Example = () => {
  return (
    <Story css={helpers.storyStyles}>
      <Sortable onChange={() => {}} onRemove={() => {}}>
        {helpers.basicChildren(4)}
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}} onRemove={() => {}}>
        <div>Zero</div>
        <Sortable.Item sortId="1">One</Sortable.Item>
        <Sortable.Item sortId="2">Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two</Sortable.Item>
        <Sortable.Item sortId="3">
          Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three
        </Sortable.Item>
        <Sortable.Item sortId="4">
          Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four
          Four Four Four Four Four Four
        </Sortable.Item>
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}} onRemove={() => {}}>
        {helpers.inputChildren(4)}
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}}>{helpers.inputChildren(4)}</Sortable>
      <Rule />
      <Sortable onChange={() => {}} hasNumbers={false}>
        {helpers.inputChildren(4)}
      </Sortable>
      <Rule />
      <div className="overflowing-example-sortable-wrapper">
        <Sortable onChange={() => {}} onRemove={() => {}}>
          <Sortable.Item sortId="1">
            <div className="overflowing-example__parent">
              <div className="overflowing-example__child">short content</div>
            </div>
          </Sortable.Item>
          <Sortable.Item sortId="2">
            <div className="overflowing-example__parent">
              <div className="overflowing-example__child">really long content that is too wide for the parent.</div>
            </div>
          </Sortable.Item>
        </Sortable>
      </div>
    </Story>
  );
};

export default Example;
