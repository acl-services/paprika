import React from "react";
import styled from "styled-components";

const Layout = React.forwardRef((props, ref) => {
  const { children } = props;

  const sc = {
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

  return (
    <sc.Container>
      <sc.TopNav />
      <sc.Body>
        <sc.SideBar />
        <sc.Main ref={ref}>{children}</sc.Main>
      </sc.Body>
    </sc.Container>
  );
});

export default Layout;
