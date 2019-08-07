import React from "react";
import mockResponses from "./mockResponses";
import ProgressAccordion from "../../src";

export const generateItems = items =>
  items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ProgressAccordion.Responses.Item key={index} heading={item.heading}>
      {item.body}
    </ProgressAccordion.Responses.Item>
  ));

export default generateItems(mockResponses);
