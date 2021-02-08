import React from "react";
import * as sc from "./MarvelOption.styles";

export default function MarvelOption(props) {
  const { result } = props;
  return (
    <sc.MarvelOptionWrapper>
      <sc.MarvelImage alt={result.name} src={`${result.thumbnail.path}.${result.thumbnail.extension}`} />
      {result.name}
    </sc.MarvelOptionWrapper>
  );
}
