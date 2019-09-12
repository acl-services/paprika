import React from "react";

export const Nav = props => (
  <div
    data-pka-anchor="purple-navigator"
    style={{ display: "flex", justifyContent: "flex-end", width: "100%", height: "40px", background: "#4B2164" }}
  >
    {props.children}
  </div>
);

export const TextLine = props => {
  const { repeat } = props;

  return [
    ...Object.keys(Array(repeat).fill(null)).map(i => (
      <svg key={i} viewBox="0 0 100 4" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#EEE" x="0" width="100%" height="2px" rx="2" />
      </svg>
    )),
  ];
};
