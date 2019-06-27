import styled from "styled-components";

export const FooterContainerStyled = styled.div`
  border-top: 1px solid #d7d7d7;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  width: calc(100% - 16px);

  & > div {
    width: 50%;
    [role="button"] {
      margin-right: 8px;
    }
  }

  & > div + div {
    text-align: right;
  }
`;
