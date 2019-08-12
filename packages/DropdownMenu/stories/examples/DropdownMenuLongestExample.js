import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuExample = () => {
  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
          Trigger
        </DropdownMenu.Trigger>
      )}
    >
      <DropdownMenu.Item onClick={() => {}}>
        SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidocious
      </DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Pseudopseudohypoparathyroidism</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Floccinaucinihilipilification</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Antidisestablishmentarianism</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Supercalifragilisticexpialidocious</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Pseudopseudohypoparathyroidism</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Floccinaucinihilipilification</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Antidisestablishmentarianism</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Supercalifragilisticexpialidocious</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Pseudopseudohypoparathyroidism</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Floccinaucinihilipilification</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Antidisestablishmentarianism</DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuExample;
