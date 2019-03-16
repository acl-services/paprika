/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import { Td, Th, FiltersStyled, TdFilter } from "./filterSelect.styles";
import { Frame } from "../../stories.styles";
import ListBox from "../../../index";

const items = [
  { name: "Punisher", color: "blue", price: 2300, qty: 15 },
  { name: "Catwoman", color: "black", price: 1500, qty: 34 },
  { name: "Venom", color: "black", price: 3400, qty: 12 },
  { name: "Thunderbolts", color: "yellow", price: 2800, qty: 21 },
  { name: "Deadpool", color: "red", price: 1320, qty: 121 },
  { name: "Spawn", color: "red and black", price: 109, qty: 342 },
  { name: "Wolverine", color: "yellow and blue", price: 500, qty: 1231 },
];

const FilterPrice = React.forwardRef((props, ref) => {
  return (
    <ListBox ref={ref} onChange={props.onChange} placeholder="Price">
      <ListBox.Option>higher price</ListBox.Option>
      <ListBox.Option isSelected>Lower price</ListBox.Option>
    </ListBox>
  );
});

const FilterQty = React.forwardRef((props, ref) => {
  return (
    <ListBox ref={ref} onChange={props.onChange} placeholder="Quantity" isMulti>
      {items.map(item => (
        <ListBox.Option isSelected={Number.parseInt(item.qty, 10) > 100} value={item.qty} key={item.name}>
          {item.qty}
        </ListBox.Option>
      ))}
    </ListBox>
  );
});

const FilterColor = React.forwardRef((props, ref) => {
  return (
    <ListBox ref={ref} onChange={props.onChange} isMulti placeholder="Color">
      {[...new Set(items.map(item => item.color))].map(item => (
        <ListBox.Option value={item} key={item}>
          {item}
        </ListBox.Option>
      ))}
    </ListBox>
  );
});

function Table() {
  const refFilterColor = React.useRef(null);
  const refFilterPrice = React.useRef(null);
  const refFilterQty = React.useRef(null);
  const [filterColorValue, setFilterColorValue] = React.useState();
  const [filterPriceValue, setFilterPriceValue] = React.useState();
  const [filterQtyValue, setFilterQtyValue] = React.useState();

  const handleChangeFilterColor = (index, options) => {
    debugger;
  };

  const handleChangeFilterPrice = (index, options) => {
    debugger;
  };

  const handleChangeFilterQty = (index, options) => {
    debugger;
  };

  const handleClickClear = () => {
    refFilterColor.current.clear();
    refFilterPrice.current.clear();
    refFilterQty.current.clear();
  };

  const handleClickReset = () => {
    refFilterColor.current.reset();
    refFilterPrice.current.reset();
    refFilterQty.current.reset();
  };

  const handleClickApply = () => {};

  React.useLayoutEffect(() => {
    refFilterColor.current.focus();
  }, [refFilterColor.current]);

  return (
    <React.Fragment>
      <FiltersStyled>
        <FilterColor onChange={handleChangeFilterColor} ref={refFilterColor} />
        <FilterPrice onChange={handleChangeFilterPrice} ref={refFilterPrice} />
        <FilterQty onChange={handleChangeFilterQty} ref={refFilterQty} />
        <Button onClick={handleClickClear}>Clear</Button>
        <Button onClick={handleClickReset}>Reset</Button>
        <Button onClick={handleClickApply}>Apply</Button>
      </FiltersStyled>
      <table style={{ width: "100%", textAlign: "left", border: "1px solid #CCC", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <Th style={{ width: "150px" }}>Superhero</Th>
            <Th scope="col">Color</Th>
            <Th scope="col">Price</Th>
            <Th scope="col">Qty</Th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.name}>
              <Td>{item.name}</Td>
              <TdFilter>{item.color}</TdFilter>
              <TdFilter>{item.price}</TdFilter>
              <TdFilter>{item.qty}</TdFilter>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

storiesOf("ListBox / recipes", module).add("Filter select", () => (
  <Frame>
    <Table />
  </Frame>
));
