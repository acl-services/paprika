import styled from "styled-components";

export const Td = styled.td`
  padding: 14px;
  border-bottom: 1px solid #ccc;
  width: 200px;
`;

export const Th = styled.th`
  padding: 14px;
  border-bottom: 1px solid #ccc;
  max-width: 200px;
`;

export const TdFilter = styled(Td)`
  padding: 14px;
  border-bottom: 1px solid #ccc;
  max-width: 200px;
  text-align: right;
`;

export const FiltersStyled = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;

  > div,
  > [role="button"] {
    margin-right: 8px;
  }
`;
