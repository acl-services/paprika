import React from "react";
import ProgressAccordion from "../../src";

const NavStory = () => {
  return (
    <ProgressAccordion activeIndex={1} activeStatus="" a11yText="">
      <ProgressAccordion.NavItem
        label="Step 1"
        onClick={() => {
          console.log("You clicked step 1");
        }}
      >
        <p>This is a description of step 1. Try clicking the label and check the console.</p>
      </ProgressAccordion.NavItem>
      <ProgressAccordion.NavItem
        label="Step 2"
        onClick={() => {
          console.log("You clicked step 2");
        }}
      >
        <p>This is a description of step 2. Try clicking the label and check the console.</p>
      </ProgressAccordion.NavItem>
      <ProgressAccordion.NavItem label="Step 3" onClick={null}>
        <p>This is a description of step 3. It cannot be clicked.</p>
      </ProgressAccordion.NavItem>
    </ProgressAccordion>
  );
};

export default () => <NavStory />;
