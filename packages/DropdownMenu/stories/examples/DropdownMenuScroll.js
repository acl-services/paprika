import React from "react";
import styled from "styled-components";
import DropdownMenu from "../../src";

const Container = styled.div`
  bottom: 231px;
  left: 50%;
  position: fixed;
  width: 300px;
`;

const DropdownMenuScroll = () => {
  return (
    <Container>
      <DropdownMenu maxHeight="250px">
        <DropdownMenu.Trigger data-pka-anchor="dropdown-menu__trigger">Trigger</DropdownMenu.Trigger>
        <DropdownMenu.Item>Black Widow</DropdownMenu.Item>
        <DropdownMenu.Item>Captain America</DropdownMenu.Item>
        <DropdownMenu.Item>Hawkeye</DropdownMenu.Item>
        <DropdownMenu.Item>Hulk</DropdownMenu.Item>
        <DropdownMenu.Item>Iron Man</DropdownMenu.Item>
        <DropdownMenu.Item isDisabled>Loki</DropdownMenu.Item>
        <DropdownMenu.Item isDisabled isDestructive>
          Thanos
        </DropdownMenu.Item>
        <DropdownMenu.Item>Thor</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item>
          I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am
          Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot.
          I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are
          Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am
          Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I
          am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are
          Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I
          am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are
          Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We
          are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are
          Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot.
          I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We
          are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are
          Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I
          am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot.
          I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are
          Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We
          are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are
          Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We
          are Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are
          Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am
          Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot.
          We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are
          Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are
          Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I
          am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are
          Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I
          am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am
          Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I
          am Groot. We are Groot. I am Groot. I am Groot. I am Groot.
        </DropdownMenu.Item>
      </DropdownMenu>
    </Container>
  );
};

export default DropdownMenuScroll;
