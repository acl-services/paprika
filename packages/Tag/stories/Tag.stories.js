import React from "react";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Avatar from "../../Avatar/src";

import Tag, { Tags } from "../src";
import * as types from "../src/types";

export default {
  title: "Tag",
  component: Tag,
};

export function TagsExample() {
  return (
    <>
      {[{ tagSize: "medium", avatarSize: "small" }, { tagSize: "large", avatarSize: "medium" }].map(permutation => (
        <Tags>
          <Tag size={permutation.tagSize}>
            <Avatar isRound size={permutation.avatarSize}>
              WW
            </Avatar>
            {permutation.tagSize} with text Avatar
          </Tag>
          <Tag size={permutation.tagSize}>
            <Avatar isRound size={permutation.avatarSize}>
              <CalendarIcon />
            </Avatar>
            {permutation.tagSize} with Icon Avatar
          </Tag>
          <Tag size={permutation.tagSize}>{`${permutation.tagSize} just text`}</Tag>
          <Tag size={permutation.tagSize} hasDeleteButton>{`${permutation.tagSize} has delete option`}</Tag>
          <Tag size={permutation.tagSize} hasDeleteButton style={{ width: "120px" }}>
            {`${permutation.tagSize} has delete option and really long text`}
          </Tag>
        </Tags>
      ))}
      Colours
      {[{ tagSize: "large", avatarSize: "medium" }].map(permutation => (
        <Tags>
          {Object.entries(types.colors).map(color => (
            <Tag tagColor={color[1]} size={permutation.tagSize}>
              <Avatar isRound size={permutation.avatarSize}>
                WW
              </Avatar>
              {permutation.tagSize} with text Avatar
            </Tag>
          ))}
        </Tags>
      ))}
      Severity Colours
      {[{ tagSize: "large", avatarSize: "medium" }].map(permutation => (
        <Tags>
          {Object.entries(types.severityTagColors).map(color => (
            <Tag tagColor={color[1]} size={permutation.tagSize}>
              <Avatar isRound size={permutation.avatarSize}>
                WW
              </Avatar>
              {permutation.tagSize} with text Avatar
            </Tag>
          ))}
        </Tags>
      ))}
    </>
  );
}
