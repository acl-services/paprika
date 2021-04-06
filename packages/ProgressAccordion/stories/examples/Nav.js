import React from "react";
import ProgressAccordion from "../../src";

const NavStory = () => {
  return (
    <ProgressAccordion activeIndex={2} activeStatus="" a11yText="" expandAll>
      {[1, 2, 3, 4].map(index => (
        <ProgressAccordion.Item
          label={`Step ${index}`}
          onClick={() => {
            console.log(`clicked step ${index}`);
          }}
        >
          <ProgressAccordion.Responses>
            <ProgressAccordion.Responses.Item>
              <p>This is a description of step {index}. Try clicking the label and check the console.</p>
            </ProgressAccordion.Responses.Item>
          </ProgressAccordion.Responses>
        </ProgressAccordion.Item>
      ))}
    </ProgressAccordion>
  );
};

export default () => <NavStory />;
