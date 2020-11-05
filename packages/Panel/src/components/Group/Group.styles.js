import styled, { css } from "styled-components";

export const Group = styled.div(
  ({ zIndex, offsetY }) => css`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    position: fixed;
    right: 0;
    top: ${offsetY}px;
    visibility: hidden;
    width: 100%;
    z-index: ${zIndex};

    /* Read more here: https://github.com/acl-services/paprika/pull/239#discussion_r336679762 */
    > div[role="dialog"] {
      visibility: visible;
    }
  `
);
