import styled from "styled-components";

export default {
  Container: styled.div`
    height: 100%;
    width: 100vw;
  `,
  TopNav: styled.div`
    background: #4b2164;
    height: 40px;
    width: 100%;
  `,
  Body: styled.div`
    display: flex;
    width: 100%;
    [role="grid"] {
      background: #e7e7e7;
    }
  `,
  SideBar: styled.div`
    background: #2e153d;
    flex-grow: 0;
    height: calc(100vh - 40px);
    width: 280px;
  `,
  Main: styled.div`
    flex-basis: 100%;
  `,
};
