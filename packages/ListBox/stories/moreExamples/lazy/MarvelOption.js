/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";

export default function MarvelOption(props) {
  const { result } = props;
  return (
    <React.Fragment>
      <img
        alt={result.name}
        css="width: 24px; height: 24px;"
        src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
      />
      {result.name}
    </React.Fragment>
  );
}
