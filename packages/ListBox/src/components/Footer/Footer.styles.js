import styled from "styled-components";

export const FooterContainerStyled = styled.div`
  display: flex;
  border-top: 1px solid #d7d7d7;
  padding: 8px;
  justify-content: flex-start;
  width: 100%;
  & > div {
    width: calc(50% - 8px);
    [role="button"] {
      margin-right: 8px;
    }
  }

  & > div + div {
    text-align: right;
  }
`;
