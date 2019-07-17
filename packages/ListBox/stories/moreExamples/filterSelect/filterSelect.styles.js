import styled from "styled-components";

export const Td = styled.td`
  border-bottom: 1px solid #ccc;
  padding: 14px;
  width: 200px;
`;

export const Th = styled.th`
  border-bottom: 1px solid #ccc;
  max-width: 200px;
  padding: 14px;
`;

export const TdFilter = styled(Td)`
  border-bottom: 1px solid #ccc;
  max-width: 200px;
  padding: 14px;
  text-align: right;
`;

export const FiltersStyled = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 12px;

  > div,
  > [role="button"] {
    margin-right: 8px;
  }
`;
